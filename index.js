console.log("connected")

// //strings are teh first primitive data type 
// let string ="string"; //strings can be stated with either single quotes
// const alsoString ="double quotes are okay";//double quotes or with back ticks(')
// const templateString = 'Template LIteral String';

// //COmbine strings
// let sentence = "Hello" + "Vicky";
// console.log(sentence);
// let sentence2 = "and also Angel";
// console.log(combine);

// const combine ='${sentence}${sentence2}';
// console.log(combine);

// //Template Literal Vs Pre-2015
// const longSentence= '${student1} and ${student2} are amazing and will be taking ${courseName} next year woth ${teacherName}';
// const longersentence =
// student1 +
// "and" +
// student2 +
// " are amazing and will be taking" +
// courseName +
// " next year with " +
// teacherName;

// //Primitive Data Types:Integers
// let year = 2020;
// let nextYear = year + 1;
// console.log(nextYear);

// //Operators
// let past = year / 2; //Division
// let lastYear = year - 1; //subtraction
// let farFuture= year * 100;
// console.log(past, lastYear, farFuture);

// //Primitive Value Null and Undefined
// let undefinedVariable;
// console.log(undefinedVaraible);//will return a value off undefined
// console.log(nonexistent);// will cause a reference error of undefined AKA null

// //Booleans
// let trueStatement = true;
// let falseStatment = false;

// //Boolean Logic If/Else Statements 
// let student = "Karen";
// let age = 17
// console.log(student === "Karen"); // true
// console.log(student === "Karen"); //false
// console.log(student == "Karen"); // false
// console.log(age == "17"); // true does not take type into account
// console.log(age === "17") //false des take type into account

// //Less than or equal to and OR
// let age = 16;
// age < 17; //true
// age <= 17; //true 
// age <=15; //false
// age <= 16; //true 

// //And &&, or ll, NOt !==
// //OR
// age == 16 || age == 17; //true age is eual to 16 OR equal 17
// //AND
// age ==16 && age ==17; //false age is not equal to 16 AND equal to 17 
// //NOT
// age !== 17; //true, age is NOT equal to 17
// console.log(age !==17);//true 

// //If Statements 
// let age = 17;
// if (age <18){
//     console.log("You are a child");
// } esle if (age >=18){
//     console.log("You are an adult now");
// }
// //Results in you are a child

// //Else and Else if 
// let school = "elementary";
// if (school == "elementary"){
//     console.log("You are in elementary school");
// }esle if (school == "middle"){
//     console.log("You are in middle school");
// }esle{
//     console.log("You are in high school ");
// }

let stoplight = "green";
if (stoplight == "green"){
    console.log("go");
}else if (stoplight == "Yellow"){
    console.log("caution");
}else if (stoplight == "Red"){
    console.log("stop");
}

let KristyIntolerant = true;
let BaoBaoIntolerant = false;
if(KristyIntolerant === true && BaoBaoIntolerant === true){
    console.log("They should get milk and almond milk");
}else if ( KristyIntolerant === true && BaoBaoIntolerant === false){
    console.log("They should only get almond milk");
}else if ( KristyIntolerant === false && BaoBaoIntolerant == true){
    console.log("They should get only milk")
}

let temperature = 70
if(temperature < 68){
    console.log("too cold");
}else if (temperature >= 68 && temperature <= 72){
    console.log("perfect");
}else if (temperature >=73 && temperature <= 76){
    console.log("warm");
}else if (temperature >=76){
    console.log("too hot")
}

students = [ "Riya","Omor","Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
result = students.filter( word => word.length >5 );
console.log(result);

students = [ "Riya","Omor", "Alan", " Jaiyu", " Michael", " Lisa", "Richard"];
console.log(students.includes("junshen"));

students = [ "Riya","Omor", "Alan", " Jaiyu", " Michael", " Lisa", "Richard"];
console.log(students.includes("Alan" || "Savva"));

