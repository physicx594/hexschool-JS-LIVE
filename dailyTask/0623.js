// 題目：1
const sum = (a, b) => a + b
  console.log(sum(5, 6));
  
  // 題目：2
  const square = num => num * num;
  var d = square(5);
  console.log(d);
  
  // 題目：3
  setTimeout(() =>console.log('延遲 10 毫秒'), 10);
  
  // 題目：4
  var arr = [1, 2, 3];
  var arr2 = arr.map(item =>item * 2);
  console.log(arr2);
  
  // 題目：5
  var obj = {
    fn: (a) => a * a
  }
  console.log(obj.fn(10));