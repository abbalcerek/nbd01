# zadania do wykladu 2 - mongodb


## Docker setup 
### start mongodb
```bash
docker-compose up
```

### import data to mongo
```bash
docker exec w2_mongo_mongo_1 mongoimport \
  --db nbd --collection people --jsonArray \
  --authenticationDatabase admin -u root -p example \
  --file cwiczenia2.json
```

### connect to mongo shell
``` bash
docker exec -it w2_mongo_mongo_1 mongo \
  -u root -p example --authenticationDatabase admin localhost:27017/nbd
```

### reimport data and run queries
``` bash
docker exec -it w2_mongo_mongo_1 bash run.sh
```

## Tresc zadan

Bazy Dokumentowe - zadania

Zaimportuj plik cwiczenia2.json . II. W jednej konsoli odpal serwer bazy poleceniem mongod. W drugiej konsoli zaimportuj dane do MongoDB przy pomocy następującego polecenia: 
mongoimport --file ./ cwiczenia2.json --db nbd --collection people --jsonArray 
czasem MongoDB odrzuci niektóre dokumenty – nie przejmuj się tym, pozostałe zostaną zaimportowane prawidłowo  
Uruchom shell mongo przy pomocy polecenia 
mongo 
Wskaż bazę danych do użycia przy pomocy 
use nbd 
Część 1 - standardowy interfejs zapytań
1.	Zbuduj następujące zapytania: 
2.	Jedna osoba znajdująca się w bazie; 
3.	Jedna kobieta narodowości chińskiej; 
4.	Lista mężczyzn narodowości niemieckiej;
5.	Lista wszystkich osób znajdujących się w bazie o wadze z przedziału <68, 71.5);
6.	Lista imion i nazwisk wszystkich osób znajdujących się w bazie oraz miast, w których mieszkają, ale tylko dla osób urodzonych w XXI wieku; 
7.	Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne); 
8.	Usuń z bazy osoby o wzroście przekraczającym 190; 
9.	 Zastąp nazwę miasta „Moscow” przez „Moskwa” u wszystkich osób w bazie; 
10.	Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”; 
11.	Usuń u wszystkich osób o zawodzie „Editor” własność „email”. 
 Część 2 - agregacje i map-reduce
Przy pomocy operacji map-reduce i tam gdzie to możliwe frameworku do agregacji (czyli w przypadku niektórych zadań należy dostarczyć 2 rozwiązania by móc je zaliczyć) znajdź następujące informacje: 
1.	Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 
2.	Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty; 
3.	Listę unikalnych zawodów; 
4.	Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości; 
5.	Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty. 
  
Rozwiązania przesyłamy w następującej formie: dla każdego zadania 2 pliki - osobny plik tekstowy z treścią zapytania/zapytań i osobny plik z wynikami Pliki nazywamy wg schematu: zapytanie_X.js  wyniki_X.json – gdzie X zastępujemy numerem zadania. 
Punktacja: Za zadania 1 – 10 można otrzymać po 0.1 pkt. Za zadania 11 – 15 można otrzymać po 0.2 pkt (w przypadku gdy zadanie można rozwiązać i przez map-reduce i przez agregację a przesłane będzie tylko jedno rozwiązanie to maksymalnie będzie 0.1 punkta)– w sumie do zdobycia 2 punkty. Eksport do pliku – można uruchomić shell mongo w następujący sposób: mongo baza plikzzapytaniem >> plikzwynikami 
