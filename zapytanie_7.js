// Usuń z bazy osoby o wzroście przekraczającym 190; 

printjsononeline(db.people.remove({ $where: function() {
    return parseFloat(this.height) > 190
}}))
