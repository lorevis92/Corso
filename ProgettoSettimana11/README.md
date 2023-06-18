Progetti corso Epic Code Week 11

Questo progetto è stato realizzato utilizzando la versione 14.2.11 di Angular.

Per il suo funzionamento è stato utilizzato un server locale e per poterlo visualizzare correttamente bisogna modificare il "package.json", aggiornando la sezione scripts nel seguente modo:

"scripts": { "ng": "ng", "start": "ng serve -o", "build": "ng build", "watch": "ng build --watch --configuration development", "test": "ng test", "backend": "json-server-auth --watch db.json --port 4201 --delay 1000", "fullstack": "concurrently "npm run backend" "npm run start"" },

In seguito per eseguire il progetto su browser si dovra scrivere nel terminale VSCode: npm run fullstack
