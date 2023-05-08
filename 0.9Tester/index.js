function insertionSort(array) { //
    for (let i = 1; i < array.length; i++) { //
      let current = array[i]; //
      let j = i - 1;// 
      while (j >= 0 && array[j] > current) { //
        array[j + 1] = array[j]; // 
        j--; // 
      }
      array[j + 1] = current;  
    }
    return array;
  }
  
  let array = [5, 2, 4, 6, 14, 3];
  console.log(insertionSort(array)); 