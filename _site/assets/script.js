/*var button = document.createElement("button");
button.innerHTML = "PLAY CHESS";
var body = document.getElementById('page');
body.appendChild(button);*/

var output = document.getElementById("chess-output");
var clicked = false;

PieceEnum = {
    PAWN : 0,
    ROOK : 1,
    KNIGHT : 2,
    BISHOP : 3,
    QUEEN : 4,
    KING : 5
}

Player = {
    WHITE : 0,
    BLACK : 1
};

var Position = {
    x : 0,
    y : 0, 
    Position: function(xx, yy) { x = xx; y = yy; }

};

var boardPieces = new Array(64);

function setupBoard() {

    var pieces = [PieceEnum.PAWN, PieceEnum.ROOK, PieceEnum.KNIGHT, PieceEnum.BISHOP, PieceEnum.QUEEN, PieceEnum.KING];
    /*for (var i = 0; i < pieces.length; ++i) {
        initPiece(PieceEnum.PAWN, Player.WHITE, Position(i, 1));
        initPiece(pieces[i], Player.WHITE, Position(i, 0));
        initPiece(pieces[i], Player.BLACK, Position(i, 7));
        initPiece(PieceEnum.PAWN, Player.BLACK, Position(i, 6));
    }*/

    for (var i = 0; i < pieces.length; ++i) {
        output.innerHTML += pieces[i];

    }

    //Set the positions for the kings. This allows us to find them easily later in order to check for checkmate/stalemate.

}

function initPiece(id, owner, position) {
    /*Piece* piece = newPiece(id, owner);
    if (!piece) return false;

    // Fail if the position is out of bounds
    if (!validPosition(position)) {
        Prompts::outOfBounds();
        return false;
    }
    // Fail if the position is occupied
    if (getPiece(position)) {
        Prompts::blocked();
        return false;
    }*/
    var checking = owner;
    boardPieces[index(position)] = id;
}

function index(position) {
    return position.y * 8 + position.x;
}

function padTiles(x, y) {
    
    var line = "";
    for (var n = 0; n < 15; n++) {
        line += "&nbsp";
    }

    //window.alert(x);
    for (var c = 0; c < 4; c++) {   
            output.innerHTML += "<span style='background-color:" + x + "'>" + line+ "</span>";
            output.innerHTML += "<span style='background-color:" + y + "'>" + line+ "</span>";
        }
        output.innerHTML += "<br/>";
}


function playChess() {
    if (clicked) {
        return 1;
    }
    clicked = true;
    var pieceSymbol = ["P", "K", "R", "B", "Q", "X"];

    setupBoard();

    var buffer = "";
    for (var n = 0; n < 15; n++) {
        if (n == 7) {
            buffer += pieceSymbol[1];
            //buffer += boardPieces[n];
        } else if (n != 8 && n !=6) {
            buffer += "&nbsp";
        }
    }
    var color1 = "#F0F8FF";
    var color2 = "#ADD8E6";

    for (var r = 0; r < 8; r++) {

        padTiles(color1, color2);

        for (var c = 0; c < 4; c++) {   
            output.innerHTML += "<span style='background-color:" + color1 + "'>" + buffer+ "</span>";
            output.innerHTML += "<span style='background-color:" + color2 + "'>" + buffer+ "</span>";
        }
        output.innerHTML += "<br/>";

        padTiles(color1, color2);

        var temp = color1;
        color1 = color2;
        color2 = temp;
    }
}



