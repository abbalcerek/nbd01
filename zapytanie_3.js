// Lista mężczyzn narodowości niemieckiej;

db.people
  .find({sex: "Male", "nationality" : "Germany"})
  .forEach(e => printjsononeline(e))
