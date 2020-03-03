let date1 = Date.parse("2020/02/02");
let date2 = Date.parse("2020/03/02");

format = date => `${date.year}-${date.month}-${date.day}`;

let arr = [date1, date2];
console.log(format(arr[0]));

arr.sort((a, b) => {
  return b - a;
});
console.log(format(arr[0]));
