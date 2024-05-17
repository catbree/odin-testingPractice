export function analyzeArray(arr) {
   const sumV = arr.reduce((a, b) => (a + b), 0);
   const lengthV = arr.length;
   const averageV = sumV / lengthV;
   const minV = Math.min(...arr);
   const maxV = Math.max(...arr);

   return {average: averageV, min: minV, max: maxV, length: lengthV}


}