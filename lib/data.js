const faker = require("faker");
const { createApolloFetch } = require("apollo-fetch");
faker.seed(4321); // that way data is consistent

async function genData() {
  const fetch = await createApolloFetch({
    uri: "http://localhost:4000/graphql",
  });
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 10; j++) {
      var noteId = "1";
      await fetch({
        query: `mutation {createNote${i}(input:{
          title: "${faker.name.findName()}",
          description: "${faker.company.bs()}",
          }){
            id
          }
        }`,
      })
        .then((res) => {
          //console.log(res.errors);
          if (res.errors !== undefined) throw res.errors;
          for (var noteKey in res.data) {
            noteId = res.data[noteKey].id;
            break;
          }
        })
        .catch((error) => {
          console.log(error);
          if (error[0].extensions.code === "INTERNAL_SERVER_ERROR") j--;
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
            }`,
        }).then((res) => {
          console.log(res.errors);
        });
      }
    }
  }
}

module.exports.genData = genData;
