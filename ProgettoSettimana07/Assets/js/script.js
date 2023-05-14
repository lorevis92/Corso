// Passagg da fare
/*
1) Homepage
    - Creare bottone che ti porta al form da cui puoi inserire i dati di un nuovo prodotto
    - Visualizzare tutti i prodotti disponibili
    -Mettere un bottone che porta alla pagina di dettaglio del prodotto
    
2) - Fare il POST del prodotto creato all'interno dell'API e cancellare i dati inseriti nel form per dare la possibilità di crearne un altro

3) - Nella pagina del prodotto visualizzare le info e mettere un tasto modifica.. Una volta cliccato c'è una nuova pagina Form dove in placeholder ci sono i valori vecchi. 
    -Fare il put del prodotto modificato e mettere anche un altro bottone per eliminare il prodotto dall'api

4) Fare l'autenticazione per il POST PUSH e DELETE
*/


 //Recupero gli articoli presenti nell'api e li metto in un array con tutti gli articoli da visualizzare
let articoli = [];
fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNWI4NGQwMTc5MzAwMTQyNjIwNjciLCJpYXQiOjE2ODM5NzA5NDgsImV4cCI6MTY4NTE4MDU0OH0.t-TWhcjqYYv8R27q49Yit34oR-D-Yk-U1rGBQICOIjg"
            }
            })
            .then(response => response.json())
            .then(elencoProdotti => {
                console.log(elencoProdotti)
                elencoProdotti.forEach(element => 
                articoli.push(element));  
            console.log(articoli);
        })  
            //Non riesco a caricare i prodotti dalla API!! In console non ci sono errori, ma solo il JSON vuoto seguito dall'array creato, ovviamente anche esso vuoto! Ho riguardato le registrazioni delle lezioni e mi sono confrontato con varie pagine internet ma non trovo l'errore.        
        
            
            

