const Hash_Table = require('./hashTable.js');

const HashMe = new Hash_Table();
const namesArray = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

for (let i = 0; i < namesArray.length; i++) {
   HashMe.insert(namesArray[i]);
}

HashMe.showTable()