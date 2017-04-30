'use strict';

var i = 0;
var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//var pikeStoreTitle, airportStoreTitle, seattleCenterStoreTitle, capitalHillStoreTitle, alkiStoreTitle;

function storeProp(title, min, max, avg){
  this.title = title,
  this.storeMin = min,
  this.storeMax = max,
  this.storeAvg = avg,
  this.customerHours = hours,
  this.customerCapacity = [],
  this.storeContent = [],
  this.customerGen = function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin*this.storeAvg));
    }
  },
  this.customerGen();
}

var store1stPike = new storeProp('1st and pike', 23, 65, 6.3);
var storeSeatacAirport = new storeProp('SeaTac Airport', 3, 24, 1.2);
var storeSeattleCenter = new storeProp('Seattle Center', 11, 38, 3.7);
var storeCapitalHill = new storeProp('Capital Hill', 20, 38, 2.3);
var storeAlki = new storeProp('Alki', 2, 16, 4.6);



var stores = [store1stPike, storeSeatacAirport, storeSeattleCenter, storeCapitalHill, storeAlki];

i = 0;
var j = 0;
var hoursUl, hoursLi, storesUl, storesLi, storesTd;

var storesDiv = document.getElementById('stores');

storesDiv.textContent = 'Slammin Cookies';


hoursUl = document.createElement('tr');
for (j = -1; j < hours.length; j++){
  hoursLi = document.createElement('td');
  hoursLi.setAttribute('class', ('hoursLi'+(j)));
  hoursLi.textContent = hours[j];
  storesDiv.appendChild(hoursUl);
  hoursUl.appendChild(hoursLi);}

for (i = 0; i < stores.length; i++){
  storesUl = document.createElement('tr');
  storesUl.setAttribute('id', ('stores-Ul'+(i)));
  storesUl.textContent = stores[i].title;
  storesDiv.appendChild(storesUl);
}

var storesUl0 = document.getElementById('stores-Ul0');
for (j = 0; j < hours.length; j++){
  storesTd = document.createElement('td');
  storesTd.setAttribute('class', ('stores-Td'+(j)));
  storesTd.textContent = (stores[0].customerCapacity[j]) + 'cookies';
  storesUl0.appendChild(storesTd);}

var storesUl1 = document.getElementById('stores-Ul1');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('td');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = (stores[1].customerCapacity[j]) + 'cookies';
  storesUl1.appendChild(storesLi);}

var storesUl2 = document.getElementById('stores-Ul2');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('td');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = (stores[2].customerCapacity[j]) + 'cookies';
  storesUl2.appendChild(storesLi);}

var storesUl3 = document.getElementById('stores-Ul3');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('td');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = (stores[3].customerCapacity[j]) + 'cookies';
  storesUl3.appendChild(storesLi);}

var storesUl4 = document.getElementById('stores-Ul4');
for (j = 0; j < hours.length; j++){
  storesLi = document.createElement('td');
  storesLi.setAttribute('class', ('stores-Li'+(j)));
  storesLi.textContent = (stores[4].customerCapacity[j]) + 'cookies';
  storesUl4.appendChild(storesLi);}

//for(j = 0; j < hours; j++){
  //storesLi = document.createElement('td');
  //storesLi.textContent = (stores[i].customerCapacity[j]);
  //storesUl0.appendChild(storesLi);
//}
