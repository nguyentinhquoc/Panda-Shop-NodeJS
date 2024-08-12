'use strict';
const {
  faker
} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('colors', [{
    //     id: 1,
    //     name_color: 'BLACK',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 2,
    //     name_color: 'WHITE',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 3,
    //     name_color: 'GREY',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }]),
    //   queryInterface.bulkInsert('sizes', [{
    //     id: 1,
    //     name_size: '39',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 2,
    //     name_size: '40',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 3,
    //     name_size: '41',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }]),
    //   queryInterface.bulkInsert('categories', [{
    //     id: 1,
    //     name_category: 'Nike',
    //     status_category: 1,
    //     image_category: faker.image.url(),
    //     description_category: faker.internet.userName(),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 2,
    //     name_category: 'Jordan',
    //     status_category: 1,
    //     image_category: faker.image.url(),
    //     description_category: faker.internet.userName(),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, {
    //     id: 3,
    //     name_category: 'MLB',
    //     status_category: 1,
    //     image_category: faker.image.url(),
    //     description_category: faker.internet.userName(),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }, ]), 
    var fakeProduct = [];
    for (let index = 0; index < 10; index++) {
      let product = {
        name_product: faker.internet.userName(),
        price_product: faker.number.int(1),
        price_sale: faker.number.int(1),
        rating_product: faker.number.float(1),
        image_product: '1720509007493.jpg',
        description_product: faker.internet.userName(),
        view_product: faker.number.int(1),
        id_category: faker.datatype.number({
          min: 1,
          max: 3
        }),
        status_product: 1,
        code_product: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      fakeProduct.push(product);
    }
    return queryInterface.bulkInsert('products',
      fakeProduct
    )
  },

  async down(queryInterface, Sequelize) {}


};