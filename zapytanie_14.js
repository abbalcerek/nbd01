// Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości; 

// with aggregate
print(" -------- result aggregate --------")
db.people.aggregate([
    { 
        $addFields: {
            weight_decimal: {$convert: { input: "$weight", to: "decimal", onError: Error }},
            height_decimal: {$convert: { input: "$height", to: "decimal", onError: Error }} 
        }
    },
    { 
        $addFields: {
            bmi: { $divide: [ "$weight_decimal" , { $pow: [ { $divide: ["$height_decimal", 100]}, 2 ] } ] },
        }
    },
    { $group: { _id: "$nationality",  minBmi: { $min: "$bmi" }, maxBmi: { $max: "$bmi" }} }
]).forEach(e => printjsononeline(e))

// with map reduce
let resultMapReduce = db.people.mapReduce(
    function() { 
        let weight_decimal = parseFloat(this.weight)
        let height_decimal_in_miters = parseFloat(this.height) * 0.01
        let bmi = (weight_decimal / (height_decimal_in_miters * height_decimal_in_miters))
        emit(this.nationality, {"bmiMin": bmi, "bmiMax": bmi}) 
    },
    function(key, values) { return values.reduce((a, b) => {
            return {
                "bmiMin": Math.min(a["bmiMin"], b["bmiMin"]), 
                "bmiMax": Math.max(a["bmiMax"], b["bmiMax"]),
            } 
        }) 
    },
    { out: { inline: 1 } }
)

print(" -------- result map reduce --------")
printjson(resultMapReduce)

