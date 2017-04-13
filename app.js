'use strict';

var i = 0;
var j = 0;
//var hours = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var hoursUl, hoursLi, storesUl, storesLi, storesTd;

function StoreProp(title, min, max, avg){
  this.title = title;
  this.storeMin = min;
  this.storeMax = max;
  this.storeAvg = avg;
  this.storeOpen = 6;
  this.storeClose = 20;
  this.customerHours = [];
  this.customerCapacity = [];

  for (i = this.storeOpen; i < this.storeClose; i++) {
    this.customerCapacity.push(Math.floor(Math.random()*((this.storeMax-this.storeMin)+this.storeMin*this.storeAvg)));
  }
  for (i=this.storeOpen; i<this.storeClose; i++){
    this.customerHours.push((i%12)+1);
  }
}


var storesDiv = document.getElementById('stores');
var itemRow;

StoreProp.prototype.getTable = function(){
  var table = document.createElement('div');

  var titleRow = document.createElement('tr');
  var titleHeading = document.createElement('th');
  titleHeading.textContent = this.title;
  titleRow.appendChild(titleHeading);
  storesDiv.appendChild(titleRow);
  storesDiv.appendChild(table);

  var itemHours, itemCapacity;
  // create a new row for each item and add it to the table
  for (var i = 0; i < this.customerHours.length; i++){
    itemRow = document.createElement('td');
    itemHours = document.createElement('tr');
    itemHours.textContent = this.customerHours[i];
    itemCapacity = document.createElement('tr');
    itemCapacity.textContent = this.customerCapacity[i];
    itemRow.appendChild(itemHours);
    itemRow.appendChild(itemCapacity);
    table.appendChild(itemRow);
  }
  return table;
};

var store1stPike = new StoreProp('1st and pike', 23, 65, 6.3);
var storeSeatacAirport = new StoreProp('SeaTac Airport', 3, 24, 1.2);
var storeSeattleCenter = new StoreProp('Seattle Center', 11, 38, 3.7);
var storeCapitalHill = new StoreProp('Capital Hill', 20, 38, 2.3);
var storeAlki = new StoreProp('Alki', 2, 16, 4.6);

var stores = [store1stPike, storeSeatacAirport, storeSeattleCenter, storeCapitalHill, storeAlki];
for(j = 0; j < stores.length; j++){
  stores[j].getTable();
  i=0;
}

//submit Button

function handleProductCreateSubmit(event){
  // stop the browser from reloading
  event.preventDefault();

  // event.target is allways whatever element you added the EventListener to ('aka productCreateFrom')
  var form = event.target;

  // grab the values
  var storeName = form.storeName.value;
  var storeMinAmount = form.storeMinAmount.value;
  var storeMaxAmount = form.storeMaxAmount.value;
  var storeAvgAmount = form.storeAvgAmount.value;

  // then clear the values
  form.storeName.value = '';
  form.storeMinAmount.value = '';
  form.storeMaxAmount.value = '';
  form.storeAvgAmount.value = '';
  form.reset;

  var storeList = window[storeName];
  storeList = new StoreProp(storeName, storeMinAmount, storeMaxAmount, storeAvgAmount);

  //var div = document.getElementById(stores);
  //storesDiv.textContent = '';
  storesDiv.appendChild(storeList.getTable());
}

var productCreateFrom = document.getElementById('product-create');
productCreateFrom.addEventListener('submit', handleProductCreateSubmit);
