const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('octagonoschool', 'jackOne', '12345678', {
    host: 'octagonoschool.clacmim6a0xe.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
});

sequelize.authenticate().then(function(){
    console.log('Conexão feita com sucesso');
}).catch(function(err){
    console.log('Error');
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}




