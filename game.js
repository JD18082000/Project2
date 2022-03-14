//The preset setting.

const textElement = document.getElementById('container')
const optionButtonsElement = document.getElementById('btn')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('btn')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

input = document.getElementById("name-input1")

input.addEventListener("keypress", (event)=> {
if (event.keyCode === 13){
  event.preventDefault();
  value = document.getElementById("name-input1").value;
  document.getElementById("narrative-text").innerHTML = value;
  document.getElementById("name-input1").value ="";
}
});

input = document.getElementById("name-input2")

input.addEventListener("keypress", (event)=> {
if (event.keyCode === 13){
  event.preventDefault();
  //get both name inputs
  value1 = document.getElementById("name-input1").value;
  value2 = document.getElementById("name-input2").value;
  //do something based on the name inputs like build strings
  option1 = `${value1}, ${value2} lock up, and engage in a traditional grappling.`
  option2 = `${value1}, invites ${value2} into a Test of Strength,`
  option3 = `${value1}, and ${value2} approaches close to each other, an intense staredown take place.`
  option4 = `Not wasting any time, ${value1}, and ${value2} run into the center of the ring brawling each other out`
 

  //display the new narrative strings on the webpage
  document.getElementById("narrative-text").innerHTML = `Both wrestlers enter the ring, the crowd is deafening here tonight. This is going to be a great match.`;
  document.getElementById("btn1").innerHTML =`${option1}`;
  document.getElementById("btn2").innerHTML =`${option2}`;
  document.getElementById("btn3").innerHTML =`${option3}`;
  document.getElementById("btn4").innerHTML =`${option4}`;

  //clear initial inputs
  document.getElementById("name-input1").value ="";
  document.getElementById("name-input2").value ="";
}
});

function updateText(event){
  //get the text from button
  console.log(event);
  console.log(event.innerHMTL);

  option1=`${value1} Irish Whip ${value2}, and boy, that must have been hurt `
  option2=`${value1} breaks the hold from ${value2}, he is pushing him into the corner.`
  option3=`Oh! What a chop from ${value1}, ${value2} fights back with his own.  `
  option4=`These two are going at each other!!!`


  //update options based on text
  document.getElementById("narrative-text").innerHTML = `Both men are picking up the pace here, folks.`;
  document.getElementById("btn1").innerHTML =`${option1}`;
  document.getElementById("btn2").innerHTML =`${option2}`;
  document.getElementById("btn3").innerHTML =`${option3}`;
  document.getElementById("btn4").innerHTML =`${option4}`;



  document.getElementById("narrative-text").innerHTML = `${value1} and ${value2}`;
}
//This sequence codes is for the options.
/*
const textNodes = [
  
  {
  id: 1,
  text: 'Both wrestlers have enter the ring, the crowd is deafening here tonight. This is going to be a great match.',
  options: [
    {
      text: '("name-input1) and (name2) lock up, and engage in a traditional grappling.',
      setState: { Traditional: true },
      nextText: 2
    },
    {
      text: '(name1) invites (name2) into a Test of Strength,',
      setState: { TestofStrength: true },
      nextText: 2

    },
    {
      text: '(name1) and (name2) approaches close to each other, an intense staredown take place.',
      setState: { Staredown: true },
      nextText: 2
    },
    {
      text: 'Not wasting any time, both wrestlers run into the center of the ring brawling each other out',
      setState: { Brawling: true },
      nextText: 2

    }
 ]

 [
 {
  id: 2,
  text: 'Both wrestler are going at it with each other, they have no concern for one or the other.',
  options: [
    {
      text: '(Wrestler1) and (Wrestler2) begins to doing the Irish whip each other between the ropes, back and forth.',
      setState: { Traditional: true },
      nextText: 3
    },
    {
      text: '(Wrestler2) and (Wrestler1) breaks the hold, both contestants punch each other and drag their fight to the corner.',
      setState: { TestofStrength: true },
      nextText: 3

    },
    {
      text: '(Wrestler1) and (Wrestler2) approaches close to each other, an intense staredown take place.',
      setState: { Staredown: true },
      nextText: 3
    },
    {
      text: 'Not wasting any time, both wrestlers run into the center of the ring brawling each other out',
      setState: { Brawling: true },
      nextText: 3

    }
 ]    
 
*/
