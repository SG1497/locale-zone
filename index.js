const  questions =[
  {
    question :"India’s first-ever national police museum will establish in which city?",
    answers :[
      {text:"Chennai" , correct: "false"},
      {text:"Delhi" , correct: "true"},
      {text:"Nagpur" , correct: "false"},
      {text:"Kolkata" , correct: "false"},
    ]
  },
  {
    question :" Which country will host the 45th G7 summit 2019?",
    answers :[
      {text:"Italy" , correct: "false"},
      {text:"Germany" , correct: "flase"},
      {text:"France" , correct: "true"},
      {text:"Canada" , correct: "false"},
    ]
  },
  {
    question :" Which country’s women cricket team has clinched the Asia Cup Twenty-20 tournament 2018?",
    answers :[
      {text:"SouthKorea" , correct: "false"},
      {text:"Bangladesh" , correct: "true"},
      {text:"India" , correct: "false"},
      {text:"Pakistan" , correct: "false"},
    ]
  },
  {
    question :" Who has won the men’s singles French Open tennis tournament 2018?",
    answers :[
      {text:"Novak Djokovic" , correct: "false"},
      {text:"Dominic Thiem" , correct: "false"},
      {text:"Roger Federer" , correct: "false"},
      {text:"Rafael Nadal" , correct: "true"},
    ]
  },
  {
    question :" Which country’s football team has lifted the 2018 Intercontinental Cup football title?",
    answers :[
      {text:"India" , correct: "true"},
      {text:"SriLanka" , correct: "false"},
      {text:"Kenya" , correct: "false"},
      {text:"Argentina" , correct: "false"},
    ]
  },
  {
    question :" Which of the following personalities from India is the only winner of Special Oscar in the history of Indian Cinema so far?",
    answers :[
      {text:"Mrinal Sen" , correct: "false"},
      {text:" Shyam Bengal" , correct: "false"},
      {text:"Satyajit Ray" , correct: "true"},
      {text:"Mira Nair" , correct: "false"},
    ]
  },
  {
    question :" Who wrote Arthashastra?",
    answers :[
      {text:"Kalhan" , correct: "false"},
      {text:"Visakhadatta" , correct: "false"},
      {text:"Bana Bhatta" , correct: "false"},
      {text:"Chanakya" , correct: "true"},
    ]
  },
  {
    question :" H.J. Kania was the first...",
    answers :[
      {text:"Chief Justice of the Supreme Court of India" , correct: "true"},
      {text:"Attorney-General of India" , correct: "false"},
      {text:"Solicitor-General of India" , correct: "false"},
      {text:"None of them" , correct: "false"},
    ]
  }
  

]
var selected = false;
var clicked=false;

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    setTimeout(() => {
        console.log("Hello");
        handleUser();
    
    }, 800);
});

let currentQueCount= 0;
let correctScore=0;
let incorrectcorrectScore=0;
let prevQueCount=1;
function handleUser(){
    const locs = document.querySelectorAll(".location");
    const user= document.querySelector('.user');
    const pop_up=document.querySelector('.popup');
    clicked=false;
   
   console.log("Hello-1",locs);
     locs.forEach((loc,index)=>{
            loc.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopImmediatePropagation();
                // window.alert('test')
            //    console.log("classes", locs[index].classList.contains('location-1'))
            switch (locs[index].classList.value) {
              case "location location-1":
                console.log("First image");
                user.style.webkitAnimation ="move-1 3s linear  forwards ";
                e.target.style.pointerEvents='none';
                locs[index+1].style.pointerEvents='auto';
                e.target.style.filter='invert(1)';
                // pop_up.toggle('show');
                pop_up.style.top='134px'; pop_up.style.left='17%';
                handlepopUp(pop_up);
                handlequestion();                            
              break;
             case  "location location-2":
            
              console.log("second image");
              user.style.webkitAnimation ="move-2 3s linear forwards";
              e.target.style.pointerEvents='none';
              locs[index+1].style.pointerEvents='auto';
              e.target.style.filter='invert(1)';
              pop_up.style.top='-50px'; pop_up.style.left='4%';
                handlepopUp(pop_up);
                // currentQueCount++;
                prevQueCount+=2;
                handlequestion();
              break;
              case  "location location-3":
              console.log("third image");
              user.style.webkitAnimation ="move-3 3s linear  forwards";
              e.target.style.pointerEvents='none';
              locs[index+1].style.pointerEvents='auto';
              e.target.style.filter='invert(1)';
              pop_up.style.top='-25px'; pop_up.style.left='47%';
              handlepopUp(pop_up);
              // currentQueCount++;
              prevQueCount+=2;
              handlequestion();
              break;
              case  "location location-4":
              console.log("fourth image");
              user.style.webkitAnimation ="move-4 3s linear  forwards";
              e.target.style.pointerEvents='none';
              e.target.style.filter='invert(1)';
              pop_up.style.top='-29px'; pop_up.style.left='44%';
              // locs[index+1].style.pointerEvents='auto';
              handlepopUp(pop_up);
              // handleResult(game_res);
              // currentQueCount++;
              prevQueCount+=2;
              handlequestion();
               
              break
              default:
                console.log("original position");
                user.style.webkitAnimation ="none";
                break;
            }
            
            })
        })
}


 function handlepopUp(pop_up) {
setTimeout(() => {
  if(pop_up.classList.contains("show")){
    pop_up.classList.toggle("show");
   
  
    }
    else{
      // pop_up.classList.toggle("show");
     pop_up.classList.add("show");
    }

},3000);
 
}



