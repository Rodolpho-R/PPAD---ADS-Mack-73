const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const aluno = require("./models/Alunos");

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Rotas
app.get('/cadAluno', function(req, res){
    res.render("cadAluno");
});

app.post('/cadastro', function(req, res){
    aluno.create({
        name: req.body.nome,
        turma: req.body.turma,
        faltas: req.body.faltas,
        responsavel_nome: req.body.responsavel_nome,
        responsavel_email: req.body.responsavel_email
    })
});

//DB Connection! 



  //criar tabble com sequileze
  //User.sync({force: true});

  app.listen(8080);