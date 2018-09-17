/********Example 1**********/
// let handler = {
//     get: function(target, name){
//         return name in target ? target[name] : "key does not exist"
//     }
// }

// let o = {
//     reason: 'reason',
//     code: 'code'
// }

// let p = new Proxy(o,handler)

// console.log(p.o.reason)
// console.log(p.o.code)
// console.log(p.o.beer)

/********Example 2**********/
// let validator = {
//     set: function(obj, prop, value){
//         if(prop === 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError('the age is not an integer')
//             }
//             if(value > 200){
//                 throw new RangeError('the age seems invalid')
//             }
//         }

//         obj[prop] = value
//         return true
//     }
// }

// let person = new Proxy({}, validator)

// person.age = 100
// console.log(person.age)
// person.age = 'young'
// person.age = 300

/********Example 3**********/
var target = {};
var handler = {
  get(target, key) {
    console.info(`Get on property "${key}"`);
    return target[key];
  },
  set(target, key, value) {
    invariant(key, "set");
    return true;
  }
};
function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
var { p, revoke } = Proxy.revocable(target, handler);
// var  p  = new Proxy (target, handler);
p.a = "b";
console.log(target.a);
console.log(p.a);
console.log(p.c === undefined);
p.a;
p.b;
p._prop
p._prop = 'c'
revoke()
console.log(p.a)

