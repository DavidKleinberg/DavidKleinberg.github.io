//var myVideo =  page.iframe.getElementById('scoringElement'); 
//myVideo.mute();
/*

var code = document.getElementsByClassName('coding')[0];

var button = document.getElementById("testbtn");

//var element = document.getElementById('testbtn');
button.addEventListener('click', function() {
    // Called each time the #buy-btn is clicked
var comment = "YAY!!";
	var newParagraph = document.createElement('p');
	newParagraph.textContent = comment;
    
});

//code.classList.add('cold-temperature');

function func() {
	var comment = "YAY!!";
	var newParagraph = document.createElement('p');
	newParagraph.textContent = comment;
}*/

var button = document.createElement("button");

button.innerHTML = "Do Something";

var body = document.getElementById('page');

var comment = "YAY!!";
var newParagraph = document.createElement('p');
newParagraph.textContent = comment;


body.appendChild(button);

//button.addEventListener("click", function() { title.innerHTML = "Button Clicked";})
button.addEventListener("click", function() { document.getElementById("updateDiv").appendChild(newParagraph);})