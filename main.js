'use strict';

// 1. Sắp xếp số tăng dần
/**
 * 1. Cho người dùng nhập dữ liệu số bất kỳ
 * 2. Xử lý
 *    - So sánh từng số với nhau theo thứ tự lớn đến bé
 * 3. Đầu ra
 *    - Xuất ra màn hình số theo thứ tự tăng dần
 */

document.getElementById('btn-count').onclick = function () {
  const numberOne = document.getElementById('num1').value * 1;
  const numberTwo = document.getElementById('num2').value * 1;
  const numberThree = document.getElementById('num3').value * 1;

  if (numberOne > numberTwo && numberOne > numberThree) {
    if (numberTwo > numberThree) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberThree} ${numberTwo} ${numberOne}</p>`
    }
  }

  if (numberOne > numberTwo && numberOne > numberThree) {
    if (numberThree > numberTwo) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberTwo} ${numberThree} ${numberOne}</p>`
    }
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    if (numberOne > numberThree) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberThree} ${numberOne} ${numberTwo}</p>`
    }
  }

  if (numberTwo > numberThree && numberTwo > numberOne) {
    if (numberThree > numberOne) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberOne} ${numberThree} ${numberTwo}</p>`
    }
  }

  if (numberThree > numberOne && numberThree > numberTwo) {
    if (numberOne > numberTwo) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberTwo} ${numberOne} ${numberThree}</p>`
    }
  }

  if (numberThree > numberTwo && numberThree > numberOne) {
    if (numberTwo > numberOne) {
      document.getElementById('print-text').innerHTML =
        `<p>Number up to ${numberOne} ${numberTwo} ${numberThree}</p>`
    }
  }

}

// 2. Chào hỏi
/**
 *  1. Tạo biến lưu giá trị là người đăng nhập
 *  2. Xử lý
 *    - Xử lý 4 trường hợp 'Father', 'Mother', 'Brother', 'Sister'
 *      + Nếu kết quả đúng thì hiện câu chào
 *      + Nếu kết quả sai ra sai dữ liệu nhập 
 *  3. Xuất kết quả ra hàm alert
 */

// onclick button
document.getElementById('btn-answer').onclick = function () {
  const answer = document.getElementById('answer').value;

  if (answer === 'Father') {
    alert('Hello, have a nice day')
  } else if (answer === 'Mother') {
    alert('Hello, how are you today?')
  } else if (answer === 'Brother') {
    alert('Hello, What\'s man?')
  } else if (answer === 'Sister') {
    alert('Hello, I love you!')
  } else {
    alert('Invalid User')
  }
}

// on prompt
// let sayHi = prompt(`Who are you?`);

// if (sayHi === 'Father') {
//   alert('Hello, have a nice day')
// } else if (sayHi === 'Mother') {
//   alert('Hello, how are you today?')
// } else if (sayHi === 'Brother') {
//   alert('Hello, What\'s man?')
// } else if (sayHi === 'Sister') {
//   alert('Hello, I love you!')
// } else {
//   alert('Invalid User')
// }

// 3. Tìm ngày tháng năm
/**
 *  1. Tạo 3 biến lưu ngày tháng và năm
 *  2. Xử lý
 *    - Đặt ra các trường hợp 
 *      + Giả sử các ngày trong tháng đều có 31 ngày 
 *      + 1 > tháng > 12 => Tháng không đúng
 *      + 1 > ngày > 31 => Ngày không đúng
 *    - Xử lý các trường hợp 
 *      + Nếu ngày trong tháng thì 'ngày -1 = ngày hôm qua & ngày +1 = ngày tiếp theo'
 *      + Nếu ngày cuối tháng thì 'gán 31 cho ngày hôm qua & +1 cho ngày tiếp theo'
 *      + Nếu ngày 31/12 thì '-1 cho ngày hôm qua và gán 1 cho ngày & tháng & +1 vào năm của ngày tiếp theo'
 *  3. Xuất kết quả ra màn hình 
 */

document.getElementById('click-day').onclick = function () {
  const day = document.getElementById('day').value * 1;
  const month = document.getElementById('month').value * 1;
  const year = document.getElementById('year').value * 1;

  let dayBefore = day;
  let dayAfter = day;
  let monthBefore = month;
  let monthAfter = month;

  if ((1 > month || month > 12) || (day < 1 || day > 31)) {
    document.getElementById('print-day').innerHTML =
      `<p>Invalid data</p>`
  } else if ((day !== 1 || month !== 1) && (day !== 28 || month !== 2) && (day !== 31 || month !== 12)) {
    document.getElementById('print-day').innerHTML =
      `
        <p>Yesterday - ${dayBefore - 1}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter + 1}/${month}/${year}</p>
        `
  }

  // day 31 of month
  if (day === 31 && month <= 11) {
    dayAfter = 1;
    document.getElementById('print-day').innerHTML =
      `
        <p>Yesterday - ${dayBefore - 1}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter + 1}/${year}</p>
        `
  }

  // If 01/01/xxxx
  if (day === 1 && month === 1) {
    let prevYear = year - 1;
    dayBefore = 31;
    monthBefore = 12;
    document.getElementById('print-day').innerHTML =
      `
        <p>Yesterday - ${dayBefore}/${monthBefore}/${prevYear}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter + 1}/${month}/${year}</p>
        `
  }

  // If 28/02/xxxx
  if (day === 28 || month === 2) {
    dayAfter = 1;
    document.getElementById('print-day').innerHTML =
      `
        <p>Yesterday - ${dayBefore - 1}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter + 1}/${year}</p>
        `
  }

  // Leap Year
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    if (day === 28 || month === 2) {
      dayAfter = 29;
      document.getElementById('print-day').innerHTML =
        `
          <p>Yesterday - ${dayBefore - 1}/${month}/${year}</p>
          <p>Day - ${day}/${month}/${year}</p>
          <p>Tomorrow - ${dayAfter}/${month}/${year}</p>
          `
    }
  }

  // If 31/12/xxxx
  if (day === 31 && month === 12) {
    let nextYear = year + 1;
    dayAfter = 1;
    monthAfter = 1;
    document.getElementById('print-day').innerHTML =
      `
        <p>Yesterday - ${dayBefore - 1}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter}/${nextYear}</p>
        `
  }

}

// 4. Month & Year
/**
 *  1. Tạo biến lưu dữ liệu tháng và năm
 *  2. Xử lý
 *    - Đặt trường hợp 1 < tháng > 12 cho ra kết quả không hợp lệ
 *    - Switch case qua 12 trường hợp là 12 tháng
 *  3. Xuất dữ liệu ra màn hình
 */

document.getElementById('btn-month').onclick = function () {
  const dayOfMonth = document.getElementById('month-show').value * 1;
  const yearOfMonth = document.getElementById('year-show').value * 1;

  let month = dayOfMonth;

  if (1 > dayOfMonth || dayOfMonth > 12) {
    document.getElementById('print-month').innerHTML =
      `<p>Invalid date</p>`
  }

  switch (month) {
    case 1:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 2:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 28 days</p>`
      break;
    case 3:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 4:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 30 days</p>`
      break;
    case 5:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 6:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 30 days</p>`
      break;
    case 7:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 8:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 9:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 30 days</p>`
      break;
    case 10:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;
    case 11:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 30 days</p>`
      break;
    case 12:
      document.getElementById('print-month').innerHTML =
        `<p>Month ${month} of ${yearOfMonth} have 31 days</p>`
      break;

    default:
      break;
  }
}

