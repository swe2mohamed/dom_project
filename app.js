// Dom application

// GetElementById()
const title = document.getElementById('main-heading');
console.log('getElementById',title);

// GetElementByClassName()
const listItem1 = document.getElementsByClassName('list-group-item');
console.log('getElementsByClassName',listItem1);

// GetElementByTagName()
const listItem2 = document.getElementsByTagName('li');
console.log('getElementsByTagName',listItem2);

// QuerySelector()
const container = document.querySelector('div');
console.log('querySelector',container);

// QuerySelectorAll()
const container2 = document.querySelectorAll('div');
console.log('querySelectorAll', container2);