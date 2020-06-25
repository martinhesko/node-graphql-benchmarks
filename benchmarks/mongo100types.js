const fs = require('fs');
const { genSchema } = require("../lib/genSchema.js");
const { exec } = require('child_process');
fs.writeFile("templates/ts-apollo-mongodb-backend/model/Note.graphql", genSchema(50), function(err) {
    if(err) {
        return console.log(err);
    }
});
exec('lib/mongoprep.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });


