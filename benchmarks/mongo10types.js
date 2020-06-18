const fs = require('fs');
const { genSchema } = require("../lib/genSchema.js");

fs.writeFile("../templates/ts-apollo-mongodb-backend/model/Note.graphql", genSchema(5), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


