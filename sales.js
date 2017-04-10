'use strict';

var i = 0;

//object example
var store1stPike = {
  storeMin: 23,
  storeMax: 65,
  storeAvg:6.3,
  customerCapacitys:[],
  customerHours:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin));
    }
  }
};

var storeSeatacAirport = {
  storeMin: 3,
  storeMax: 24,
  storeAvg:1.2,
  customerCapacitys:[],
  customerHours:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin));
    }
  }
};

var storeSeattleCenter = {
  storeMin: 11,
  storeMax: 38,
  storeAvg: 3.7,
  customerCapacitys:[],
  customerHours:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin));
    }
  }
};

var storeCapitalHill = {
  storeMin: 20,
  storeMax: 38,
  storeAvg:2.3,
  customerCapacitys:[],
  customerHours:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin));
    }
  }
};

var storeAlki = {
  storeMin: 2,
  storeMax: 16,
  storeAvg: 4.6,
  customerCapacitys:[],
  customerHours:[],
  customerGen : function (){
    for (i = 0; i < 15; i++) {
      this.customerCapacity.push(Math.floor(Math.random()*(this.storeMax-this.storeMin)+this.storeMin));
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
console.log(stores[0].customerGen());
