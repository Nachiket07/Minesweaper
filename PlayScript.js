/*
10 is mine which is shown as * when everything explodes. 
1-8 are numbers.
9 is for disabled/visited.
*/


// try inhert property for button text color.
var ch = [[10, 10], [14, 40], [20, 99]];
var dim, mines;
var matrix;
var booleanMatrix;
var isselected = false; // for checking if user has given input befor submit.
function createGame() {
    document.getElementById("welcome").innerHTML = "Hey!";
}
function fill(i, j) {
    var id = document.getElementById(i + " " + j);
    id.style.color ="#0000ff" /*"#ff0000"*/;
    id.style.backgroundColor = "#d1d1e0";
    id.disabled = true;
    
    if (matrix[i][j] == 0) {
        matrix[i][j] = 9;
        if (i > 0 && matrix[i-1][j]!=9) {
            fill(i - 1, j);
        }
        if (i < dim - 1 && matrix[i+1][j]!=9) {
            fill(i + 1, j);
        }
        if (j > 0 && matrix[i][j-1] != 9) {
            fill(i, j - 1);
        }
        if (j < dim - 1 && matrix[i][j+1] != 9) {
            fill(i, j + 1);
        }
    }
    else {
        matrix[i][j] = 9;
    }
}
function floodfill() { 
    var splitId = (this.id).split(" ");   // this works.
    /*this.innerHTML = splitId[0];
    this.style.color = "#00b33c";
    this.style.backgroundColor = "#f0f0f5";
    this.disabled = true;*/
    var i = parseInt(splitId[0]);
    var j = parseInt(splitId[1]);
    if (matrix[i][j] != 10)
        fill(i, j);
    else {
        document.getElementById(i + " " + j).style.color = "#ff0000";
        document.getElementById(i + " " + j).style.backgroundColor = "#ff9999";
        document.getElementById("welcome").innerHTML = "Sorry ! you lost the game."+"</br>"+"Relode page to play again";
        var l, m;
        for (l = 0; l < dim; l++) {
            for (m = 0; m < dim; m++) {
                if (matrix[l][m] == 10 && l != i && m != j) {
                    document.getElementById(l + " " + m).style.color = "#ff0000";
                }
                document.getElementById(l + " " + m).disabled = true;
            }
        }
        //setTimeout(document.location.reload("https://localhost:44327/index.aspx"), 10000);
    }
}
function creation() {
    // this creates required button grid and sets events for buttons.
    // this also creates required matrix for game.
    var diff = document.getElementsByName("choice");
    var change = document.getElementById("change");
    var button;
    var buttonS = document.getElementById("buttonS");
    var i,j,k;
    for (i = 0; i < diff.length && !isselected; i++) {
        if (diff[i].checked) {
            dim = ch[i][0];
            mines = ch[i][1];
            isselected = true;
        }
    }
    if (!isselected) {
        alert("Please select size and no of mines");
        //return false;
    }
    else {
        change.innerHTML = "";
        buttonS.innerHTML = "";
        change.style.lineHeight = "0%";
        for (i = 0; i < dim; i++) {
            for (j = 0; j < dim; j++) {
                button = document.createElement("BUTTON");
                button.id = i.toString()+" "+ j.toString();
                button.style.height = "25px";
                button.style.width = "25px";
                button.innerHTML = "0";
                button.style.fontSize = "15px";
                button.style.color = "#666699"; // from w3school color picker #f0f0f5
                button.style.backgroundColor = "#666699";
                button.addEventListener("click", floodfill);
                change.appendChild(button);
            }
            change.appendChild(document.createElement("BR"));
        }
        // first generate 2D arrays of matrix and booleanMatrix.
        matrix = new Array(dim);
        for (i = 0; i < dim; i++) {
            matrix[i] = new Array(dim);
        }
        // generation of mines randomly.
        for (k = 0; k < mines;) {
            i = Math.floor(Math.random() * dim);
            j = Math.floor(Math.random() * dim);
            if (matrix[i][j] != 10) {
                matrix[i][j] = 10;
                k += 1;
                document.getElementById(i + " " + j).innerHTML = "M";
            }
        }
        // now to generate nos 0-8 according to mines surrounded by the box.
        for (i = 0; i < dim; i++) {
            for (j = 0; j < dim; j++) {
                k = 0;//no of surrounded mines.
                if (matrix[i][j] != 10) {
                    if (j > 0) {
                        if (i > 0 && matrix[i - 1][j - 1] == 10) {
                            k += 1;
                        }
                        if (matrix[i][j - 1] == 10) {
                            k += 1;
                        }
                        if (i < dim - 1 && matrix[i + 1][j - 1] == 10) {
                            k += 1;
                        }
                    }
                    if (j < dim - 1) {
                        if (i > 0 && matrix[i - 1][j + 1] == 10) {
                            k += 1;
                        }
                        if (matrix[i][j + 1] == 10) {
                            k += 1;
                        }
                        if (i < dim - 1 && matrix[i + 1][j + 1] == 10) {
                            k += 1;
                        }
                    }
                    if (i > 0 && matrix[i - 1][j] == 10) {
                        k += 1;
                    }
                    if (i < dim - 1 && matrix[i + 1][j] == 10) {
                        k += 1;
                    }
                    matrix[i][j] = k;
                    if (k != 0)
                        document.getElementById(i + " " + j).innerHTML = k;
                }
                //document.getElementById(i + " " + j).style.color = "#cc0000";
            }
        }
    }
}