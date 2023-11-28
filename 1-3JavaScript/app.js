// 1.	JavaScript: 字串反轉
// console.log(reverseString("Hello")); // 預期輸出: "olleH”

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
    if (result.length === str.length) return result;
  }
}

console.log(reverseString("Hello"));

// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。
// console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
// 範例：

function filterNumbersGreaterThanFive(numbers) {
  let new_Array = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > 5) {
      new_Array.push(numbers[i]);
    }
  }
  return new_Array;
}

const numbers = [2, 8, 4, 10, 1, 7];

console.log(filterNumbersGreaterThanFive([2, 8, 4, 10, 1, 7]));

// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  let formattedName = "";

  if (!firstName.trim()) return "firstName Error";
  if (!lastName.trim()) return "lastName Error";

  formattedName = firstName.trim() + " " + lastName.trim();
  return formattedName;
}

console.log(formatName("    Tsai   ", "    Ian"));

// 此function為重組英文字母，因此重構的時候多判斷是否為輸入空字串，並且排除多輸入空白的部分。
// 重組此英文名字
