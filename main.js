const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};
var button = document.getElementById("Agree_Button_Location");
var white_slide = document.getElementById("white_slide");
var contain = document.getElementById("contains");
function agreelocation(){
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  white_slide.classList.add("animate");
  contain.classList.add("animate");
  setTimeout(function(){
    window.location.assign("info_page.html");
 }, 2000);
  // Base
let apiKey = 'd9e53816d07345139c58d0ea733e3870';
$.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, function(data) {
  console.log(JSON.stringify(data, null, 2));
  localStorage.setItem("IP", data.ip);
});
var ip = localStorage.getItem("IP");
document.getElementById("").innerHTML = ip;
};
