function kart_exit() {
    var elem = document.getElementById("go_kart_exit"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 750) {
            pos = 0
            elem.style.marginRight = pos + 'px';
            clearInterval(id);
            kart_enter();
        } else {
            pos++; 
            elem.style.marginRight = pos + 'px'; 
        }
    }
}

function kart_enter() {
    var elem = document.getElementById("go_kart_enter"); 
    var pos = -800;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            pos = -800
            elem.style.marginLeft = pos + 'px';
            clearInterval(id);
            kart_exit();
        } else {
            pos++; 
            elem.style.marginLeft = pos + 'px'; 
        }
    }
}

function shootBall() {
    console.log("ball"); 
    var elem = null;
    var inc = 31;
    var index = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (index != 5) {
            if (inc == 31) {
                if (index == 4) {
                    index = 1;
                } else {
                    index++;
                }
                elem = document.getElementById("robotics"+index);
                elem.style.visibility = 'hidden'; //visible
                inc = 0;
                //clearInterval(id);
            } else if (inc == 30) {
                elem.style.visibility = 'visible'; //hidden
                inc++;
            } else {
                inc++; 
            }
        }
    }
}

// function playMessage() {
//     console.log("message"); 
//     var elem = null;
//     var inc = 11;
//     var index = 1;
//     var id = setInterval(frame, .5);
//     function frame() {
//         if (index != 52) {
//             if (inc == 11) {
//                 if (index == 51) {
//                     index = 1;
//                 } else {
//                     index++;
//                 }
//                 elem = document.getElementById("message"+index);
//                 elem.style.visibility = 'visible'; //visible
//                 inc = 0;
//                 //clearInterval(id);
//             } else if (inc == 10) {
//                 elem.style.visibility = 'hidden'; //hidden
//                 inc++;
//             } else {
//                 inc++; 
//             }
//         }
//     }
// }

function playMessage() {
    var screen = document.getElementById("message1");
    var inc = 0;
    var index = 1;
    var id = setInterval(frame, 60);
    function frame() {
        if (inc = 30) {
            screen.style.visibility = 'hidden';
            if (index == 51) {
                index = 1;
            } else {
                index++;
            }
            screen = document.getElementById("message"+index);
            screen.style.visibility = 'visible'; //visible
            inc = 0;
        }
        inc++;
    }
}

function displayMessage() {
    for (var i = 1; i < 52; i++) {
        var screen = document.createElement("img");
        screen.setAttribute("src", "./Message/Message"+i+".png");
        screen.setAttribute("height", "185.75px");
        screen.setAttribute("id", "message"+i);
        screen.setAttribute("alt", "Message");

        // screen.style.position = "absolute";
        // screen.style.left = "0";
        // screen.style.right = "0";
        // screen.style.margin = "auto";

        screen.style.position = "absolute";
        screen.style.left = "50%";
        screen.style.marginLeft = "-151px";
        screen.style.top = "50%";
        screen.style.marginTop = "16px";
        screen.style.visibility = "hidden";
        screen.style.zIndex = "2";

        document.getElementById("moving_content").appendChild(screen);

        playMessage();
    }
}


function bringForward() {
    var button = document.getElementById("computer_backdrop");
    var video = document.getElementById("computer_video");
    button.style.zIndex = '2';
    video.style.zIndex = '3'

}
function bringBackward() {
    var button = document.getElementById("computer_backdrop");
    var video = document.getElementById("computer_video");
    button.style.zIndex = '-1';
    video.style.zIndex = '-1'
}
function github() {
     window.location.href = "https://github.com/DavidKleinberg/";
}

var figure = $(".computer_video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('computer_video', this).get(0).play(); 
}

function hideVideo(e) {
    $('computer_video', this).get(0).pause(); 
}