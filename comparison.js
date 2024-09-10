// 1. Creat variables to store your favorite numbers
let firstFavNumb = 6;
let secondFavNumb =3;

//2. Perform comparisons
// Greater than
let isGreaterThan = firstFavNumb > secondFavNumb;
console.log('${firstFavNumb} > ${secondFavNumb} :', isGreaterThan);

// Less than
let isLessThan = firstFavNumb < secondFavNumb;
console.log('${firstFavNumb} < ${secondFavNumb} :', isLessThan);

//Greater than or equal to
let isGreaterThanOrEqualTo = firstFavNumb >= secondFavNumb;
console.log('${firstFavNumb} >= ${secondFavNumb} :', isGreaterThanOrEqualTo);

//Less than or equal to
let isLessThanOrEqualTo = firstFavNumb <= secondFavNumb;
console.log('${firstFavNumb} <= ${secondFavNumb} :', isLessThanOrEqualTo);

// Strict equality (===)
let isStrictlyEqual = firstFavNumb === secondFavNumb;
console.log('${firstFavNumb} === ${secondFavNumb} :', isStrictlyEqual);

//Loose inequality (!=)
let isLooselyNotEqual = firstFavNumb != secondFavNumb;
console.log('${firstFavNumb} != ${secondFavNumb} :', isLooselyNotEqual);

//AND (&&)
let andOperation = (firstFavNumb > 0) && (secondFavNumb > 0);
console.log('${firstFavNumb} > 0 && ${secondFavNumb} > 0 :', andOperation);

// OR (||)
let orOperation = (firstFavNumb > 0) || (secondFavNumb > 10);
console.log('!(${firstFavNumb} > 0 || ${secondFavNumb}) :', orOperation);

// NOT (!)
let notOperation = !(firstFavNumb > secondFavNumb);
console.log('!(${firstFavNumb} > ${secondFavNumb}) :', notOperation);
