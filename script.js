// onclick of Del

function del(){
    let delet = document.getElementById("output_screen").innerHTML.slice(0, -1);
    document.getElementById("output_screen").innerHTML = delet;
}

// onclick of RESET
function reset() {
    document.getElementById("output_screen").innerText = '0';
}



function myFunction(ele){
    let display = document.getElementById("output_screen").innerHTML;

    if(display === "0"){
        document.getElementById("output_screen").innerHTML = ele.innerHTML;
    }
    else if (display == y) {
        document.getElementById("output_screen").innerHTML = ele.innerHTML;
        alert("shown");
    }
    else{
            document.getElementById("output_screen").innerHTML += ele.innerHTML;
    }
}


let btnOperators = document.querySelectorAll("#operator");
for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', () =>{
    document.getElementById("output_screen").innerHTML += btnOperators[i].innerHTML;
    });
}

let y = "";
function calc() {
    let x = document.getElementById("output_screen").innerHTML;
    y = eval(x);
    document.getElementById("output_screen").innerHTML = y;
}







// toggle


let toggles = document.getElementsByTagName('input');
let arr = [...toggles];


for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', () => {
        let newarr = arr[i].style.opacity = "1";
        if (newarr) {
            arr[i].style.cursor = "pointer";
        }


        let toggle1 = document.getElementById("toggleOne");
        let toggle2 = document.getElementById("toggleTwo");

        if (arr[i] === toggle1) {
            document.getElementsByTagName("main")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
            document.getElementById("toggle-bg").style.backgroundColor = "hsl(223, 31%, 20%)";
            document.getElementsByTagName("h1")[0].style.color = "hsl(0, 0%, 100%)";
            document.getElementsByTagName("h2")[0].style.color = "hsl(0, 0%, 100%)";
            document.getElementById("p").style.color = "hsl(0, 0%, 100%)";

            document.querySelector("#main-screen").style.backgroundColor = "hsl(224, 36%, 15%)";
            document.querySelector("#output_screen").style.color = "hsl(0, 0%, 100%)";

            document.getElementById("buttons").style.backgroundColor = "hsl(223, 31%, 20%)";




            document.getElementsByTagName("button")[0].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[0].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[1].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[1].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[2].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[2].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[3].style.backgroundColor = "hsl(225, 21%, 49%)";
            document.getElementsByTagName("button")[3].style.boxShadow = "0px 3.5px 1px 0px hsl(224, 28%, 35%)";

            document.getElementsByTagName("button")[4].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[4].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[5].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[5].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[6].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[6].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[7].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[7].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[8].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[8].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[9].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[9].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[10].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[10].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[11].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[11].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[12].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[12].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[13].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[13].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[14].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[14].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[15].style.backgroundColor = "hsl(30, 25%, 89%)";
            document.getElementsByTagName("button")[15].style.boxShadow = "0px 3.5px 1px 0px hsl(28, 16%, 65%)";

            document.getElementsByTagName("button")[16].style.backgroundColor = "hsl(225, 21%, 49%)";
            document.getElementsByTagName("button")[16].style.boxShadow = "0px 3.5px 1px 0px hsl(224, 28%, 35%)";
            
            document.getElementsByTagName("button")[17].style.backgroundColor = "hsl(6, 63%, 50%)";
            document.getElementsByTagName("button")[17].style.boxShadow = "0px 3.5px 1px 0px hsl(6, 70%, 34%)";





        }
        else if (arr[i] === toggle2) {
            document.getElementsByTagName("main")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
            document.getElementById("toggle-bg").style.backgroundColor = "hsl(0, 5%, 81%)";
            document.getElementsByTagName("h1")[0].style.color = "hsl(60, 10%, 19%)";
            document.getElementsByTagName("h2")[0].style.color = "hsl(60, 10%, 19%)";
            document.getElementById("p").style.color = "hsl(60, 10%, 19%)";


            document.querySelector("#main-screen").style.backgroundColor = "hsl(0, 0%, 93%)";
            document.querySelector("#output_screen").style.color = "hsl(60, 10%, 19%)";

            document.getElementById("buttons").style.backgroundColor = "hsl(0, 5%, 81%)";


            document.getElementsByTagName("button")[0].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[0].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[1].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[1].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[2].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[2].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[3].style.backgroundColor = "hsl(185, 42%, 37%)";
            document.getElementsByTagName("button")[3].style.boxShadow = "0px 3.5px 1px 0px hsl(185, 58%, 25%)";

            document.getElementsByTagName("button")[4].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[4].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[5].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[5].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[6].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[6].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[7].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[7].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[8].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[8].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[9].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[9].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[10].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[10].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[11].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[11].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[12].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[12].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[13].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[13].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[14].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[14].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[15].style.backgroundColor = "hsl(45, 7%, 89%)";
            document.getElementsByTagName("button")[15].style.boxShadow = "0px 3.5px 1px 0px hsl(35, 11%, 61%)";

            document.getElementsByTagName("button")[16].style.backgroundColor = "hsl(185, 42%, 37%)";
            document.getElementsByTagName("button")[16].style.boxShadow = "0px 3.5px 1px 0px hsl(185, 58%, 25%)";
            
            document.getElementsByTagName("button")[17].style.backgroundColor = "hsl(25, 98%, 40%)";
            document.getElementsByTagName("button")[17].style.boxShadow = "0px 3.5px 1px 0px hsl(25, 99%, 27%)";



        }
        else {
            document.getElementsByTagName("main")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            document.getElementById("toggle-bg").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.getElementsByTagName("h1")[0].style.color = "hsl(52, 100%, 62%)";
            document.getElementsByTagName("h2")[0].style.color = "hsl(52, 100%, 62%)";
            document.getElementById("p").style.color = "hsl(52, 100%, 62%)";

            document.querySelector("#main-screen").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector("#output_screen").style.color = "hsl(52, 100%, 62%)";


            document.getElementById("buttons").style.backgroundColor = "hsl(268, 71%, 12%)";

            document.getElementsByTagName("button")[0].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[0].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[1].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[1].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[2].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[2].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[3].style.backgroundColor = "hsl(281, 89%, 26%)";
            document.getElementsByTagName("button")[3].style.boxShadow = "0px 3.5px 1px 0px hsl(285, 91%, 52%)";

            document.getElementsByTagName("button")[4].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[4].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[5].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[5].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[6].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[6].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[7].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[7].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[8].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[8].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[9].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[9].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[10].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[10].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[11].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[11].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[12].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[12].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[13].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[13].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[14].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[14].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[15].style.backgroundColor = "hsl(268, 47%, 21%)";
            document.getElementsByTagName("button")[15].style.boxShadow = "0px 3.5px 1px 0px hsl(290, 70%, 36%)";

            document.getElementsByTagName("button")[16].style.backgroundColor = "hsl(281, 89%, 26%)";
            document.getElementsByTagName("button")[16].style.boxShadow = "0px 3.5px 1px 0px hsl(285, 91%, 52%)";

            document.getElementsByTagName("button")[17].style.backgroundColor = "hsl(176, 100%, 44%)";
            document.getElementsByTagName("button")[17].style.boxShadow = "0px 3.5px 1px 0px hsl(177, 92%, 70%)";


        }

        
        arr.filter((item) => {
            return item != arr[i];
        } )
        .forEach((item) => {
            let hideindex = item.style.opacity = "0";
            if (hideindex) {
                item.style.cursor = "auto";
            }
        })
        


    })


}






