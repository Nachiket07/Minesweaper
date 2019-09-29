var ch = [ [10, 10] , [14, 40] , [20, 99] ];
var dim, mines;
var isselected = false;
var buttoncontrol = false;
function createGame() {
    document.getElementById("welcome").innerHTML = "Hey!";
}
function floodfill() {
    //document.getElementById("welcome").innerHTML = this.id;
    this.innerHTML = "4";
}
function creation() {
    var diff = document.getElementsByName("choice");
    var change = document.getElementById("change");
    var button;
    var buttonS = document.getElementById("buttonS");
    var i,j;
    for (i = 0; i < diff.length && !isselected; i++) {
        if (diff[i].checked) {
            dim = ch[i][0];
            mines = ch[i][1];
            isselected = true;
        }
    }
    if (!isselected) {
        alert("Please select size and no of mines");
    }
    else {
        change.innerHTML = "";
        buttonS.innerHTML = "";
        change.style.lineHeight = "0%";
        for (i = 0; i < dim; i++) {
            for (j = 0; j < dim; j++) {
                button = document.createElement("BUTTON");
                button.id = i.toString()+" "+ j.toString();
                //button.style.padding = "7px 7px";
                button.style.height = "25px";
                button.style.width = "25px";
                sbutton.innerHTML = "0";
                button.style.fontSize = "10px";
                button.style.color = "rbga(0,255,0,0)";
                //button.style.with = "100%";
                //button.style.height = "100%";
                //button.style.color = "white";
                button.addEventListener("click", floodfill);
                change.appendChild(button);
            }
            change.appendChild(document.createElement("BR"));
        }
    }
}