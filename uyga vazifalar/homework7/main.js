// let user = {
//     name: "John",
//     surname: "Smith",
//     name: "Pete"
// }
// // console.log(user);
// // console.log(user.name);
// delete user.name;
// console.log(user.surname);



// let jeck = {
//     john: 100,
//     smith: 160,
//     pete: 130,
// }

// // let res = jeck;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: "hello"
// };
// // console.log(typeof (salaries));

// for (key in salaries) {
//     let qiymat = salaries.Pete ;
//     console.log(qiymat);
// }


// switch case ==============================
// let a = 4;

// switch (a) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//         default:
//             console.log("7 kundan boshqa kunlar mavjud eams");
// }

// =============================2=======================================

// let k=5;

// switch(k){
//     case 1:
//         console.log("Juda yomon");
//         break
//     case 2:
//         console.log("Qoniqarsiz");
//         break
//     case 3:
//         console.log("Qoniqarli");
//         break
//     case 4:
//         console.log("Yaxshi");
//         break
//     case 5:
//         console.log("A'lo");
//         break
//         default:
//             console.log("Berilgan baxo xato");
// }


// ========================3========================

// let oy = 22;
// switch (oy) {
//     case 1:
//         console.log("Qish");
//         break;
//     case 2:
//         console.log("Qish");
//         break;
//     case 3:
//         console.log("Bahor");
//         break;
//     case 4:
//         console.log("Bahor");
//         break;
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//         console.log("Yoz");
//         break;
//     case 7:
//         console.log("Yoz");
//         break;
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//         console.log("Kuz");
//         break;
//     case 10:
//         console.log("Kuz");
//         break;
//     case 11:
//         console.log("Kuz");
//         break;
//     case 12:
//         console.log("Qish");
//         break;
//     default:
//     console.log("1-yilda 4 ta fasldan iborat va 12 ta oydan tashkil topgan");
// }



// ========================================4====================================


// let oy = 2;

// switch (oy) {
//     case 1:
//         console.log("31 kundan iborat");
//         break;
//     case 2:
//         console.log("28 kundan iborat");
//         break;
//     case 3:
//         console.log("31 kundan iborat");
//         break;
//     case 4:
//         console.log("30 kundan iborat");
//         break;
//     case 5:
//         console.log("31 kundan iborat");
//         break;
//     case 6:
//         console.log("30 kundan iborat");
//         break;
//     case 7:
//         console.log("31 kundan iborat");
//         break;
//     case 8:
//         console.log("31 kundan iborat");
//         break;
//     case 9:
//         console.log("30 kundan iborat");
//         break;
//     case 10:
//         console.log("31 kundan iborat");
//         break;
//     case 11:
//         console.log("30 kundan iborat");
//         break;
//     case 12:
//         console.log("31 kundan iborat");
//         break;

// }


// ========================5======================

// let a = 2;
// let b = 4;


// switch (4) {
//     case 1:
//         console.log(a + b);
//         break;
//     case 2:
//         console.log(b - a);
//         break;
//     case 3:
//         console.log(b / a);
//         break;
//     case 4:
//         console.log(b * a);
//         break;
// }
// ========================6======================

// let ds = 10;
// let km = 1000;
// let m = 100;
// let mm = 0.1;
// let sm = 1;

// metr = 0;
// switch (km) {
//     case ds:
//         console.log(metr = m / ds);
//         break;
//     case km:
//         console.log(metr = m / km);
//         break;
//     case mm:
//         console.log(metr = m / mm);
//         break;
//     case sm:
//         console.log(metr = m / sm);
//         break;
// }



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// let valeus = Object.values(menu);
// if (valeus[0] * 2 !== menu.title) {
//     valeus[0] = valeus[0] * 2;
// }
// if (valeus[1] * 2 !== menu.title) {
//     valeus[1] = valeus[1] * 2;
// }
// if (valeus[2] * 2 !== menu.title) {
//     valeus[2] = valeus[2] * 2;
// }
// menu.width = valeus[0];
// menu.height = valeus[1];
// menu.title = valeus[2];
// console.log(valeus);

// console.log(menu);




// let car = {
//     eshiklar: "oldi eshiklar",
//     balonlar: "orqa balon",
//     rang: "Qizil",
//     yil: 2023,
//     pozitsiya: 4

// }

// console.log(car);


let user = {
    name: "Davron",
    email: "davron@gamil.com",
    yil: "1996.03.01",
    yashash: "Tashkent shaxri",
    age: 27
}

delete user.yil
console.log(user);