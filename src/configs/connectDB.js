const {
    Sequelize
} = require('sequelize');
const sequelize = new Sequelize('pandashop_nodejs', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});
async function connect() {
    try {
        await sequelize.authenticate();
        console.log('===================DATABASE SUCCESS ================ ');
    } catch (error) {
        console.log('===================LỖI DATABASE ===================');
        console.error(error)
        console.log('===================LỖI DATABASE ===================');
    }
}
export default connect;