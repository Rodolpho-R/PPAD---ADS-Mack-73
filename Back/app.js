const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const aluno = require("./models/Alunos");
const falta = require("./models/Faltas");
const admin = require("./firebase/firebaseAdmin");
const path = require('path');
const Turma = require("./models/Turma");

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Page principal: 
app.use(express.static(path.join(__dirname,'../Front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front', 'index.html'));
});

//Rota de Cadastrar User:
app.get('/cadastroUser', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front', 'cadastro.html'));
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password
        });
        res.status(200).send({ success: true, message: "Usuário registrado com sucesso", userRecord });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
});

//----------------Rota para Login: ----------------------------------

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front', 'login.html'));
});

//------------------Rota para cadastrar turma-----------------

app.get('/cadTurma', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front', 'cadTurma.html'));
});

app.post('/cadastro-turma', (req, res) => {
    const { nome } = req.body;

    Turma.create({
        nome: nome
    }).then(() => {
        res.status(200).json({ success: true, message: "Turma cadastrada com sucesso" });
    }).catch(error => {
        res.status(400).json({ success: false, message: error.message });
    });
});

/*
app.get('/cadTurma', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front', 'cadTurma.html'));
});

app.post('/cadastro-turma', (req, res) => {
    const { nome } = req.body;

    Turma.create({
        nome: nome
    }).then(() => {
        res.status(200).send({ success: true, message: "Turma cadastrada com sucesso" });
    }).catch(error => {
        res.status(400).send({ success: false, message: error.message });
    });
});
*/

//-----------------Rota Cadastrar Aluno------------------------

app.get('/cadAluno', async (req, res) => {
    try {
        const turmas = await Turma.findAll();
        const turmasPlain = turmas.map(turma => turma.get({ plain: true }));
        res.render("cadAluno", { turmas: turmasPlain });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

app.post('/cadastro', function (req, res) {
    aluno.create({
        name: req.body.nome,
        turma: req.body.turma,
        faltas: req.body.faltas,
        responsavel_nome: req.body.responsavel_nome,
        responsavel_email: req.body.responsavel_email
    }).then(() => {
        const message = `Cadastro feito com sucesso`;
        res.status(200).json({ success: true, message: message });
    }).catch(error => {
        const errorMessage = `Houve erro ao cadastrar o aluno!`;
        res.status(400).json({ success: false, message: errorMessage });
    });
});

/**
 * app.get('/cadAluno', function(req, res){
    res.render("cadAluno");
});

app.post('/cadastro', function(req, res){
    aluno.create({
        name: req.body.nome,
        turma: req.body.turma,
        faltas: req.body.faltas,
        responsavel_nome: req.body.responsavel_nome,
        responsavel_email: req.body.responsavel_email
    }).then(() => {
        const message = `Cadastro feito com sucesso`;
        res.status(200).json({ success: true, message: message });
    }).catch(error => {
        const errorMessage = `Houve erro ao cadastrar o aluno!`;
        res.status(400).json({ success: false, message: errorMessage });
    });
});
 */


/*
>>>>>>>>>>>>> Código Legado<<<<<<<<
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
    }).then(() => {
        // Usuário criado com sucesso
        const message = `Cadastro feito com sucesso`;
        res.json({sucess: true, message: message});
      }).catch(error => {
        // Erro ao criar usuário
        const errorMessage = `Houve error ao cadastrar o aluno!`;
        res.json({sucess: false, message: errorMessage})
        
      });
});
*/


//----------------------Rota Cadastrar Faltas----------------------------------

app.get('/cadFaltas', async (req, res) => {
    try {
        const alunos = await aluno.findAll();
        const alunosPlain = alunos.map(aluno => aluno.get({ plain: true }));
        res.render("cadFaltas", { alunos: alunosPlain });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

app.post('/cadastro-faltas', async (req, res) => {
    const { alunoId, faltas } = req.body;

    try {
        // Verificar se o aluno existe
        const alunoExistente = await aluno.findByPk(alunoId);

        if (!alunoExistente) {
            return res.status(404).json({ success: false, message: "Aluno não encontrado" });
        }

        // Atualizar o número de faltas
        alunoExistente.faltas += parseInt(faltas, 10);
        await alunoExistente.save();

        res.status(200).json({ success: true, message: "Falta cadastrada com sucesso" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

/*
// app.get('/cadFaltas', function(req, res){
//     res.render("cadFaltas");
// });

// app.post('/cadastro-faltas', function(req, res){
//     falta.create({
//         name: req.body.nome,
//         turma: req.body.turma,
//         faltas: req.body.faltas,
//     })
// });
*/


//----------------------Rota para Listar Faltas-------------------------------
app.get('/listarFaltas', function(req, res){
    aluno.findAll({order: [['faltas', 'DESC']]}).then(function(alunos){
        res.render('listarFaltas', {relatorio: alunos});
    })    
});


app.listen(8080);