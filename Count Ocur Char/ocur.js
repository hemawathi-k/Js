let str="hello world";
let count=0;
let character="l";
for(let i=0;i<str.length;i++){
   if(str[i]===character){
    count++;
   }
}
console.log("The number of times "+character+"occurence in given string is "+count);