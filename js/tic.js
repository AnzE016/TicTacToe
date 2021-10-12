let p = document.getElementById('player');

let arr = [];
let color1 = ["red", "blue"];

let player1 = document.createTextNode("Player 1 (");
let player2 = document.createTextNode("Player 2 (");
let c = document.createTextNode(color1[0]);
let y = document.createTextNode(")");

let st = 0;
let onclk = 0;
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let box = document.createElement('p');
        box.style.border = "5px solid black";
        box.style.width = "40px";
        box.style.height = "40px";
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
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;
        
        case arr[3]==arr[4] && arr[4]==arr[5]  && arr[4] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;
        
        case arr[6]==arr[7] && arr[7]==arr[8] && arr[7] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[0]==arr[3] && arr[0]==arr[6] && arr[3] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[1]==arr[4] && arr[1]==arr[7] && arr[1] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[2]==arr[5] && arr[8]==arr[2] && arr[2] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[0]==arr[4] && arr[0]==arr[8] && arr[0] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;

        case arr[2]==arr[4] && arr[6]==arr[2] && arr[2] != null:
            console.log('U won');
            for (let i=0; i<9; i++)
                document.getElementById(i).removeEventListener("click", check);
            break;
        }


    if(arr.length == 9){
        let s;
        for(let i=0; i<9; i++){
            if(arr[i] == null){
                s=false;
                break;
            }
            s=true;
        }
        if (s){
            console.log("Draw");
        }
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
    p.appendChild(player1);
    p.appendChild(c);
    p.appendChild(y);
}