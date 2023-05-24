var isNightMode = true;
var isTheme1 = false;
var isTheme2 = false;
var isTheme3 = false;
var isTheme4 = false;
var counter = 0;

function toggleNightMode() {

    var backGroundElm = document.querySelector('.circles');
    var textElm = document.querySelector('.title-base');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');

    // Toggle night mode
    isNightMode = !isNightMode;
    
    // Apply night mode
    if (isNightMode === true) {
      backGroundElm.style.backgroundColor = 'white';
      textElm.style.color = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#FFB800';
      }
    } else {
      backGroundElm.style.backgroundColor = '#232241';
      textElm.style.color = 'white';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
    }
    console.log("NightMode "+isNightMode);
}

function toggleNightModeEx() {
    counter++;
    console.log(counter);

    var backGroundElm = document.querySelector('.circles');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');
    var buttonElm = document.querySelector('.background-theme-class').getElementsByTagName('button');

    // Toggle night mode
    isNightMode = !isNightMode;
    isTheme1 = false;
    isTheme2 = false;
    isTheme3 = false;
    isTheme4 = false;
    
    // Apply night mode
    if (isNightMode === true) {
      backGroundElm.style.backgroundColor = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
      
    } else {
      backGroundElm.style.backgroundColor = 'white';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#FFB800';
      }
    }
    console.log("NightMode "+isNightMode);
}

function toggleTheme01() {
    counter++;
    console.log(counter);

    var backGroundElm = document.querySelector('.circles');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');

    // Toggle night mode
    isTheme1 = !isTheme1;
    isNightMode = true;
    isTheme2 = false;
    isTheme3 = false;
    isTheme4 = false;
    if(counter==21){
      togglePto();
    }
    
    // Apply night mode
    if (isTheme1 === false) {
      backGroundElm.style.backgroundColor = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
    } else {
      backGroundElm.style.backgroundColor = '#F79327';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#B70404';
      }
    }
    console.log("Theme01 "+isTheme1);
}

function toggleTheme02() {
    counter++;
    console.log(counter);

    var backGroundElm = document.querySelector('.circles');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');

    // Toggle night mode
    isTheme2 = !isTheme2;
    isNightMode = true;
    isTheme1 = false;
    isTheme3 = false;
    isTheme4 = false;
    if(counter==21){
      togglePto();
    }
    
    // Apply night mode
    if (isTheme2 === false) {
      backGroundElm.style.backgroundColor = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
    } else {
      backGroundElm.style.backgroundColor = '#F2BED1';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#F8E8EE';
      }
    }
    console.log("Theme02 "+isTheme2);
}

function toggleTheme03() {
    counter++;
    console.log(counter);

    var backGroundElm = document.querySelector('.circles');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');

    // Toggle night mode
    isTheme3 = !isTheme3;
    isNightMode = true;
    isTheme1 = false;
    isTheme2 = false;
    isTheme4 = false;
    if(counter==21){
      togglePto();
    }
    
    // Apply night mode
    if (isTheme3 === false) {
      backGroundElm.style.backgroundColor = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
    } else {
      backGroundElm.style.backgroundColor = '#4C4C6D';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#1B9C85';
      }
    }
    console.log("Theme03 "+isTheme3);
}

function toggleTheme04() {
    counter++;
    console.log(counter);

    var backGroundElm = document.querySelector('.circles');
    var bgElm = document.querySelector('.circles').getElementsByTagName('li');

    // Toggle night mode
    isTheme4 = !isTheme4;
    isNightMode = true;
    isTheme1 = false;
    isTheme2 = false;
    isTheme3 = false;
    if(counter==21){
      togglePto();
    }

    
    // Apply night mode
    if (isTheme4 === false) {
      backGroundElm.style.backgroundColor = '#232241';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = 'white';
      }
    } else {
      backGroundElm.style.backgroundColor = '#97DEFF';
      for (let i = 0; i < bgElm.length; i++) {
        bgElm[i].style.background = '#62CDFF';
      }
    }
    console.log("Theme03 "+isTheme3);
}

function togglePto() {
  var bgElm = document.querySelector('.circles');
  audio.muted = true;
  bgElm.innerHTML = '<video src="/images/specailbg.mp4" autoplay loop ></video>';
  console.log(counter);
}