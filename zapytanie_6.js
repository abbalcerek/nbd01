// Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób 
// (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne); 

let result = db.people.insertOne({
    "sex" : "Male",
    "first_name" : "Adam",
    "last_name" : "Balcerek",
    "job" : "Java Developer",
    "email" : "anichols3@google.co.uk",
    "location" : {
            "city" : "Berlin",
            "address" : {
                    "streetname" : "La Follette",
                    "streetnumber" : "03661"
            }
    },
    "description" : "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    "height" : "192.68",
    "weight" : "68.37",
    "birth_date" : "2013-05-23T16:10:58Z",
    "nationality" : "Indonesia",
    "credit" : [
            {
                    "type" : "jcb",
                    "number" : "4017957170327",
                    "currency" : "RUB",
                    "balance" : "4463.86"
            }
    ]
})

printjsononeline(result)