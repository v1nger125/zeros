module.exports = zeros
function zeros(expression) {
  let arr = expression.split("*");
  let ten = 0, five = 0, two = 0;
  let buf;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(-2) == "!!"){
      for (let num = +arr[i].slice(0,-2); num > 1; num-=2) {
        buf = num;
        while (buf % 10 == 0){
          ten++;
          buf = buf / 10;
        }
        while (buf % 5 == 0){
          five++;
          buf = buf / 5;
        }
        while (buf % 2 == 0){
          two++;
          buf = buf / 2;
        }
      }
    }
    else{
      if(arr[i].slice(-1) == "!") {
        for (let num = +arr[i].slice(0,-1); num > 1; num--) {
          buf = num;
          while (buf % 10 == 0){
            ten++;
            buf = buf / 10;
          }
          while (buf % 5 == 0){
            five++;
            buf = buf / 5;
          }
          while (buf % 2 == 0){
            two++;
            buf = buf / 2;
          }
        }
      }
    }
  }
  return ten + Math.min(two, five);
}