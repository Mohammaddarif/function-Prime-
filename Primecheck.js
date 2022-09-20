function prime(number){
  let factors=0
for(let i=1;i<number;i++){
if(number%i==0){
    
factor++
}
}
if(factor==2){
  
return true
}
return false
}
let ans=prime(16)
if(ans==true){
 console.log("Prime Number")
}else{
 console.log("Not a Prime")
;
}