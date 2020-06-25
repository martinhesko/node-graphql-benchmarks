const faker = require("faker");
const { createApolloFetch } = require('apollo-fetch');
// that way data is consistent
faker.seed(4321);

async function genData() {

   const fetch = await createApolloFetch({
      uri: 'http://localhost:4000/graphql',
  });
  for(let i = 0; i < 50; i++){
      for (let j = 0; j < 10; j++) {
        var noteId = "123";
        await fetch({
            query: `mutation {createNote${i}(input:{
          title: "${faker.name.findName()}",
          description: "${faker.company.bs()}",
          }){
            id
          }
        }`
        }).then((res) => {
          console.log(res);
          for(var noteKey in res.data){
            noteId = res.data[noteKey].id;
              break;
          }
});
        for (let k = 0; k < 2; k++) {
          await fetch({
            query: `mutation {createComment${i}(input:{
              text: "${faker.name.findName()}",
              description: "${faker.company.bs()}",
              noteId: "${noteId}"
              }){
                id
              }
            }`
          }).then((res) => {
          console.log(res)});

        }
      }
  }
}

module.exports.genData = genData;
