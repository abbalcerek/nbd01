// 9.	 Zastąp nazwę miasta „Moscow” przez „Moskwa” u wszystkich osób w bazie; 

db.people.find({"location.city": "Moscow"}, {"location.city": 1})
let result = db.people.updateMany({"location.city": "Moscow"}, {$set: {"location.city": "Moskwa"}})
db.people.find({"location.city": "Moskwa"}, {"location.city": 1})

printjsononeline(result)
