let str="racecar";
let ispalindrome=true;
let midpoint=(str.length-1)/2;
for(let i=0;i<=midpoint;i++){
  if(str[i]!==str[str.length-1-i]){
    ispalindrome=false;
    break;
  }
}
console.log("Is "+str+ " is a palindrome "+ispalindrome);