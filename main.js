const changeProgress = document.getElementById("pr-bars");
const firstTik = document.getElementById("first-tik");
const secondTik = document.getElementById("second-tik");
const thirdTik = document.getElementById("third-tik");
let score = 10;
score = (score * 100) / 60;
if(score>100) {
    changeProgress.style.width = "100%";
    firstTik.classList.add("green-logo");
    secondTik.classList.add("green-logo");
    thirdTik.classList.add("green-logo");
    firstTik.style.marginLeft = "19.5%";
    secondTik.style.marginLeft = "2.5%";
    thirdTik.style.marginLeft = "20.5%";
}
else {
    changeProgress.style.width = score + "%";
}
firstTik.classList.remove("green-logo");
secondTik.classList.remove("green-logo");
thirdTik.classList.remove("green-logo");
firstTik.classList.remove("blue-logo");
secondTik.classList.remove("blue-logo");
thirdTik.classList.remove("blue-logo");

if(score<25) {
    firstTik.classList.add("blue-logo");
    secondTik.classList.add("blue-logo");
    thirdTik.classList.add("blue-logo");
    secondTik.style.backgroundImage = "url('./images/blue\ 1-min.png')";
    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
}

if(score===25){
    firstTik.classList.add("blue-logo");
    secondTik.classList.add("blue-logo");
    thirdTik.classList.add("blue-logo");
    firstTik.style.backgroundImage = "url('./images/gold\ 1-min.png')"
    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
    firstTik.style.zIndex = "2";
}

if(score>25 && score<50){
    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
    firstTik.classList.add("green-logo");
    secondTik.classList.add("blue-logo");
    thirdTik.classList.add("blue-logo");
    firstTik.style.marginLeft = "19.5%";
    secondTik.style.marginLeft = "-2.5%";
    thirdTik.style.marginLeft = "10%";
}

if(score==50){
    firstTik.classList.add("green-logo");
    secondTik.classList.add("blue-logo");
    thirdTik.classList.add("blue-logo");
    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
    secondTik.style.zIndex = "2";
    firstTik.style.marginLeft = "19.5%";
    secondTik.style.marginLeft = "-2.5%";
    thirdTik.style.marginLeft = "10%";
}

if(score>50 && score<100) {
    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
    firstTik.classList.add("green-logo");
    secondTik.classList.add("green-logo");
    thirdTik.classList.add("blue-logo");
    firstTik.style.marginLeft = "19.5%";
    secondTik.style.marginLeft = "2.5%";
    thirdTik.style.marginLeft = "15%";
}

if(score === 100){
    firstTik.classList.add("green-logo");
    secondTik.classList.add("green-logo");
    thirdTik.classList.add("green-logo");
    firstTik.style.marginLeft = "19.5%";
    secondTik.style.marginLeft = "2.5%";
    thirdTik.style.marginLeft = "20.5%";
}


