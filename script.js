// function number() {
//     alert(5);
// }

// number();


// function x() {
//     let n = prompt("Enter Your Nanme: ");
//     alert(`Hello ${n}`)
// }

// x();


// function myName(x) {
//     alert(`Hello ${x}`);
// }

// myName(`omar`);


// function x() {
//     return 5+2;
// }
// alert(x());

// function add(a, b) {
//     return a + b;
// }

// let total = add(Number(prompt("Enter a number: "))
// , Number(prompt("Enter a number: ")));

// alert(total)


// function isEven(x) {
//     if (x % 2 == 0) {
//         alert('Even');
//     } else {
//         alert('Odd');
//     }
// }
// isEven(Number(prompt("Enter a number: ")));


// function big(a, b, c) {
//     if (a >= b && a >= c) {
//         alert(`The Biggest Number is ${a}`);
//     } else if (b >= a && b >= c) {
//         alert(`The Biggest Number is ${b}`);
//     } else {
//         alert(`The Biggest Number is ${c}`);
//     }
// }

// big(Number(prompt("Enter first number: "))
// , Number(prompt("Enter second number: "))
// , Number(prompt("Enter third number: ")));

// 1 31
// 2 28
// 3 31
// 4 30
// 5 31
// 6 30
// 7 31
// 8 31
// 9 30
// 10 31 
// 11 30
// 12 31

// let month31 = [1, 3, 5, 7, 8, 10, 12];
// let month30 = [4, 6, 9, 11];

// function monthDays(x){
//     if (month31.includes(x)) {
//         alert("31 days");
//     } else if (month30.includes(x)) {
//         alert("30 days");
//     } else if (x == 2) {
//         alert("28 days")
//     }
// };

// monthDays(Number(prompt("Enter a month number: ")));


// object.

// let names = {
//     ali: 'red',
//     omar: 'green',
//     ahmad: 'blue'
// }
// alert(names.)

// function that takes ur mark and gives u ur grade 
// > 90 A
// 90 80 B
// 80 70 C
// 70 60 D
// < 60 F

function GetGrade() {
    let mark = Number(prompt("Enter your mark: "));

    if (mark >= 90) {
        alert("Grade: A");
    } else if (mark >= 80) {
        alert("Grade: B");
    } else if (mark >= 70) {
        alert("Grade: C");
    } else if (mark >= 60) {
        alert("Grade: D");
    } else {
        alert("Grade: F");
    }
}

GetGrade();
