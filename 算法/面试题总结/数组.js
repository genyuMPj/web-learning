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
