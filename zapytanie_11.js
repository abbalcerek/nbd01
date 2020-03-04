// Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 

// with aggregate
print(" -------- result aggregate --------")
db.people.aggregate([
    { $addFields: {
        height_decimal: {$convert: { input: "$height", to: "decimal", onError: Error }},
        weight_decimal: {$convert: { input: "$weight", to: "decimal", onError: Error }}
    }},
    { $group: { _id: "$sex", avgHeight: {$avg: "$height_decimal"}, avgWeight: {$avg: "$weight_decimal"}} }
]).forEach(e => printjsononeline(e))

// with map reduce
let resultMapReduce = db.people.mapReduce(
    function() { emit(this.sex, { "height": parseFloat(this.height), "weight": parseFloat(this.weight), "count": 1} ) },
    function(key, values) { 
        return { 
            "height": Array.sum(values.map(e => e["height"])), 
            "weight": Array.sum(values.map(e => e["weight"])), 
            "count": Array.sum(values.map(e => e["count"])) 
        } 
    },
    {
        finalize: function(key, value) {
            return { "avgHeight": (value.height / value.count), "avgWeight": (value.weight / value.count) }
        },
        out: { inline: 1 }
    }
)

print(" -------- result map reduce --------")
printjson(resultMapReduce)

