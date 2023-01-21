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
};
