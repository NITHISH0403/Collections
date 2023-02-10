let arr1 = [100,20,15,5,15];
let arr2 = [200,26,54,8,45];
let arr4 = [4565,4,24,45,88];

//print the array.
console.log(arr1);

console.log(arr1.valueOf());

//The length property sets or returns the number of elements in an array.
console.log(arr1.length);

//concat() method is joins two or more arrays in single array. 
console.log(arr1.concat(arr2));

//The constructor property returns the function that created the Array prototype.
console.log(arr1.constructor);

//The copyWithin() method copies array elements to another position in the array.
console.log(arr1.copyWithin(3,0));
console.log(arr1.copyWithin(1,0,1));

//The entries() method returns an Array Iterator object with key/value pairs.
let f1 = arr1.entries();
for(let x of f1){
    console.log(x);
}

//The keys() method returns an Array Iterator object with the keys of an array.
let f2 = arr1.keys();
for(let x of f2){
    console.log(x);
}


//every
console.log(arr2.every((arr2)=> {return arr2[0]==200}));

//The fill() method fills specified elements in an array with a value.
var arr3;
console.log(arr3 = arr2.fill(100));
console.log(arr3 = arr2.fill(50,2));

//The The lastIndexOf() method returns the last index (position) of a specified value.
console.log(arr3.lastIndexOf(100));
console.log(arr3.lastIndexOf(50));

//filter() method filter the array in store the new array.
console.log(arr3.filter(function(arr3){
    return arr3>50;
}))

//The find() method returns the value of the first element that passes a test.
console.log(arr4.find(function(arr4){
    return arr4<50;
}))
//findindex.
console.log(arr4.findIndex(function(arr4){
    return arr4<50;
}))

//The forEach() method calls a function for each element in an array.
arr5 = arr4.forEach((value, index) => {
    console.log(index + ":" + value);
});

//The Array.from() method returns an array from any object with a length property.
let a = "ABCD";
console.log(Array.from(a));

//The includes() method returns true if an array contains a specified value otherwise  false.
console.log(arr4.includes(4));
console.log(arr4.includes(4,3));
console.log(arr4.includes(100));

//The indexOf() method returns the first index (position) of a specified value.
console.log(arr4.indexOf(4));
console.log(arr4.indexOf(5,2));

//The isArray() method returns true if an object is an array, otherwise false.
console.log(Array.isArray(arr4));
console.log(Array.isArray(a));

//The join() method returns an array as a string.
console.log(arr4.join());
console.log(arr4.join("-"));

//The pop() method removes (pops) the last element of an array.
console.log(arr4.pop());
console.log(arr4);

//The push() method adds new items to the end of an array.
console.log(arr4.push(88));
console.log(arr4);

//The reduce() method executes a reducer function for array element.
console.log(arr4.reduce((a,b)=>{return a-b;}));

//The reduceRight() method executes a reducer function for each array element.
console.log(arr4.reduceRight((a,b)=>{return a-b;}));

//reverse
console.log(arr4.reverse());

//The shift() method removes the first item of an array.
console.log(arr4.shift());
console.log(arr4);

console.log(arr4.unshift(70,80));
console.log(arr4);

arr6 = arr4.slice(1,2);
console.log(arr6);

let b=[1,88,99,45,69];
console.log(b.sort());

arr7 =[1,2,32,4,5];
arr7.splice(2,0,40,50);
console.log(arr7);

console.log(arr7.toString());
