const fs = require("fs");

const arr = [];
fs.readFileSync("./ contact.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function(line) {
    arr.push(line);
  });

function Dictionary() {
  this.dataStore = {};
}

Dictionary.prototype.addFromFile = function() {
  let key, value;
  arr.forEach(element => {
    element = element.split(/\s[^A-Za-z0-9]/g);
    key = element[0].toLowerCase();
    value = element[1];
    this.dataStore[key] = value;
  });
};

Dictionary.prototype.addNew = function(key, value) {
  key = key.toLowerCase();
  this.dataStore[key] = value;
};

Dictionary.prototype.getOne = function(key) {
  if (!this.dataStore[key]) {
    return false;
  }
  return this.dataStore[key];
};

console.time("getAll");
Dictionary.prototype.getAll = function() {
  const storeData = [];
  for (const key in this.dataStore) {
    storeData.push(key);
  }
  return storeData.sort().map(contact => {
    return `${contact} => ${this.dataStore[contact]}`;
  });
};
console.timeEnd("getAll");

Dictionary.prototype.remove = function(key) {
  if (!this.dataStore[key]) {
    return false;
  }
  delete this.dataStore[key];
  return true;
};

Dictionary.prototype.clear = function () {
    return this.dataStore = {}
}

const dict = new Dictionary();
dict.addFromFile();
dict.addNew("Aydan Roberts", "(379) 592-4293");
dict.addNew("Izayah Ortega", "(701) 690-7254");
dict.remove("ada tate");
console.log(dict.getAll());
console.log(dict.clear())
console.log(dict.getAll());
console.log("getOne", dict.getOne("paula acosta"));
