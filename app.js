var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/main');

// page d'accueil
app.get('/', function (req, res, next) {
    res.render('pages/acceuil', { title: 'Accueil' });
});

// Page contact
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        nom: 'Levasseur',
        prenom: 'Nathan',
        adresse: '100 Rue duquet, sainte-thérèse, QC',
        courriel: '202339974@edu.clg.qc.ca',
        telephone: '(514) 212-7565'
    });
});

// Page module
app.get('/module/:numero', (req, res) => {
    let numero = req.params.numero;

    if (numero <= 6 && numero >= 1) 
    {
        res.render(`pages/module`, 
        { 
            title: `Module ${numero}`,
            numero
        });
    } 
    else 
    {
        res.status(400).send('MODULE INCONNU');
    }
});

app.use(function (req, res) {
    res.writeHead(404);
    res.end('<h1>Erreur 404<h1> Page introuvable !');
});

app.listen(8080);
console.log("Le serveur est lancé sur le port 8080");
