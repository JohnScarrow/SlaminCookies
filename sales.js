'use strict';

var i = 0;
var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeStoreTitle, airportStoreTitle, seattleCenterStoreTitle, capitalHillStoreTitle, alkiStoreTitle;

var store1stPike = {
  title: '1st and pike',
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
  title:'seatac airport',
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
  airportStoreTitle = document.createElement('li');
  var predictAirport = (hours[i] + ': ' + storeSeatacAirport.customerCapacity[i] + ' cookies');
  console.log(predictAirport);
  airportStoreTitle.textcontent = storeSeatacAirport.customerCapacity[i];}
console.log('Total:' + airportTotal + ' cookies');


var storeSeattleCenter = {
  title: 'seattle center',
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
  seattleCenterStoreTitle = document.createElement('li');
  var predictSeattleCenter = (hours[i] + ': ' + storeSeattleCenter.customerCapacity[i] + ' cookies');
  console.log(predictSeattleCenter);
  seattleCenterStoreTitle.textcontent = storeSeattleCenter.customerCapacity[i];}
console.log('Total:' + SeattleCenterTotal + ' cookies');


var storeCapitalHill = {
  title: 'capital hill',
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
  capitalHillStoreTitle = document.createElement('li');
  var predictCapitalHill = (hours[i] + ': ' + storeCapitalHill.customerCapacity[i] + ' cookies');
  console.log(predictCapitalHill);
  capitalHillStoreTitle.textcontent = storeCapitalHill.customerCapacity[i];}
console.log('Total:' + capitalHillTotal + ' cookies');


var storeAlki = {
  title: 'alki',
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
  alkiStoreTitle = document.createElement('li');
  var predictAlki = (hours[i] + ': ' + storeAlki.customerCapacity[i] + ' cookies');
  console.log(predictAlki);
  alkiStoreTitle.textcontent = storeAlki.customerCapacity[i];}
console.log('Total:' + AlkiTotal + ' cookies');


var stores = [
  store1stPike,
  storeSeatacAirport,
  storeSeattleCenter,
  storeCapitalHill,
  storeAlki
];

i = 0;
var j = 0;
var storesUl, storesLi;

var storesDiv = document.getElementById('stores');

storesDiv.textContent = 'test';


for (i = 0; i < stores.length; i++){
  storesUl = document.createElement('ul');
  storesUl.setAttribute('class', ('stores-Ul'+(i)));
  storesUl.textContent = stores[i].title;
  storesDiv.appendChild(storesUl);
  for(j = 0; j < hours; j++){
    storesLi = document.createElement('li');
    storesLi.textContent = (stores[i].customerCapacity[j]);
    storesLi.appendChild(storesUl+(i));

  }
}
