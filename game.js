const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

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
      const button = document.createElement('button')
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

const textNodes = [
  
  {
  id: 1,
  text: 'Both wrestlers have enter the ring, the crowd is deafening here tonight. This is going to be a great match.',
  options: [
    {
      text: '(Wrestler1) and (Wrestler2) lock up, and engage in a traditional grappling.',
      setState: { Traditional: true },
      nextText: 2
    },
    {
      text: '(Wrestler1) invites (Wrestler2) into a Test of Strength,',
      setState: { TestofStrength: true },
      nextText: 2

    },
    {
      text: '(Wrestler1) and (Wrestler2) approaches close to each other, an intense staredown take place.',
      setState: { Staredown: true },
      nextText: 2
    },
    {
      text: 'Not wasting any time, both wrestlers run into the center of the ring brawling each other out',
      setState: { Brawling: true },
      nextText: 2

    }
 ]

}











]
startGame()
