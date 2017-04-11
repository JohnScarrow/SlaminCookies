'use strict';

var i = 0;
var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeContent, pikeStoreTitle;

var store1stPike = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerHours:hours,
  customerCapacity:[],
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
store1stPike.customerGen();

var pikeTotal = store1stPike.customerCapacity.reduce(function(a,b){return a+b;});

for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predict1stPike = (hours[i] + ': ' + store1stPike.customerCapacity[i] + ' cookies');
  console.log(predict1stPike);
  pikeStoreTitle.textcontent = store1stPike.customerCapacity[i];}
console.log('Total:' + pikeTotal + ' cookies');


var storeSeatacAirport = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerHours:hours,
  customerCapacity:[],
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
storeSeatacAirport.customerGen();

var airportTotal = storeSeatacAirport.customerCapacity.reduce(function(a,b){return a+b;});

for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predictAirport = (hours[i] + ': ' + storeSeatacAirport.customerCapacity[i] + ' cookies');
  console.log(predictAirport);
  pikeStoreTitle.textcontent = storeSeatacAirport.customerCapacity[i];}
console.log('Total:' + airportTotal + ' cookies');


var storeSeattleCenter = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerHours:hours,
  customerCapacity:[],
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
storeSeattleCenter.customerGen();

var SeattleCenterTotal = storeSeattleCenter.customerCapacity.reduce(function(a,b){return a+b;});

for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predictSeattleCenter = (hours[i] + ': ' + storeSeattleCenter.customerCapacity[i] + ' cookies');
  console.log(predictSeattleCenter);
  pikeStoreTitle.textcontent = storeSeattleCenter.customerCapacity[i];}
console.log('Total:' + SeattleCenterTotal + ' cookies');


var storeCapitalHill = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerHours:hours,
  customerCapacity:[],
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
storeCapitalHill.customerGen();

var capitalHillTotal = storeCapitalHill.customerCapacity.reduce(function(a,b){return a+b;});

for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predictCapitalHill = (hours[i] + ': ' + storeCapitalHill.customerCapacity[i] + ' cookies');
  console.log(predictCapitalHill);
  pikeStoreTitle.textcontent = storeCapitalHill.customerCapacity[i];}
console.log('Total:' + capitalHillTotal + ' cookies');


var storeAlki = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerHours:hours,
  customerCapacity:[],
  storeContent:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
};
storeAlki.customerGen();

var AlkiTotal = storeAlki.customerCapacity.reduce(function(a,b){return a+b;});

for (i = 0; i < 15; i++) {
  pikeStoreTitle = document.createElement('li');
  var predictAlki = (hours[i] + ': ' + storeAlki.customerCapacity[i] + ' cookies');
  console.log(predictAlki);
  pikeStoreTitle.textcontent = storeAlki.customerCapacity[i];}
console.log('Total:' + AlkiTotal + ' cookies');