function handlequestion(){
  selected = false;
    const que=document.querySelector('.pop-que');
  const nextBtn=document.querySelector('.next');
  // const options=document.querySelectorAll('.opt');
  const ansButtons=document.querySelector('.pop-text');
 
  const submitBtn=document.querySelector('.submit');
  nextBtn.style.display='block';
  submitBtn.style.display='none'
  let currentQuestion=questions[currentQueCount];
  handleresetanswers(ansButtons);
   let queNo =currentQueCount+1;
  que.innerHTML =queNo + '.' + currentQuestion.question;

  currentQuestion.answers.forEach(ans=>{
    const button= document.createElement('button');
    button.innerHTML=ans.text;
    button.classList.add('opt');
    ansButtons.appendChild(button);
    if(ans.correct){
      button.dataset.correct=ans.correct;
    }
    button.addEventListener('click',handleSelction);
    
  })
  nextBtn.addEventListener('click',(e)=>{
    e.stopImmediatePropagation();
    e.preventDefault();
    console.log('after select next clicked');
    if(currentQueCount < prevQueCount){
      handlenextquestion();
     
      // nextBtn.innerHTML='test';
    }
    else{
          modalclose();
    }
  })


  

}

function handleSelction(e){
  selected = true;
  const ansButtons=document.querySelector('.pop-text');
  e.target.classList.add('selected');
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct === 'true';
  if(isCorrect){
    selectedBtn.classList.add('correct');
   
    correctScore++;
    console.log(correctScore,"see data")
  }
  else{
    selectedBtn.classList.add('incorrect');
    incorrectcorrectScore++;
  }
  Array.from(ansButtons.children).forEach(button=>{
    if(button.dataset.correct ==='true'){
      button.classList.add('.correct');
    }
    button.disabled=true;
    button.style.cursor='auto';
  })
  
  
 }

 function handlenextquestion(){
  console.log('inside next question handler')
  if(!selected) {
    return;
  }
  currentQueCount++;
  if(currentQueCount <questions.length){
    
    handlequestion();
  }
    else{
  // //   // nextBtn.innerHTML='test';
      modalclose();
   }
 }

 function modalclose(){
  const pop_up=document.querySelector('.popup');
   const nextBtn=document.querySelector('.next');
   const submitBtn=document.querySelector('.submit');
   const game_res=document.querySelector('.game-result');
   
  console.log('closed function')
 nextBtn.style.display='none';
 submitBtn.style.display='block';


 
    // clicked=true;
    submitBtn.addEventListener('click',(e)=>{
      e.stopImmediatePropagation();
      e.preventDefault();
     console.log('submit clicked');
     pop_up.style.opacity='0';
      // pop_up.style.display='none !important';
      if(!clicked){
        clicked=true;
      handlepopUp(pop_up);
      currentQueCount++;
      }
     
        if(currentQueCount === questions.length){
          handleResult(game_res);
        }
     })
  


 }

 function handleresetanswers(ansButtons){
  console.log(ansButtons);
  while(ansButtons.firstChild){
    ansButtons.removeChild(ansButtons.firstChild);
  }
 }



function handleResult(game_res){
 setTimeout(() => {
  const showIncorrectScore=document.querySelector('.result-incorrect');
  const showCorrectScore=document.querySelector('.result-correct');
  const pieChange=document.querySelector('.dot-blue');
  
  if(game_res.classList.contains("show")){
    game_res.classList.toggle("show");
  
    }
     game_res.classList.add('show');
    if(correctScore=='1'){
      pieChange.classList.add('dot-blue-4');
      showIncorrectScore.style.top='50%';
      showCorrectScore.style.top='13%';
      showCorrectScore.style.right='10px';
    }
    else if(correctScore=='2'  ){
      pieChange.classList.add('dot-blue-3');
      showIncorrectScore.style.top='50%';
      showCorrectScore.style.top='13%';
      showCorrectScore.style.right='13px';
    }
    if(correctScore=='3'){
      pieChange.classList.add('dot-blue-2');
      showCorrectScore.style.top='21%';
      
    }
    if(correctScore=='4'){
      pieChange.classList.add('dot-blue-1');
      showIncorrectScore.style.top='47%';
      showCorrectScore.style.top='48%';
      showCorrectScore.style.right='7px';

    }
    else if(correctScore=='5'){
      pieChange.classList.add('dot-blue-5');
      // showIncorrectScore.style.top='16%';
      showIncorrectScore.style.left='9px';
      showCorrectScore.style.top='55%';
      showCorrectScore.style.right='7px';
    }
  if(correctScore == '6'){
    pieChange.classList.add('dot-blue-6');
    showIncorrectScore.style.top='20%';
    showIncorrectScore.style.left='22px';
    showCorrectScore.style.top='57%';
    }
    if(correctScore == '7'){
      pieChange.classList.add('dot-blue-7');
      showIncorrectScore.style.left='40px';
      showCorrectScore.style.top='60%';
      showCorrectScore.style.right='35px';
    }
  if(correctScore == '8'){
    pieChange.classList.add('dot-blue-all');
    showIncorrectScore.style.display='none';
    showCorrectScore.style.top='40%';
    showCorrectScore.style.right='65px';
  }
  if(correctScore =='0'){
    pieChange.classList.add('dot-grey-all');
    showCorrectScore.style.display='none';
    showIncorrectScore.style.top='45%';
    showIncorrectScore.style.left='45px';
  }
    showCorrectScore.innerHTML=`${correctScore} Correct`;
    showIncorrectScore.innerHTML=`${incorrectcorrectScore} Wrong`;
 }, 4000);
}

