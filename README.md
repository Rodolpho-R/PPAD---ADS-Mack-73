# Projeto de Prática Profissional em ADS
Grupo - ADS Mack
1 - Instalação do banco de dados MYSQL server e workbeanch 8 ou superior;
2 - Configurando o MYSQL com Prompt de comando: 

    > mysql -h 'servidor' -u 'usuário' - p
    > mysql -h localhost - u root -p
    
    --- Criar User: --

    > CREATE USER 'novoUser'@'localhost' IDENTIFIED WITH mysql_native_password BY '[passwoard]'

    --- Liberar Permissão para acessar base de ados: ---

    > GRANT ALL PRIVILEGES ON *.* TO 'novoUser'@'localhost';

    >exite (para sair do terminal mysql)
    
3 - Abrir um novo terminal e instalar node.js e outras dependencias necessárias em conjunto com as libs (npm   install --save mysql) e (npm install --save sequelize) e o Sequileze para Sql (npm install --save mysql2)

4 - Criar o banco de dados: 
    4.1 - No arquivo Alunos e Faltas na pasta back, descomente o código "CRIAR DB, CASO NÃO CRIADO"
    4.2 - No terminal execute o comando node/nodemon app.js
