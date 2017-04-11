'use strict';

var i = 0;
var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



//object example
var store1stPike = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerCapacity:[],
  customerHours:hours,
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
store1stPike.customerGen();
for (i = 0; i < 15; i++) {
  var predict1stPike = (hours[i] + ': ' + store1stPike.customerCapacity[i] + ' cookies');
  console.log(predict1stPike);}
console.log('Total:' + Math.sum([ store1stPike.customerCapacity]) + ' cookies');

var storeSeatacAirport = {
  storeMin: 3,
  storeMax: 24,
  storeAvg:1.2,
  customerCapacity:[],
  customerHours:hours,
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};

var storeSeattleCenter = {
  storeMin: 11,
  storeMax: 38,
  storeAvg: 3.7,
  customerCapacity:[],
  customerHours:hours,
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};

var storeCapitalHill = {
  storeMin: 20,
  storeMax: 38,
  storeAvg:2.3,
  customerCapacity:[],
  customerHours:hours,
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};

var storeAlki = {
  storeMin: 2,
  storeMax: 16,
  storeAvg: 4.6,
  customerCapacity:[],
  customerHours:hours,
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};

var stores = [
  store1stPike,
  storeSeatacAirport,
  storeSeattleCenter,
  storeCapitalHill,
  storeAlki
];





//Use as method on constructor


// createElement
//set Atrubutes
//set content
//
stores.prototype.getTable = function() {
  var table = document.createElement('table');
  var titleRow = document.createElement('tr');
  titleRow.textcontent = this.title;
  table.aooendChild(tableRow);

var itemRow, itemName, itemPrice
  for (var i=0 i <this.items.length; i++){
    itemRow = document.createElement('tr');
    itemName = document.createElement('td');
    itemName.textcontent = this.items[i].name;
    itemPrice = document.createElement('td');
    itemPrice.textcontent = this.items[i].price;
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    table.appendChild(itemRow);
  }

};
