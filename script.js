

const key = "a0cd9b54b55ab96802b610f827fff841"



async function buscarCidade(cidade){
 
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(responsta => responsta.json())
  
 console.log(dados)
}


function cliqueiNoBotao(){
  const cidade = document.querySelector(".input-cidade").value

  buscarCidade(cidade)
}