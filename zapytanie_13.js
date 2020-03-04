// Listę unikalnych zawodów;

// with aggregate
print(" -------- result aggregate --------")
db.people.aggregate([
    { $group: { _id: "$job" } }
]).forEach(e => printjsononeline(e))

// distinct
print("--------- distinct result")
db.people.distinct("job")

// with map reduce
let resultMapReduce = db.people.mapReduce(
    // in this casee we are only interested ini the key so we can skip the value
    function() { emit(this.job, "") },
    function(key, values) { return "" },
    { out: { inline: 1 } }
)

print(" -------- result map reduce --------")
printjson(resultMapReduce)

