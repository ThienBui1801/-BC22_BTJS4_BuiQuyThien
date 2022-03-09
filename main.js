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
        `Number up to ${numberThree} ${numberTwo} ${numberOne}`
    }
  }

  if (numberOne > numberTwo && numberOne > numberThree) {
    if (numberThree > numberTwo) {
      document.getElementById('print-text').innerHTML =
        `Number up to ${numberTwo} ${numberThree} ${numberOne}`
    }
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    if (numberOne > numberThree) {
      document.getElementById('print-text').innerHTML =
        `Number up to ${numberThree} ${numberOne} ${numberTwo}`
    }
  }

  if (numberTwo > numberThree && numberTwo > numberOne) {
    if (numberThree > numberOne) {
      document.getElementById('print-text').innerHTML =
        `Number up to ${numberOne} ${numberThree} ${numberTwo}`
    }
  }

  if (numberThree > numberOne && numberThree > numberTwo) {
    if (numberOne > numberTwo) {
      document.getElementById('print-text').innerHTML =
        `Number up to ${numberTwo} ${numberOne} ${numberThree}`
    }
  }

  if (numberThree > numberTwo && numberThree > numberOne) {
    if (numberTwo > numberOne) {
      document.getElementById('print-text').innerHTML =
        `Number up to ${numberOne} ${numberTwo} ${numberThree}`
    }
  }

}

// 2.
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

  if (1 > month || month > 12) {
    document.getElementById('print-day').innerHTML =
      `
    <p>Invalid data</p>
    `
  } else if (day < 1 || day > 31) {
    document.getElementById('print-day').innerHTML =
      `
    <p>Invalid data</p>
    `
  } else {
    let dayBefore = day - 1;
    let dayAfter = day + 1;
    let monthBefore = month - 1;
    let monthAfter = month + 1;

    if (dayBefore < 1) {
      dayBefore = 31;
      document.getElementById('print-day').innerHTML =
        `
        <p>Yesterday - ${dayBefore}/${monthBefore}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${month}/${year}</p>
        `
    } else if (dayAfter > 31 && month < 12) {
      dayAfter = 1;
      document.getElementById('print-day').innerHTML =
        `
        <p>Yesterday - ${dayBefore}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter}/${year}</p>
        `
    } else if (dayAfter > 31 || month > 12) {
      dayAfter = 1;
      monthAfter = 1;
      let nextYear = year + 1;
      document.getElementById('print-day').innerHTML =
        `
        <p>Yesterday - ${dayBefore}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter}/${nextYear}</p>
        `
    } else if (month === 2 || day > 28) {
      dayAfter = 1;
      document.getElementById('print-day').innerHTML =
        `
        <p>Yesterday - ${dayBefore}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${monthAfter}/${year}</p>
        `
    } else {
      document.getElementById('print-day').innerHTML =
        `
        <p>Yesterday - ${dayBefore}/${month}/${year}</p>
        <p>Day - ${day}/${month}/${year}</p>
        <p>Tomorrow - ${dayAfter}/${month}/${year}</p>
        `
    }
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
      `Invalid date`
  }

  switch (month) {
    case 1:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 2:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 28 days`
      break;
    case 3:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 4:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 30 days`
      break;
    case 5:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 6:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 30 days`
      break;
    case 7:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 8:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 9:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 30 days`
      break;
    case 10:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;
    case 11:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 30 days`
      break;
    case 12:
      document.getElementById('print-month').innerHTML =
        `Month ${month} of ${yearOfMonth} have 31 days`
      break;

    default:
      break;
  }
}

// 4. In số lẻ vs chẵn
/**
 * 
 */

document.getElementById('btn-number').onclick = function () {
  const numbA = document.getElementById('numb1').value * 1;
  const numbB = document.getElementById('numb2').value * 1;
  const numbC = document.getElementById('numb3').value * 1;
  let countEven = 0;
  let countOdd = 0;

  if (numbA % 2 === 0) {
    countEven += 1;
    console.log(`Có ${countEven} số chẵn`)
  } else {
    countOdd += 1;
    console.log(`Có ${countOdd} số lẽ`);
  }

}

// 5. Tìm tam giác là tam giác gì
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
        `Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại`
    }
  } else if (lineA === lineC && lineC === lineA) {
    if (lineA > lineB && lineC > lineB) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại`
    }
  } else if (lineB === lineC && lineB === lineC) {
    if (lineB > lineA && lineC > lineA) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác cân có 2 cạnh bằng nhau và lớn hơn cạnh còn lại`
    }
  }

  if (lineA === lineB && lineB === lineA) {
    if (lineA < lineC && lineB < lineC) {
      document.getElementById('print-triangle').innerHTML =
        `Invalid Data`
    }
  } else if (lineA === lineC && lineC === lineA) {
    if (lineA < lineB && lineC < lineB) {
      document.getElementById('print-triangle').innerHTML =
        `Invalid Data`
    }
  } else if (lineB === lineC && lineB === lineC) {
    if (lineB < lineA && lineC < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `Invalid Data`
    }
  }

  // Đều
  if (lineA === lineB && lineB === lineC) {
    if (lineC === lineA) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác đều có 3 cạnh bằng nhau`
    }
  }

  // Vuông
  if (lineC > lineA && lineC > lineB) {
    if (lineB > lineA || lineB < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác vuông`
    }
  } else if (lineB > lineA && lineB > lineC) {
    if (lineC > lineA || lineC < lineA) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác vuông`
    }
  } else if (lineA > lineB && lineA > lineC) {
    if (lineB > lineC || lineB < lineC) {
      document.getElementById('print-triangle').innerHTML =
        `Đây là tam giác vuông`
    }
  }
}