class HashTable {
  constructor() {
    this.hashTable = new Array(137);
  }

  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + "=>" + total );
    return total % this.hashTable.length;
  }

  insert(key, value) {
    let hashedData = this.betterHash(key);
    this.hashTable[hashedData] = value;
  }

  showData() {
      for (const key in this.hashTable) {
          if (this.hashTable.hasOwnProperty(key)) {
              if (this.hashTable[key] !== undefined) {
                  console.log(`${key} => ${this.hashTable[key]}`);
              }   
          }
      }
  }

  betterHash(data) {
      let total = 0;
      let konstant = 31;
      for (let i = 0; i < data.length; i++) {
          total = konstant * total + data.charCodeAt(i);
      }
      total % this.hashTable.length;
      if (total < 0) {
          total += this.hashTable.length - 1;
      }
      console.log("Hash value: " + data + "=>" + total );
      return parseInt(total)
  }

  getHashedData(key) {
      return this.hashTable[this.betterHash(key)];
  }
}


const hTable = new HashTable();
hTable.insert('flora', 'flower');
hTable.insert('Ghenghis', 'ruler');
hTable.insert('Magnificient', 'adjective');

hTable.showData();
console.log('--------', hTable.getHashedData('Ghenghis'));