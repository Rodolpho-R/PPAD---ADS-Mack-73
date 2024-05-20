// models/Turma.js
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Turma = db.sequelize.define('Turma', {
    nome: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
});

Turma.sync().then(() => {
    console.log('Tabela criada com sucesso!');
}).catch((error) => {
    console.error('Erro ao criar tabela:', error);
 });

module.exports = Turma;
