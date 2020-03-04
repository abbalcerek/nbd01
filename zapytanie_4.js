// Lista wszystkich osób znajdujących się w bazie o wadze z przedziału <68, 71.5);

// as weight is being imported as string it has to be first casted to float. I didnt found how it can be 
// done with standard operators
db.people.find({ $where: function() {
    return (parseFloat(this.weight) >= 68 && parseFloat(this.weight) < 71.5)
}}).forEach(e => printjsononeline(e))
