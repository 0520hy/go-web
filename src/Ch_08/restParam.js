// function sample(items){
//   console.log(items);
// }
// sample(1,2)
// sample(1,2,3)
// sample(1,2,3,4)

function sample(...items){
  console.log(items);
}
const array = [1,2,3,4]
console.log("#전개 연산자를 사용하지 않은 경우")
console.log(array)
console.log("#전개 연산자를 사용한 경우")
sample(...array)