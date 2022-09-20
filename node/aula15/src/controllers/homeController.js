// const HomeModel = require('../models/HomeModel');

// Add no DB
// HomeModel.create({
//     titulo: 'Um título de testes',
//     descricao: 'Uma descrição de teste.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// Buscar no DB
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};