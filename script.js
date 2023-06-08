input = document.querySelector("#userInput")
enterButton = document.querySelector("#enter")
responseRow = document.querySelector('#answers')
petTalk = document.querySelector('#speaking')
petPic = document.querySelector('#petPic')
grapeSoda = document.querySelector(".fanta")
console.log(grapeSoda)
code = document.querySelector('body')
displayDeath = document.querySelector('#deathCount')
let deadCount = 0
let petName =''
let petMode = 0;

enterButton.addEventListener("click", namePet)



function namePet(){
  petMode = 1;
  //DISPLAY
  if (deadCount!=0){
    displayDeath.innerHTML =  "<p>your pet has died "+deadCount+" time(s)</p>"
    petPic.innerHTML = "<img src='images/ghost-hungry.png' alt='madPet'>"
  }
  else{petPic.innerHTML = "<img src='images/hungry.png' alt='madPet'>"}
    console.log(grapeSoda)
  petName = input.value
  petTalk.innerHTML = petName + ' is starving! Feed them something!'
  petTalk.innerHTML += "<p id='tip'> scroll over them to see what they want to eat </p>"
  responseRow.innerHTML = '<button id="cheese" type="button" class="btn btn-primary">Cheese</button> <button id="poison" type="button" class="btn btn-primary">Poison</button> <button id="grapeSoda" type="button" class="btn btn-primary">Grape Soda</button>'

  //ACTIONS
  //scroll over//
  petPic.addEventListener("mouseover", (event) => {
    if (petMode ==1){
      if (deadCount>0){
        petPic.innerHTML = "<img src='images/ghost-hungry-fanta.png'>"
      }
      else{petPic.innerHTML = "<img src='images/hungry-fanta.png'>"}
  }});
  petPic.addEventListener("mouseout", (event) => {
    if (petMode ==1){
      if (deadCount>0){
        petPic.innerHTML = "<img src='images/ghost-hungry.png'>"
      }
      else{petPic.innerHTML = "<img src='images/hungry.png'>"}
  }});
  //buttons//
  let cheeseButton = document.querySelector("#cheese")
  cheeseButton.addEventListener("click", eatCheese)
  let poisonButton = document.querySelector('#poison')
  poisonButton.addEventListener("click", poisoned)
  let grapeSodaButton = document.querySelector('#grapeSoda')
  grapeSodaButton.addEventListener("click", eatGrapeSoda)
}



//EATING

function eatCheese(){
  petMode = 2;
  //DISPLAY
  if(deadCount>=1){
    petPic.innerHTML = "<img src='images/ghost-mad.png' alt='madPet'>"
  }
  else{petPic.innerHTML = "<img src='images/mad.png' alt='madPet'>"}
  petTalk.innerHTML = petName + ' hates cheese! Feed them something else!'
  responseRow.innerHTML = '<button id="grapeSoda" type="button" class="btn btn-primary">Grape Soda</button> <button id="poison" type="button" class="btn btn-primary">Poison</button>'

  //ACTIONS
  let poisonButton = document.querySelector('#poison')
  poisonButton.addEventListener("click", poisoned)
  let grapeSodaButton = document.querySelector('#grapeSoda')
  grapeSodaButton.addEventListener("click", eatGrapeSoda)
}


function poisoned(){
  petMode = 3;
  //DISPLAY
  petPic.innerHTML = "<img src='images/dead.png'' alt='deadPet'>"
  petTalk.innerHTML = 'your pet died :( do you want to have a ghost pet?'
  responseRow.innerHTML = '<button id="yesButton" type="button" class="btn btn-primary">Yes</button>'

  //ACTIONS
  let yesButton = document.querySelector('#yesButton')
  yesButton.addEventListener('click', (e) => {
    code.classList.add('ghost')
    petPic.setAttribute("id",'ghostPet')
    deadCount+=1
    console.log(deadCount)
    namePet()})
}
  

function eatGrapeSoda(){
  petMode = 4;
//DISPLAY
  if(deadCount>=1){
    petPic.innerHTML = "<img src='images/ghost-happy.png' alt='happyPet'>"
  }
  else{petPic.innerHTML = "<img src='images/happy.png' alt='happyPet'>"}
  petTalk.innerHTML = "They're so happy! Now that they've had a delicious meal, they're ready for bed. What should they wear?"
  responseRow.innerHTML = '<button id="pajamas" type="button" class="btn btn-primary">Pajamas</button> <button id="naked" type="button" class="btn btn-primary">No Clothes</button>'

//ACTIONS
  let pajamasButton = document.querySelector('#pajamas')
  pajamasButton.addEventListener("click", wearPajamas)
  let nakedButton = document.querySelector('#naked')
  nakedButton.addEventListener("click", naked)
}



//CLOTHES

function wearPajamas(){
  petMode = 5;
  //DISPLAY
  if(deadCount>=1){
    petPic.innerHTML = "<img src='images/ghost-sleepy.png' alt='sleepyPet'>"
  }
  else{petPic.innerHTML = "<img src='images/sleepy.png' alt='sleepyPet'>"}
  petTalk.innerHTML = "So so cozy! Time to sleep, thank you for taking good care of them!"
  responseRow.innerHTML =''

  //ACTION

}

function naked(){
  petMode = 6;
  //DISPLAY
  petPic.innerHTML = "<img src='images/dead.png'' alt='nakedPet'>"
  petTalk.innerHTML = "OMG they're naked! That's so embarrassing. They died from embarassment. Bring them back as a ghost?"
  responseRow.innerHTML = '<button id="yesButton" type="button" class="btn btn-primary">Yes</button>'

  //ACTIONS
  let yesButton = document.querySelector('#yesButton')
  yesButton.addEventListener('click', (e) => {
    code.classList.add('ghost')
    petPic.setAttribute("id",'ghostPet')
    deadCount+=1
    console.log(petPic)
    namePet()})
}