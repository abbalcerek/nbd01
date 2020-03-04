// Jedna kobieta narodowości chińskiej; 

let result = db.people.findOne({sex: "Female", "nationality" : "China"})
printjsononeline(result)
