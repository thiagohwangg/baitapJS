// Bài 1: Tính tiền lương nhân viên

var btn1 = document.getElementById("btn1")
btn1.onclick = function () {
    // INPUT luong1Ngay:number ,soNgayLam:number
    var luong = document.getElementById("luong1Ngay").value;
    var soNgay = document.getElementById("soNgayLam").value;

    // PROGRESS tongLuong:luong * soNgay: number
    var tongLuong;
    tongLuong = luong * soNgay;

    // OUTPUT tongLuong: number
    document.getElementById("result1").innerHTML = tongLuong;
}



// Bài 2: Tính giá trị trung bình

var button2 = document.getElementById("btn2");
var result2 = document.getElementById("resutl2");
button2.onclick = function () {
    // INPUT number1 ,number2 ,number3 ,number4 ,number5 :number
    var number1 = +document.getElementById("num1").value * 1;
    var number2 = +document.getElementById("num2").value * 1;
    var number3 = +document.getElementById("num3").value * 1;
    var number4 = +document.getElementById("num4").value * 1;
    var number5 = +document.getElementById("num5").value * 1;

    // PROGRESS average = (number1 + number2 + number3 + number4 + number5) / 5

    var average = (number1 + number2 + number3 + number4 + number5) / 5;

    // OUTPUT average:number
    result2.innerHTML = average;


};


// Bài 3: Quy đổi tiền

var btn3 = document.getElementById("btn3");
var resutl3 = document.getElementById("resutl3")
btn3.onclick = function () {
    // INPUT soLuongUSD: number ,giaUSD:23500
    var soLuongUSD = +document.getElementById("slUSD").value;
    var giaUSD = 23500;

    // PROGRESS vnd = soLuongUSD * giaUSD
    var vnd = soLuongUSD * giaUSD;

    // OUTPUT vnd:number
    resutl3.innerHTML = new Intl.NumberFormat("vn-VN").format(vnd) + "Đ";

};


// Bài 4: Tính diện tích, chu vi hình chữ nhật

var btn4 = document.getElementById("btn4");
var resutl4 = document.getElementById("result4");
var resutl5 = document.getElementById("result5");
btn4.onclick = function () {
    // INPUT chieuDai:number ,chieuRong:number
    var dai = +document.getElementById("chieuDai").value;
    var rong = +document.getElementById("chieuRong").value;

// PROGRESS chuVi = (dai + rong) * 2 ,dienTich = dai * rong;

    var chuVi = (dai + rong) * 2;
    var dienTich = dai * rong;

// OUTPUT chuVi: number ,dienTich: number
    resutl4.innerHTML = chuVi;
    resutl5.innerHTML = dienTich;
};

// Bài 5: Tính tổng 2 ký số

var btn5 = document.getElementById("btn5");
var resutl6 = document.getElementById("result6")
btn5.onclick = function () {
    // INPUT number: number
    var number = document.getElementById("number").value;

    // // PROGRESS 
    // firtnum = number / 10 , 
    // secondnum = Math.floor(number % 10)
    // tongKySo = firtnum + secondnum

    var firtnum = Math.floor(number / 10);
    var secondnum = Math.floor(number % 10);
    var tongKySo = firtnum + secondnum;

    // OUTPUT tongKySo: number
    resutl6.innerHTML = tongKySo;

};


