/********Example 1**********/
// class Student {
//   constructor(first, last, scores) {
//     this.firstName = first;
//     this.lastName = last;
//     this.testScores = scores;
//   }
//   get average() {
//     let average =
//       this.testScores.reduce((a, b) => a + b, 0) / this.testScores.length;
//     return average;
//   }
// }

// let john = new Student("John", "Dwan", [60, 80, 80]);

// // let johnProxy = new Proxy(john, {
// //   get: function(target, key, context) {
// //     console.log(`john[${key}] was accessed.`);
// //     // return undefined;
// //   }
// // });

// // johnProxy.getGrade

// let johnMethodProxy = new Proxy( john, {
//     get: function( target, key, context ) {
//         if ( key === 'average' ) {
//             return target.average;
//         }
//     }
// });
// johnMethodProxy.firstName
// johnMethodProxy.average

/********Example 2**********/
// let factorial = n => (n <= 1 ? n : n * factorial(n - 1));

// factorial = new Proxy(factorial, {
//   apply: function(target, thisValue, args) {
//     console.log("I am called with", args);
//     return target(...args);
//   }
// });

// factorial(5);

/********Example 3**********/
let payload = {
  website: "zsoltnagy.eu",
  article: "Proxies in Practice",
  viewCount: 15496
};

let { proxy, revoke } = Proxy.revocable(payload, {
  get: function(...args) {
    console.log("Proxy");
    return Reflect.get(...args);
  }
});

proxy.website;

revoke();

proxy.website;
