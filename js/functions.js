const checkStringLength = (string, maxLength) => {
  const result = (string.length <= maxLength);
  return result;
};

// Строка короче 20 символов
console.log(checkStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkStringLength('проверяемая строка', 10)); // false

const checkIsPalindrome = (string) => {
  string = string.replaceAll(' ', '');
  let reversedString = '';
  for (let i = string.length - 1; i > -1; i--) {
    reversedString += string[i];
  }
  return (string.toLowerCase() === reversedString.toLowerCase());
};

// Строка является палиндромом
console.log(checkIsPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkIsPalindrome('ДовОд')); // true
// Это не палиндром
console.log(checkIsPalindrome('Кекс')); // false
// Это палиндром
console.log(checkIsPalindrome('Лёша на полке клопа нашёл ')); // true

const getNumber = (string) => {
  if (typeof string === 'number') {
    string = String(string);
  }
  string = string.replaceAll(' ', '');
  let numberString = '';
  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string[i], 10);
    if (!Number.isNaN(number)) {
      numberString += number;
    }
  }
  return parseInt(numberString, 10);
};

console.log(getNumber('2023 год'));            // 2023
console.log(getNumber('ECMAScript 2022'));     // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007'));           // 7
console.log(getNumber('а я томат'));           // NaN
console.log(getNumber(2023)); // 2023
console.log(getNumber(-1));   // 1
console.log(getNumber(1.5));  // 15

const checkOvertime = (timeStart, timeEnd, meetingStartTime, meetingDurationTime) => {

  const minutes = [timeStart, timeEnd, meetingStartTime].map((value) => value.split(':')[0] * 60 + Number(value.split(':')[1]));

  return !(minutes[2] + meetingDurationTime > minutes[1] || minutes[2] < minutes[0]);
};

  console.log(checkOvertime('08:00', '17:30', '14:00', 90)); // true
  console.log(checkOvertime('8:0', '10:0', '8:0', 120));     // true
  console.log(checkOvertime('08:00', '14:30', '14:00', 90)); // false
  console.log(checkOvertime('14:00', '17:30', '08:0', 90));  // false
  console.log(checkOvertime('8:00', '17:30', '08:00', 900)); // false
