
customProgramName = "FiQ Financial Trivia";


var customProgramName = localStorage.getItem("cookieCustomProgramName")
if (customProgramName == null) {customProgramName = "FiQ Financial Trivia"};

var customImageSource = localStorage.getItem("cookieCustomImageSource")
if (customImageSource == "") {customImageSource = "customize/logo.png"};
if (customImageSource == null) {customImageSource = "customize/logo.png"};


var getTeamScore = localStorage.getItem("cookieTeamScore");




window.onload = function(){


	document.getElementById("developer_button").className = "MyClass";
	$('#developer_button').click(function(){
  window.location.href = "admin-panel.html"
});
	$('#developer_button_2').click(function(){
  window.location.href = "admin-panel.html"
});

  document.getElementById('developer_button').innerHTML = customProgramName
  document.getElementById('developer_button').style.display = "block";
  document.getElementById('developer_button_2').src=customImageSource;
  document.getElementById('currentLogo').src=customImageSource;



  document.getElementsByClassName('logo')[0].innerHTML = "<img src='customize/logo.png' height='60px' />"
  document.getElementsByClassName('logo')[0].style.display = "block"
}
 