// 5. In số lẻ vs chẵn
/**
 *  1. 
 *    - Tạo 3 biến lưu dữ liệu
 *    - Tạo biến đếm even & odd
 *  2. 
 *    - So sánh các số chia phần dư cho 2 có = 0 hay không
 *    - Nếu = 0 là số chẵn, != 0 là số lẽ 
 *  3. In kết quả ra màn hình
 */

document.getElementById('btn-number').onclick = function () {
  const numbA = document.getElementById('numb1').value * 1;
  const numbB = document.getElementById('numb2').value * 1;
  const numbC = document.getElementById('numb3').value * 1;
  let countEven = 0;
  let countOdd = 0;

  if (numbA % 2 === 0) {
    countEven++;
  } else if (numbA % 2 !== 0) {
    countOdd++;
  }
  if (numbB % 2 === 0) {
    countEven++;
  } else if (numbB % 2 !== 0) {
    countOdd++;
  }
  if (numbC % 2 === 0) {
    countEven++;
  } else if (numbC % 2 !== 0) {
    countOdd++;
  }
  document.getElementById('print-number').innerHTML =
    `<p>Có ${countOdd} số lẽ và ${countEven} số chẵn</p>`
}

// 6. Tìm tam giác là tam giác gì
/**
 *  1. Tạo 3 biến lưu giá trị các cạnh của tam giác
 *  2. Xử lý
 *    - TG Cân: So sánh 2 cạnh = nhau & lớn hơn cạnh còn lại
 *    - TG Đều: So sánh 3 cạnh bằng nhau
 *    - TG Vuông: So sánh 3 số theo thứ tự tăng dần
 *  3. Xuất kết quả ra màn hình
 */

