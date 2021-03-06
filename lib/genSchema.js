const fs = require('fs');

function genSchema(length){
    const data = fs.readFileSync('lib/Note.graphql', 'utf8');
    var result = "";
    for(let i = 0; i < length; i++){
        result += data.replace(/Note/g, `Note${i}`).replace(/Comment/g, `Comment${i}`) + '\n';
    }
    return result;
}

module.exports.genSchema = genSchema;
