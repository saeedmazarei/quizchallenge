function progressbar(){
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
}

progressbar();

function makeTable() {
    const matchContainer = document.getElementById("match-container");
    let opponentName = ['saeed', 'reza.optic', 'it3reza', 'farid4510', 'zahra56', 'maryam70', 'narges48'];
    let matchResult = ['13/14 بردی', 'باختی', 'مساوی', 'بازی بدون اشتباه', 'مساوی', '15/10 باختی', 'مساوی'];
    let medalGet = [2, 4, 5, 1, 3, 5, 2];
    let matchNumber = 7;

    for(let i = 1; i<=matchNumber; i++){
        let matchItem = document.createElement("div");
        matchItem.setAttribute('class', 'match-item');
        matchContainer.appendChild(matchItem);
        let star = document.createElement("div");
        star.setAttribute('class', 'star');
        matchItem.appendChild(star);
        let divResult = document.createElement("div");
        divResult.setAttribute('class', 'result');
        matchItem.appendChild(divResult);
        let span1 = document.createElement("span");
        
        let span2 = document.createElement("span");
        span1.innerHTML = matchResult[i-1];
        let vs = document.createElement("div");
        vs.setAttribute('class', 'vs');
        matchItem.appendChild(vs);
        span2.innerHTML = opponentName[i-1];
        divResult.appendChild(span1);
        vs.appendChild(span2);


        let starPic1 = document.createElement("div");
        starPic1.setAttribute('class', 'star-pic');
        star.appendChild(starPic1);

        let starPic2 = document.createElement("div");
        starPic2.setAttribute('class', 'star-pic');
        star.appendChild(starPic2);

        let starPic3 = document.createElement("div");
        starPic3.setAttribute('class', 'star-pic');
        star.appendChild(starPic3);

        let starPic4 = document.createElement("div");
        starPic4.setAttribute('class', 'star-pic');
        star.appendChild(starPic4);

        let starPic5 = document.createElement("div");
        starPic5.setAttribute('class', 'star-pic');
        star.appendChild(starPic5);
        
            if(medalGet[i-1]<6 && medalGet[i-1]>0){
                starPic1.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>1){
                starPic2.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>2){
                starPic3.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>3){
                starPic4.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>4){
                starPic5.setAttribute("class", "golden-medals");
            }

    }

}