function Dictionary() {
    this.dataStore = {};
}

Dictionary.prototype.add = function (key, value) {
    key = key.toLowerCase()
    this.dataStore[key] = value;
}

Dictionary.prototype.findKey = function(key) {
    return this.dataStore[key];
}

Dictionary.prototype.remove = function (key) {
    if (!this.dataStore[key]) {
    return false;
    }
    delete this.dataStore[key]
    return true
}

Dictionary.prototype.showAll = function () {
   for(const key  in this.dataStore) {
    console.log(`${key} => ${this.dataStore[key]}`);
   }
}

Dictionary.prototype.has = function (key) {
    key = key.toLowerCase();
    if (this.dataStore[key]) {
        return true
    }
    return false;
}


Dictionary.prototype.getSize = function () {
    return Object.keys(this.dataStore).length
}


/* 
Alternatively,

console.time('Dic length');
Dictionary.prototype.getSize = function () {
    const keyStore = []
    for (const key in this.dataStore) {
        if (this.dataStore.hasOwnProperty(key)) {
            keyStore.push(key)
        }
    }
    return keyStore.length
}
console.timeEnd('Dic length'); */


const Toyin = new Dictionary();
Toyin.add('Milk', 'Poland');
Toyin.add('Rayden', 098098765578);
Toyin.add('Sheng Fiu', 'Hong Kong');
Toyin.add('Mohandas Ghandhi', 'India');
Toyin.add('Mayonnaise', 'Ireland');
Toyin.add('McDonald', 'Spaghetti');
Toyin.add('Fan', 'Rotate');
Toyin.add('Festac', 'Lagos');
Toyin.add('Lorem', 'Latin');
Toyin.add('Jump', 'Ocean');
Toyin.remove('Liu Kang')
console.log('fan =>', Toyin.findKey('fan'))
console.log(Toyin.has('FesTaC'));

Toyin.showAll()
console.log(Toyin.getSize())
