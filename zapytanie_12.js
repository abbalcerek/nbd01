// Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty

// with aggregate
print(" -------- result aggregate --------")
db.people.aggregate([
    { $unwind : "$credit" },
    { $addFields: {balance_decimal: {$convert: { input: "$credit.balance", to: "decimal", onError: Error }}} },
    { $group: { _id: "$credit.currency" , totalBalancePerCurrency: {$sum: "$balance_decimal"}} }
]).forEach(e => printjsononeline(e))

// with map reduce
let resultMapReduce = db.people.mapReduce(
    function() { this.credit.forEach(e => emit(e.currency, parseFloat(e.balance)) ) },
    function(key, values) { return Array.sum(values) },
    { out: { inline: 1 } }
)

print(" -------- result map reduce --------")
printjson(resultMapReduce)

