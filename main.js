var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//alert('hello!');/*alert() ����������������ڵ���һ������򣬵���������Ҫ�������ṩһ���ַ�����Ϊ�����Ը��ߺ���Ӧ���ھ������дʲô*/

/*function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
alert(multiply(4, 7));
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

ͼƬת��һ��Ҫѡ��С����ͼƬ���������ֲ���Ӧ
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Xmax.JPG') {
      myImage.setAttribute('src', 'images/angles.JPG');
    } else {
      myImage.setAttribute('src', 'images/Xmax.JPG');
    }
}*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}