// A simple hash function.

function HashTable() {
    this.table = new Array(137);
}

HashTable.prototype.simpleHash = function (data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    // console.log("Hash value: " + data + "=>" + total );
    return total % this.table.length;
}

HashTable.prototype.insert = function (data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
}

HashTable.prototype.showTable = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(`${i} => ${this.table[i]}`);
        } 
    }
}

HashTable.prototype.betterHash = function (data) {
    let total = 0;
    let konstant = 31;
    for (let i = 0; i < data.length; i++) {
        total += konstant * total + data.charCodeAt(i)
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    console.log("Hash value: " + data + "=>" + total );
    return parseInt(total);
}

module.exports = HashTable;