document.getElementById('btn-triangle').onclick = function () {
  const lineA = document.getElementById('line-a').value * 1;
  const lineB = document.getElementById('line-b').value * 1;
  const lineC = document.getElementById('line-c').value * 1;

  // Cân
  if (lineA === lineB && lineB === lineA) {
    if (lineA > lineC && lineB > lineC) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại</p>`
    }
  } else if (lineA === lineC && lineC === lineA) {
    if (lineA > lineB && lineC > lineB) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại</p>`
    }
  } else if (lineB === lineC && lineB === lineC) {
    if (lineB > lineA && lineC > lineA) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại</p>`
    }
  }

  if (lineA === lineB && lineB === lineA) {
    if (lineA < lineC && lineB < lineC) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Invalid Data</p>`
    }
  } else if (lineA === lineC && lineC === lineA) {
    if (lineA < lineB && lineC < lineB) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Invalid Data</p>`
    }
  } else if (lineB === lineC && lineB === lineC) {
    if (lineB < lineA && lineC < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Invalid Data</p>`
    }
  }

  // Đều
  if (lineA === lineB && lineB === lineC) {
    if (lineC === lineA) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác đều có 3 cạnh bằng nhau</p>`
    }
  }

  // Vuông
  if (lineC > lineA && lineC > lineB) {
    if (lineB > lineA || lineB < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác vuông</p>`
    }
  } else if (lineB > lineA && lineB > lineC) {
    if (lineC > lineA || lineC < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác vuông</p>`
    }
  } else if (lineA > lineB && lineA > lineC) {
    if (lineB > lineC || lineB < lineC) {
      document.getElementById('print-triangle').innerHTML =
        `<p>Đây là tam giác vuông</p>`
    }
  }
}

// 7.
/**
 * 
 */

document.getElementById('btn-read').onclick = function () {
  const readNumber = document.getElementById('read-num').value * 1;

  const hundred = Math.floor(readNumber / 100);
  const ten = Math.floor((readNumber % 100) / 10);
  const one = Math.floor(readNumber % 10);

  let renderHundred;
  let renderTen;
  let renderOne;

  if (hundred >= 100 || hundred <= 999) {
    switch (hundred) {
      case 1:
        renderHundred = 'Một Trăm';
        break;
      case 2:
        renderHundred = 'Hai Trăm';
        break;
      case 3:
        renderHundred = 'Ba Trăm';
        break;
      case 4:
        renderHundred = 'Bốn Trăm';
        break;
      case 5:
        renderHundred = 'Năm Trăm';
        break;
      case 6:
        renderHundred = 'Sáu Trăm';
        break;
      case 7:
        renderHundred = 'Bảy Trăm';
        break;
      case 8:
        renderHundred = 'Tám Trăm';
        break;
      case 9:
        renderHundred = 'Chín Trăm';
        break;

      default:
        break;
    }
  }

  if (ten >= 10 || ten <= 99) {
    switch (ten) {
      case 0:
        renderTen = 'Linh';
        break;
      case 1:
        renderTen = 'Mười';
        break;
      case 2:
        renderTen = 'Hai Mươi';
        break;
      case 3:
        renderTen = 'Ba Mươi';
        break;
      case 4:
        renderTen = 'Bốn Mươi';
        break;
      case 5:
        renderTen = 'Năm Mươi';
        break;
      case 6:
        renderTen = 'Sáu Mươi';
        break;
      case 7:
        renderTen = 'Bảy Mươi';
        break;
      case 8:
        renderTen = 'Tám Mươi';
        break;
      case 9:
        renderTen = 'Chín Mươi';
        break;

      default:
        break;
    }
  }

  if (one <= 9) {
    switch (one) {
      case 0:
        renderOne = '';
        break;
      case 1:
        renderOne = 'Một';
        break;
      case 2:
        renderOne = 'Hai';
        break;
      case 3:
        renderOne = 'Ba';
        break;
      case 4:
        renderOne = 'Bốn';
        break;
      case 5:
        renderOne = 'Năm';
        break;
      case 6:
        renderOne = 'Sáu';
        break;
      case 7:
        renderOne = 'Bảy';
        break;
      case 8:
        renderOne = 'Tám';
        break;
      case 9:
        renderOne = 'Chín';
        break;

      default:
        break;
    }
  }

  if (readNumber >= 100 && readNumber <= 999) {
    document.getElementById('print-read').innerHTML =
      `<p>${renderHundred} ${renderTen} ${renderOne}</p>`
    if (readNumber % 100 === 0) {
      document.getElementById('print-read').innerHTML =
        `<p>${renderHundred}</p>`
    }
  }

  if (readNumber >= 10 && readNumber <= 99) {
    document.getElementById('print-read').innerHTML =
      `<p>${renderHundred = ''} ${renderTen} ${renderOne}</p>`
  }

  if (readNumber <= 9) {
    document.getElementById('print-read').innerHTML =
      `<p> ${renderOne} </p>`
  }
}