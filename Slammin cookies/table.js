'use strict'
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
