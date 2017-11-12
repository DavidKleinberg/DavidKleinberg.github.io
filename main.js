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
    var pos = -500;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            pos = -750
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

var figure = $(".computer_video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('computer_video', this).get(0).play(); 
}

function hideVideo(e) {
    $('computer_video', this).get(0).pause(); 
}