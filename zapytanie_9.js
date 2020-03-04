// Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”; 

db.people.find({first_name: "Antonio"}, {first_name: 1, hobby: 1})
let result = db.people.updateMany({first_name: "Antonio"}, {$set: {hobby: "pingpong"}})

printjsononeline(result)
