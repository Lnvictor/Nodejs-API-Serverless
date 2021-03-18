let getModel = () => {
    const Sequelize = require('sequelize');
    const database = 'postgres'
    const user = 'usr';
    const password = 'pwd';
    const host = 'localhost';
    const port = 5432;

    const sequelize = new Sequelize(database, user, password, {
            host,
            port,
            dialect: 'postgres',
            logging: false
    });

    let Product = sequelize.define(
        'product', {
            name: Sequelize.STRING,
            desc: Sequelize.STRING,
            value: Sequelize.FLOAT
        }
        );
        
        Product.sync();
        return Product;
};

module.exports = {getModel};