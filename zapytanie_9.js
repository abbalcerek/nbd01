// Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”; 

let result = db.people.updateMany({first_name: "Antonio"}, {$set: {hobby: "pingpong"}})

printjsononeline(result)
