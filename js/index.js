// lấy giá trị người dùng
// tạo ra biến và đưa về dạng object
// sử dụng hàm sort để sắp xếp giá trị
// xuất ra màn hình kết quả
document.getElementById("numberup__btn").onclick = function(){
   var numb1 = document.getElementById("number1").value;
    
   var numb2 = document.getElementById("number2").value;

   var numb3 = document.getElementById("number3").value;
   var numb = [numb1,numb2,numb3].sort()
  document.getElementById("showketqua").innerHTML = "kết quả là : " + numb
}
















//tạo ra form
//lây value từ form 
//xuất ra màn hình từ value thu được ở form

document.getElementById("accept__btn").onclick = function(){
  var familyUser = document.getElementById("familyuser").value
  document.getElementById("lblmess").innerHTML = "chào "+ familyUser
}


//lấy giá trị từ người dùng
//chuyển kiểu dữ liệu thành number
//kiểm tra số chẳng lẻ bằng phép tính number % 2 = 0 thì là số chẳng
//nếu number % 2 != 0 thì là số lẻ







document.getElementById("number__accept").onclick = function(){
  var so1 = document.getElementById("input__1").value
  var so2 = document.getElementById("input__2").value
  var so3 = document.getElementById("input__3").value
  
  document.getElementById("final1").innerHTML = number__check(so1)
  document.getElementById("final2").innerHTML = number__check(so2)
  document.getElementById("final3").innerHTML = number__check(so3)
}
function number__check (number){
  if (number % 2 === 0) {
    return number + " là số chẵn"
    
  }
  else{
    return number + " là số lẻ"
  }

}
/*
bước 1: lấy value từ người dùng
bước 2: sử dụng if else để tạo điều kiện
  (a == b) && (b == c) thì là tam giác đều
  (a == b) || (a == c) || (b == c) tam giác cân
  (a * a == b * b + c * c) ||(b * b == a * a + c * c) ||(c * c == a * a + b * b)
  tam giác vuông
  bước 3: xuất ra màn hình
*/




document.getElementById("ketqua__btn").onclick = function(){
  var a = document.getElementById("canh1").value
  var b = document.getElementById("canh2").value
  var c = document.getElementById("canh3").value

  if ((a == b) && (b == c)){
    document.getElementById("tamgiac").innerHTML = " Đây là tam giác đều"
  }
  else if ((a == b) || (a == c) || (b == c)) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác cân"
  }
  else if ((a * a == b * b + c * c) ||(b * b == a * a + c * c) ||(c * c == a * a + b * b)) {
    document.getElementById("tamgiac").innerHTML = "Đây là  tam giác vuông"
  }
  else{
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác thường"
  }
}
