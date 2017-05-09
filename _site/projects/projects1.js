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

button.innerHTML = "PLAY CHESS";

var body = document.getElementById('page');

var comment = "YAY!!";
var newParagraph = document.createElement('p');
newParagraph.textContent = comment;


body.appendChild(button);


var output = document.getElementById("coding");

button.addEventListener('click', function() {
	output.innerHTML = "";
});

// Get the button, and when the user clicks on it, execute myFunction
//var button = document.getElementById("chessbtn").onclick = function() {playChess()};

//button.onclick = playChess();

/*var playChess = function playChess() {
    for (int c = 0; c < 4; c++) {
        output.innerHTML = "<span style='background-color:#F0F8FF'>" + line+ "</span>";
        output.innerHTML += "<span style='background-color:#ADD8E6'>" + line+ "</span>";
        output.innerHTML += "<br/>";
    }
};*/

//var redLine = space.backgroundColor("red");
//var yellowLine = space.fontcolor("red");


/*button.addEventListener('click', function() {

    for (var i = 0; i < 5; i++) {
        var space = document.createElement("p");
        space.className = "space";
        space.innerHTML += "<span style='background-color:#F0F8FF'>" + line+ "</span>";
        space.innerHTML += "<span style='background-color:#ADD8E6'>" + line+ "</span>";
        //space.style.backgroundColor = "red";
        output.appendChild(space);
    }

});*/
