var box11 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");
var allbox = document.querySelector(".boxes");
var topHead = document.querySelector(".top-head").innerText;
var count = 0;
var arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
function func() {
    box11.innerText = "";
    box2.innerText = "";
    box3.innerText = "";
    box4.innerText = "";
    box5.innerText = "";
    box6.innerText = "";
    box7.innerText = "";
    box8.innerText = "";
    box9.innerText = "";
    box11.style.backgroundColor = "transparent";
    box2.style.backgroundColor = "transparent";
    box3.style.backgroundColor = "transparent";
    box4.style.backgroundColor = "transparent";
    box5.style.backgroundColor = "transparent";
    box6.style.backgroundColor = "transparent";
    box7.style.backgroundColor = "transparent";
    box8.style.backgroundColor = "transparent";
    box9.style.backgroundColor = "transparent";
    document.querySelector("#ng").classList.add('hidden');
    document.querySelector(".top-head").innerText = topHead;
    arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    count = 0;
}
function ifAnyoneWins(arr, count) {
    if (count % 2) {
        if (arr[0][0] == "X" && arr[0][1] == "X" && arr[0][2] == "X") return [1, 2, 3];
        else if (arr[1][0] == "X" && arr[1][1] == "X" && arr[1][2] == "X") return [4, 5, 6];
        else if (arr[2][0] == "X" && arr[2][1] == "X" && arr[2][2] == "X") return [7, 8, 9];
        else if (arr[0][0] == "X" && arr[1][0] == "X" && arr[2][0] == "X") return [1, 4, 7];
        else if (arr[0][1] == "X" && arr[1][1] == "X" && arr[2][1] == "X") return [2, 5, 8];
        else if (arr[0][2] == "X" && arr[1][2] == "X" && arr[2][2] == "X") return [3, 6, 9];
        else if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") return [1, 5, 9];
        else if (arr[0][2] == "X" && arr[1][1] == "X" && arr[2][0] == "X") return [3, 5, 7];
        else return false;
    }
    else {

        if (arr[0][0] == "O" && arr[0][1] == "O" && arr[0][2] == "O") return [1, 2, 3];
        else if (arr[1][0] == "O" && arr[1][1] == "O" && arr[1][2] == "O") return [4, 5, 6];
        else if (arr[2][0] == "O" && arr[2][1] == "O" && arr[2][2] == "O") return [7, 8, 9];
        else if (arr[0][0] == "O" && arr[1][0] == "O" && arr[2][0] == "O") return [1, 4, 7];
        else if (arr[0][1] == "O" && arr[1][1] == "O" && arr[2][1] == "O") return [2, 5, 8];
        else if (arr[0][2] == "O" && arr[1][2] == "O" && arr[2][2] == "O") return [3, 6, 9];
        else if (arr[0][0] == "O" && arr[1][1] == "O" && arr[2][2] == "O") return [1, 5, 9];
        else if (arr[0][2] == "O" && arr[1][1] == "O" && arr[2][0] == "O") return [3, 5, 7];
        else return false;

    }
}


// event listeners

function mainfunc(box1, x, y) {
    // console.log("in main box");
    if (box1.innerText == "") {
        count++;

        if (count % 2) { //x move
            box1.innerText = "X";

            arr[x][y] = "X";
            document.querySelector(".top-head").innerText = "Current player: O";
            // -----------------
            let output = ifAnyoneWins(arr, count);
            // console.log("in main box2\n"+ arr);

            if (output != false) {
                // console.log("works");
                for (let i = 0; i < output.length; i++) {
                    let str = "#box" + output[i];

                    document.querySelector(str).style.backgroundColor = "green";

                    console.log(document.querySelector(str))



                }
                document.querySelector("#ng").classList.remove("hidden");
                document.querySelector(".top-head").innerText = "X Wins"
                document.querySelector("#ng").addEventListener('click', function () {
                    func();
                });
            }
            else if (count === 9) {

                document.querySelector("#ng").classList.remove("hidden");
                document.querySelector(".top-head").innerText = "Match Tie"
                document.querySelector("#ng").addEventListener('click', function () {
                    func();
                });
            }
            // ----------------

        }
        else {  // o move
            box1.innerText = "O";
            arr[x][y] = "O";
            document.querySelector(".top-head").innerText = "Current player: X";

            let output = ifAnyoneWins(arr, count);
            if (output != false) {
                // console.log("works in o");
                for (let i = 0; i < output.length; i++) {
                    // console.log("works in o for");

                    let str = "#box" + output[i];
                    // console.log(str);
                    document.querySelector(str).style.backgroundColor = "green";



                }
                document.querySelector("#ng").classList.remove("hidden");
                document.querySelector(".top-head").innerText = "O Wins"
                document.querySelector("#ng").addEventListener('click', function () {
                    func();
                });
            }


        }
    }
}
box11.addEventListener('click', function () {
    mainfunc(box11, 0, 0);
})
box2.addEventListener('click', function () {
    mainfunc(box2, 0, 1);
})
box3.addEventListener('click', function () {
    mainfunc(box3, 0, 2);
})
box4.addEventListener('click', function () {
    mainfunc(box4, 1, 0);
})
box5.addEventListener('click', function () {
    mainfunc(box5, 1, 1);
})
box6.addEventListener('click', function () {
    mainfunc(box6, 1, 2);
})
box7.addEventListener('click', function () {
    mainfunc(box7, 2, 0);
})
box8.addEventListener('click', function () {
    mainfunc(box8, 2, 1);
})
box9.addEventListener('click', function () {
    mainfunc(box9, 2, 2);
})


