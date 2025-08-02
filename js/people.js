const fullName = require('./names');
const hobbies = require('./hobbies');

const createPerson = () => {
  const { firstName, lastName } = fullName('Il', 'Gabibbo');
  const hobbiesList = hobbies('gattini', 'veline', 'cagnolini');

  return {
    fullName: `${firstName} ${lastName}`,
    hobbies: hobbiesList
  };
};

module.exports = createPerson;
console.log(createPerson());