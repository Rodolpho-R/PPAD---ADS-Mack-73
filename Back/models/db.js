const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('school_octagano', 'jackOne', '1234', {
    host: 'localhost',
    dialect: 'mysql'
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




