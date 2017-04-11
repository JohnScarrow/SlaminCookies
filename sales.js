'use strict';

var i = 0;
var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeContent, pikeStoreTitle;

//object example
var store1stPike = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerCapacity:[],
  customerHours:hours,
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg))
    }
  },
  total: store1stPike.customerCapacity.reduceRight(function(a,b){return a+b;})

},

  clientStoreInfo : function (){
    for (i = 0; i < 15; i++){
      storeContent[i] = document.createElement('div');
      storeContent[i].textcontent = customerCapacity[i];
    }
  }
};
store1stPike.customerGen();

pikeStoreTitle = document.createElement('h2');
document.createElement('ul');
pikeStoreTitle.textcontent = '1st and Pike';


for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predict1stPike = (hours[i] + ': ' + store1stPike.customerCapacity[i] + ' cookies');
  console.log(predict1stPike);
  pikeStoreTitle.textcontent = store1stPike.customerCapacity[i];}
console.log('Total:' + Math.(store1stPike.customerCapacity) + ' cookies');

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
