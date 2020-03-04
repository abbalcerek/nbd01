//	Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty. 

// with aggregate
print(" -------- result aggregate --------")
db.people.aggregate([
    { $match: { nationality: "Poland", sex: "Female"} },
    { $unwind : "$credit" },
    { $addFields: {balance_decimal: {$convert: { input: "$credit.balance", to: "decimal", onError: Error }}} },
    { $group: { 
        _id: "$credit.currency" , 
        totalBalancePerCurrency: {$sum: "$balance_decimal"}, 
        avarageBalance: {$avg: "$balance_decimal"}
    } }
]).forEach(e => printjsononeline(e))

// with map reduce
let resultMapReduce = db.people.mapReduce(
    function() { 
        if (this.nationality === "Poland" && this.sex == "Female") {
            this.credit.forEach(e => emit(e.currency, {"sum": parseFloat(e.balance), "count": 1} ) ) 
        }
    },
    function(key, values) {
        return { "sum": Array.sum(values.map(c => c["sum"])), "count": values.length }
    },
    { 
        out: { inline: 1 },
        finalize: function(key, value) {
            return {"total" : (value.sum), "average": (value.sum / value.count) }
        },
    }
)

print(" -------- result map reduce --------")
printjsononeline(resultMapReduce)
