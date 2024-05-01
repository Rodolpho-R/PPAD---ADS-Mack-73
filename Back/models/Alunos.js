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

//****Criar DB, caso não criado:  *****/
Alunos.sync().then(() => {
console.log('Tabela Alunos criada com sucesso!');
}).catch((error) => {
   console.error('Erro ao criar tabela:', error);
});



module.exports = Alunos;