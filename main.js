var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//alert('hello!');/*alert() 函数在浏览器窗口内弹出一个警告框，但是我们需要给函数提供一个字符串作为参数以告诉函数应该在警告框里写什么*/

/*function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
alert(multiply(4, 7));
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

图片转换一定要选大小差不多的图片，否则会出现不适应
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