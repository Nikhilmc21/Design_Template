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
let apiKey = 'bdc_f35cc7c77bd84434acc1d82cad8a1e62	';
$.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, function(data) {
  console.log(JSON.stringify(data, null, 2));
  localStorage.setItem("IP", data.ip);
});
var ip = localStorage.getItem("IP");
document.getElementById("pi").innerHTML = ip;
};
