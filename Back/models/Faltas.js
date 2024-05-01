const db = require('./db'); 

const Faltas = db.sequelize.define('faltas', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: db.Sequelize.STRING,
      allowNull: false
      
    },
    turma: {
      type: db.Sequelize.STRING,
      allowNull: false
    },

    faltas: {
        type: db.Sequelize.INTEGER,
        allowNull: true
      }
});

//****Criar DB, caso não criado:  *****/
// Faltas.sync().then(() => {
//     console.log('Tabela criada com sucesso!');
// }).catch((error) => {
//     console.error('Erro ao criar tabela:', error);
// });

module.exports = Faltas;