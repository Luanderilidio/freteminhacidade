const { faker } = require('@faker-js/faker');


module.exports = function () {
  
  var estudants = [];

  
  for (var i = 0; i < 5; i++) {
    estudants.push({
      id: i,
      name: faker.datatype.number({min: 1000, max: 9999})
    })
  }

  return {
    "estudants": estudants
  }
}