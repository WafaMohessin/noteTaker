const util = require("util");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

class DB {
    read() {
        return readAsync('db/db.json', 'utf-8')
    }

    readNotes(){
        return this.read().then((data) => {
            let allNotes;

            try{
                allNotes = [].concat(JSON.parse(data))
            }catch(err){
                allNotes = []
            }
            return  allNotes;
        })
    }
}

module.exports = new DB();
