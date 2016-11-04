// Performance test cases for eval vs regex
var val = 'Date(102453689)';
 var i;

console.time('regex');

for (var i=0;i<10000; i++) {
    var date = new Date(+val.match(/\d+/g)[0]);
}
console.timeEnd('regex');
 
console.time('eval');
for(i=0;i<10000;i++){
	date = eval('new '+val);
}
console.timeEnd('eval');

//chrome 
	regex: 19.831ms
	eval: 458.662ms
	
	regex: 28.011ms
	eval: 534.229ms

//Mozilla
	regex: 24.35ms
	eval: 8721.74ms

	regex: 23.63ms
	eval: 8368.6ms

//IE
	regex: 29.051ms
	eval: 27.693ms

	regex: 37.482ms
	eval: 41.864ms


//Performance test cases for native to jQuery loop
var array = new Array ();
for (var i=0; i<10000; i++) {
    array[i] = 0;
}
 
console.time('native');
var l = array.length;
for (var i=0;i<l; i++) {
    array[i] = i;
}
console.timeEnd('native');
 
console.time('jquery');
$.each (array, function (i) {
    array[i] = i;
});
console.timeEnd('jquery');

//Chrome
	native: 1.043ms
	jquery: 1.733ms

	native: 0.672ms
	jquery: 2.585ms
//Mozilla
	native: 40.77ms
	jquery: 6.96ms

	native: 44.24ms
	jquery: 6.43ms
//IE
	native: 4.927ms
	jquery: 5.821ms

	native: 12.187ms
	jquery: 14.34ms

//Performance test cases for native for to Aray.prototype.forEach
var array = new Array ();
for (var i=0; i<10000; i++) {
    array[i] = 0;
}
 
console.time('native');
for (var i=0;i<array.length; i++){
    array[i] = i;
}
console.timeEnd('native');
 
console.time('Array.prototype');
Array.prototype.forEach.call(array, function (i) {
    array[i] = i;
});
console.timeEnd('Array.prototype');

//Chrome
			 native: 0.194ms
	Array.prototype: 0.312ms

			 native: 0.198ms
	Array.prototype: 0.313ms
//Mozilla
			 native: 19.37ms
	Array.prototype: 2.57ms

			 native: 18.72ms
	Array.prototype: 2.5ms
//IE
			 native: 3.081ms
	Array.prototype: 1.357ms

			 native: 3.007ms
	Array.prototype: 1.38ms

//Performance test cases for forEach to Aray.prototype.forEach
var array = new Array ();
for (var i=0; i<10000; i++) {
    array[i] = 0;
}
 
console.time('forEach');
array.forEach(function(val , i){
	array[i] = i;
});
console.timeEnd('forEach');
 
console.time('Array.prototype');
Array.prototype.forEach.call(array, function (i) {
    array[i] = i;
});
console.timeEnd('Array.prototype');

//chrome 
		forEach: 2.946ms
Array.prototype: 2.319ms

		forEach: 2.692ms
Array.prototype: 2.233ms

//mozilla
		forEach: 2.75ms
Array.prototype: 2.52ms

		forEach: 2.71ms
Array.prototype: 2.17ms

//IE
		forEach: 1.39ms
Array.prototype: 1.41ms

		forEach: 1.454ms
Array.prototype: 1.442ms

// $ vs querySelector for ID

var i;
console.time('jquery')
for(i=0;i<10000;i++)	$('#cboxNext')
console.timeEnd('jquery')

console.time('native')
for(i=0;i<10000;i++)	document.querySelector('#cboxNext');
console.timeEnd('native');

//chrome
	jquery: 9.415ms
	native: 1.763ms

	jquery: 8.118ms
	native: 1.719ms

//mozilla[ Sometimes same as IE result]
	jquery: 19.09ms
	native: 19.54ms

	jquery: 18.81ms
	native: 19.21ms
//IE
	jquery: 24.944ms
	native: 17.01ms

	jquery: 25.226ms
	native: 17.386ms

// querySelector vs getElementByID
var i;
console.time('querySelector');
for(i=0;i<10000;i++)	document.querySelector('#cboxNext')
console.timeEnd('querySelector')

console.time('getElementById')
for(i=0;i<10000;i++)	document.getElementById('#cboxNext');
console.timeEnd('getElementById');

//chrome
	querySelector: 1.699ms
	getElementById: 0.950ms

	querySelector: 1.709ms
	getElementById: 0.959ms

//mozilla
	querySelector: 20.08ms
	getElementById: 18.3ms

	querySelector: 19.89ms
	getElementById: 18.27ms

//IE
	querySelector: 16.908ms
	getElementById: 9.957ms

	querySelector: 17.2ms
	getElementById: 10.361ms

// $ vs querySelectorAll for class
var i;
console.time('jquery')
for(i=0;i<10000;i++)	$('.icon-group')
console.timeEnd('jquery')

console.time('native')
for(i=0;i<10000;i++)	document.querySelectorAll('.icon-group');
console.timeEnd('native');

//chrome
	jquery: 12.580ms
	native: 48.303ms

	jquery: 25.094ms
	native: 50.294ms

//mozilla
	jquery: 40.22ms
	native: 115.33ms

	jquery: 39.58ms
	native: 116.2ms
//IE
	jquery: 54.369ms
	native: 204.17ms

	jquery: 55.451ms
	native: 219.433ms

// $ vs getElementsByClassName

var i;
console.time('jquery')
for(i=0;i<10000;i++)	$('.icon-group')
console.timeEnd('jquery')

console.time('native')
for(i=0;i<10000;i++)	document.getElementsByClassName('.icon-group');
console.timeEnd('native');

//chrome
	jquery: 12.270ms
	native: 1.106ms

	jquery: 14.099ms
	native: 1.139ms

//Mozilla
	jquery: 41.19ms
	native: 18.59ms

	jquery: 40.4ms
	native: 19.18ms
//IE
	jquery: 54.081ms
	native: 11.616ms

	jquery: 55.722ms
	native: 13.237ms