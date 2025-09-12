var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.send('Hello World!');
});

// Page contact
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        nom: 'Levasseur',
        prenom: 'Nathan',
        adresse: '100 Rue duquet, sainte-thérèse, QC',
        courriel: '202339974@edu.clg.qc.ca',
        telephone: '(514) 212-7565'
    });
});

// Page recherche avec route dynamique
app.get('/module/:numero', (req, res) => {
    let numero = req.params.numero;

    if (numero <= 6 && numero >= 1) {
        res.send(`Vous êtes dans le module ${numero}`);
    } else {
        res.status(400).send('MODULE INCONNU');
    }
});

app.use(function (req, res) {
    res.writeHead(404);
    res.end('<h1>Erreur 404<h1> Page introuvable !');
});

app.listen(8080);
console.log("Le serveur est lancé sur le port 8080");
