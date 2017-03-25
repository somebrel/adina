export function removeFromArray(arr, element) {
  let elIndex = arr.indexOf(element);

  let arr1 = arr.slice(0, elIndex);
  let arr2 = arr.slice(elIndex + 1, arr.length);

  return arr1.concat(arr2);
}

export function arraysIdentic(arr1, arr2) {
  if (arr1 == null || arr2 == null) return false;
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;

  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

export function pickRandomFromArray(arr = [], n = 0) {
  if (n === 0) return [];
  if (arr.length === 0) {
    console.error("Error: Empty array.");
    return [];
  }
  if (arr.length < n) {
    console.error("Error: More elements requested then available.");
    return [];
  }
  if (arr.length === n) {
    console.warn("Warning: Same amout of elements requested as available.");
    console.warn("-> Sorting elements randomly.");
  }

  const randomList = [];
  let originalList = arr;

  for (let i = 0; i < n; i++) {
    // gets a random element from originalList
    let randomEl = originalList[
      Math.floor(Math.random() * originalList.length)
    ];
    // removes picked element from originalList
    originalList = removeFromArray(originalList, randomEl);
    // puts picked element in randomList
    randomList.push(randomEl);
  }

  return randomList;
}
