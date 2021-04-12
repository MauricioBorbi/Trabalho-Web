function enviarmsg() {
  const inputmensagem = document.getElementById("mensagem")

  const li = document.createElement("li")

  const namemensagem = document.createElement("strong")
  namemensagem.innerText = inputmensagem.value

  li.appendChild(namemensagem)

  const sendmessage = document.getElementById("sendmessage")
  sendmessage.appendChild(li)

  inputmensagem.value = ""

}

const formAdd = document.getElementById("formAdd")
formAdd.addEventListener("submit", function(event){ 
  event.preventDefault()

  enviarmsg()
})