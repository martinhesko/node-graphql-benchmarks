const faker = require("faker");

// that way data is consistent
faker.seed(4321);

function genData() {
  const notes = [];
  for (let i = 0; i < 20; i++) {
    const comments = [];

    for (let k = 0; k < 3; k++) {
      comments.push({
        id: faker.random.uuid(),
        name: faker.internet.domainName(),
        numPages: faker.random.number()
      });
    }

    notes.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      company: faker.company.bs(),
    });
  }

  return notes;
}

module.exports.data = genData();
