'use strict';

var stores = [store1stPike,];


//object example
var store1stPike = {
  salesMin: '23',
  salesMax: '65',
  salesAvg:'6.3',
};


//Changing the title
var heading = document.getElementById('title');
heading.textContent = exampleObjectThing.title;
heading.setAttribute('class', 'cool box button');

var listListUl = document.getElementById('list');
//Create a li tag for each string in the object
//Fill that li with the string of the object
//Put he new li at the end of listListUl (using appendChild)

var thingLi;
for (var i = 0; i < exampleObjectThing ;i++){
  console.log('exampleObjectThing.item of i',exampleObjectThing.item[1]);
  thingLi= document.createElement('li');

  thingLi.textContent = exampleObjectThing.item[1];
  thingLi.appendChild(thingLi);

}
