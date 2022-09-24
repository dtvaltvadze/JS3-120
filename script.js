// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

// let array = [5, 25, 89, 120, 36];

// array.push('javascript', 'python');
// console.log(array);

// array.unshift('html', 'css');
// console.log(array);
// console.log(array.length);
// array.shift();
// array.pop();
// console.log(array);
// array.splice(57, 84, 120);
// console.log(array);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let array = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
// console.log(array.length);
// array.push('ვაშლი', 'ანანასი')
// console.log(array);
// array.unshift('საზამთრო');
// console.log(array);


// 3. მოცემულია მასივი: let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map( x => x % 3);

// console.log(newArray);

// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let newArray = array.filter(function(x) {
//     if (typeof x == 'number') {
//         return x;
//     }
// });
// console.log(newArray);

// 5.მოცემულია მასივი:

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// let newLanguages = languages.filter(function(x) {
//     return x.length > 3;
// })

// let newLanguages = languages.filter(x => x.length > 3);

// console.log(newLanguages);

// 6. მოცემულია მასივი:

// let item = [12, 'google', 32, null, 'yahoo', 25];

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: 
// თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
// თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
// სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// let newArray = item.map((x) => {
//     if (typeof x == 'number') {
//         return Math.pow(x,2);
//     } else if (typeof x == 'string') {
//         return x.toUpperCase();
//     }
//     return x;
// });
// console.log(newArray);

// 7. Მოცემულია მასივი:

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

//  let newWords = words.filter(x => {
//     if (x.includes('m') || x.includes('M') ) {
//         return true;
//     };

//  });
// console.log(newWords);

// 8. მოცემულია სამი მასივი:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// // Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

// let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);

// 9.მოცემულია მასივი:

// let arr = [1, 2, 3, 4, 5];
// // Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
// let sum = 0;
// arr.forEach(function (x) {
//     sum += x;
// }); 
// console.log(sum);

// 10.მოცემულია მასივი:
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// // Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები

// let newNumbers = numbers.filter( x => {
//     if ( x > 0) {
//         return true;
//     }
//     return false;
// });
// console.log(newNumbers);

// 11.შეამოწმეთ მოცემულ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით

// let arr = [-1, -2, -3, 4];

// let newArr = arr.some( x => {
//     if (x > 0) {
//         return true;
//     }
//     return false;
// });
// console.log(newArr);

