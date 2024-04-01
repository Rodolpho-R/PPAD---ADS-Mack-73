const db = require('./db'); 

const Alunos = db.sequelize.define('alunos1s', {
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
      },
    
      responsavel_nome: {
        type: db.Sequelize.STRING,
        allowNull: false
      },

      responsavel_email: {
        type: db.Sequelize.STRING,
        allowNull: false
      }
});

//Alunos.sync({force:true});

module.exports = Alunos;