// 9.	 Zastąp nazwę miasta „Moscow” przez „Moskwa” u wszystkich osób w bazie; 

let result = db.people.updateMany({"location.city": "Moscow"}, {$set: {"location.city": "Moskwa"}})

printjsononeline(result)
