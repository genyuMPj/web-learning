const a = [[0],[2,3,4],1,[1,[2,3, [333, 123, 333, [111, 12 ]]]]];

Array.prototype.flat = function(depth) {
  let depthRes = 0;
   const flatChild = (arr, parentDepth) => {
    if (parentDepth >= depthRes) {
      depthRes = parentDepth;
    }
    // 判断深度是否 满足条件
    if (parentDepth >= depth) {
      return arr;
    }

    const flattedArr = [];
  
    for (let i = 0; i < arr.length; i += 1) {
      // 如果是数组
      if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
        
        const res = flatChild(arr[i], parentDepth + 1)
        flattedArr.push(...res)
      } else {
        flattedArr.push(arr[i]);
      }
    }
    return flattedArr;
  }

  const flattedArr = flatChild(this, 0);
  console.log('flattedArr---', depthRes, flattedArr)
  return flattedArr;
}

console.log(a.flat(5))


function fn(array) {
  if (array == null && array.length <= 0) {
    return 0;
  }
  let Maxsum = -Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // currentSum += array[i];
    // if (currentSum < array[i]) {
    //   currentSum = array[i];
    // }
    if (currentSum < 0) {
      currentSum = array[i];
    } else {
      currentSum += array[i];
    }

    if (array[i + 1] < 0) {
      if (currentSum > Maxsum) {
        Maxsum = currentSum;
      }
    }
  }
  return Maxsum;
}
fn([ 1, -3,  3,  4,  5, -3]);//>> 12
fn([-1, -2, -3, -4, -9, -8]);//>> -1