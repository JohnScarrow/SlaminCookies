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
function storeProp(title, min, max, avg){
  title = '1st and pike',
  this.storeMin = min,
  storeMax = max,
  storeAvg = avg,
  customerHours = hours,
  customerCapacity = [],
  storeContent = [],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  }
}


var stores = [store1stPike, storeSeatacAirport, storeSeattleCenter, storeCapitalHill, storeAlki];

i = 0;
var j = 0;
var storesUl, storesLi;

var storesDiv = document.getElementById('stores');

storesDiv.textContent = 'Slammin Cookies';


for (i = 0; i < stores.length; i++){
  storesUl = document.createElement('ul');
  storesUl.setAttribute('id', ('stores-Ul'+(i)));
  storesUl.textContent = stores[i].title;
  storesDiv.appendChild(storesUl);
}

var storesUl0 = document.getElementById('stores-Ul0');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('li');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = hours[j] + ': ' + (stores[0].customerCapacity[j]) + 'cookies';
  storesUl0.appendChild(storesLi);}

var storesUl1 = document.getElementById('stores-Ul1');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('li');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = hours[j] + ': ' + (stores[1].customerCapacity[j]) + 'cookies';
  storesUl1.appendChild(storesLi);}

var storesUl2 = document.getElementById('stores-Ul2');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('li');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = hours[j] + ': ' + (stores[2].customerCapacity[j]) + 'cookies';
  storesUl2.appendChild(storesLi);}

var storesUl3 = document.getElementById('stores-Ul3');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('li');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = hours[j] + ': ' + (stores[3].customerCapacity[j]) + 'cookies';
  storesUl3.appendChild(storesLi);}

var storesUl4 = document.getElementById('stores-Ul4');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('li');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = hours[j] + ': ' + (stores[4].customerCapacity[j]) + 'cookies';
  storesUl4.appendChild(storesLi);}

//for(j = 0; j < hours; j++){
  //storesLi = document.createElement('li');
  //storesLi.textContent = (stores[i].customerCapacity[j]);
  //storesUl0.appendChild(storesLi);
//}
