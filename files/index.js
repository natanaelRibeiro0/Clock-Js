const selectRegion = document.getElementById('choose-region')

selectRegion.addEventListener('change', () => {
  console.log(`Região escolida: ${selectRegion.value}`)
  digitalClock()
  clock()
})

function digitalClock(){
  const digitalClock = document.getElementById('digital-timer')
  digitalClock.innerText = ""

  setInterval(() => {
    const region = selectRegion.value
    const hours = new Date().toLocaleString('pt-BR', { timeZone: region, hour: "numeric",
    }); 
    let minutes = new Date().toLocaleString('pt-BR', { timeZone: region, minute: "numeric",
    }); 
      
    if(minutes < 10){ minutes = `0${minutes}`}
    
      digitalClock.innerText =`${hours}:${minutes}`
  }, 1000)
}

function clock(){
  const secondsPointer = document.getElementById(`seconds-div`)
  const hoursPointer = document.getElementById(`hour-div`)
  const minutesPointer = document.getElementById(`minute-div`)
  
  setInterval(() => {
    const region = selectRegion.value
    
    secondsPointer.style.rotate = `${new Date().toLocaleString('pt-BR', {timeZone: region , second: "numeric",}) * 6}deg`
    hoursPointer.style.rotate = `${new Date().toLocaleString(  'pt-BR', {timeZone: region , hour: "numeric",}) * 30}deg`
    minutesPointer.style.rotate = `${new Date().toLocaleString('pt-BR', {timeZone: region ,minute: "numeric"}) * 6}deg`
  
  }, 1000 * 1)
}