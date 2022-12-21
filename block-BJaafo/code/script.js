  function fullName(firstName , lastName){
return firstName + ' ' + lastName;
}
fullName('rahul' ,'kapoor');


 let result = fullName('rahul','kapoor');

 let expected = 'rahul sharma'
 if(result !== expected){
    throw new Error(`${result}not equal to ${expected}`)
 };
  result = fullName('rahul','kapoor');

  expected = 'rahul kapoor'
 if(result !== expected){
    throw new Error(`${result}not equal to ${expected}`)
 };


 function totalAmount(amount,taxRate){
    return `amount + (amount * taxRate) `
 };
  result = totalAmount(100,3);
  expected = 300;
  if(result !== expected){
    throw new Error(` ${result} not equal to ${expected}`)
  };