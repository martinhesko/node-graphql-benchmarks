const fs = require('fs');
const { genSchema } = require("../lib/genSchema.js");
const { spawn } = require('child_process');
fs.writeFile("templates/ts-apollo-postgres-backend/model/Note.graphql", genSchema(5), function(err) {
    if(err) {
        return console.log(err);
    }
});
spawn('lib/postgresprep.sh')



