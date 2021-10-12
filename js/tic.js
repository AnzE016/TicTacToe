let p = document.getElementById('player');

let arr = [];
let color1 = ["red", "blue"];

let player1 = document.createTextNode("Player 1 (");
let player2 = document.createTextNode("Player 2 (");
let res = document.createTextNode("");
let c = document.createTextNode(color1[0]);
let y = document.createTextNode(")");

let st = 0;
let onclk = 0;
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let box = document.createElement('p');
        box.style.border = "5px solid black";
        box.style.width = "80px";
        box.style.height = "80px";
        box.style.margin = "0px";
        box.style.marginLeft = "1px";
        box.style.marginTop = "1px";
        box.style.display = "inline-block";
        box.style.verticalAlign = "top";
        box.id = st;
        box.addEventListener("click", check);
        document.body.appendChild(box);
        st++;
    }
    document.body.appendChild(document.createElement("br"));
}

p.appendChild(player1);
p.appendChild(c);
p.appendChild(y);

let reset = document.createElement("button");
reset.onclick = function (){
    location.reload();
};
let note = document.createTextNode("Reset");
reset.appendChild(note);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(reset);


function addX(){
    c = document.createTextNode(color1[1]);
    box = document.getElementById(event.target.id);
    box.style.backgroundColor = color1[0];
    box.removeEventListener("click", check);

    p.appendChild(player2);
    p.appendChild(c);
    p.appendChild(y);

    arr[box.id]=1;
}

function addO(){
    c = document.createTextNode(color1[0]);
    box = document.getElementById(event.target.id);
    box.style.backgroundColor = color1[1];
    box.removeEventListener("click", check);
    
    p.appendChild(player1);
    p.appendChild(c);
    p.appendChild(y);

    arr[box.id]=-1;
}

function check(){
    document.getElementById('player').innerHTML = "";
    if(onclk % 2 == 0){
        addX();
    }
    else{
        addO();
    }
    
    switch(true){
        case arr[0]==arr[1] && arr[0]==arr[2]  && arr[0] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[0] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;
        
        case arr[3]==arr[4] && arr[4]==arr[5]  && arr[4] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[3] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;
        
        case arr[6]==arr[7] && arr[7]==arr[8] && arr[7] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[6] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[0]==arr[3] && arr[0]==arr[6] && arr[3] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[0] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[1]==arr[4] && arr[1]==arr[7] && arr[1] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[1] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[2]==arr[5] && arr[8]==arr[2] && arr[2] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[2] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[0]==arr[4] && arr[0]==arr[8] && arr[0] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[0] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[2]==arr[4] && arr[6]==arr[2] && arr[2] != null:
            document.getElementById('player').innerHTML = "";
            if(arr[2] == -1){
                document.getElementById('result').innerHTML = "PLAYER 2 WON";
            }
            else{
                document.getElementById('result').innerHTML = "PLAYER 1 WON";
            }
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr.length == 9 && arr[0] != null && arr[1] != null && arr[2] != null && arr[3] != null && arr[4] != null && arr[5] != null && arr[6] != null && arr[7] != null:
            document.getElementById('player').innerHTML = "";
                document.getElementById('result').innerHTML = "DRAW";
            break;
        }
    
    onclk++;
    console.log(arr);
}

function changeC(){
    let x = document.getElementById("color");
    for (let i = 0; i < x.length ;i++) {
        color1[i] = x.elements[i].value;
    }
    document.getElementById('player').innerHTML = "";
    c = document.createTextNode(color1[0]);
    p.appendChild(player1);
    p.appendChild(c);
    p.appendChild(y);
}