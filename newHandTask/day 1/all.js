let mingInput = document.querySelector('#mingInput')
let mingBtn = document.querySelector('#mingBtn')
let mingMsg = document.querySelector('#mingMsg')
let jayInput = document.querySelector('#jayInput')
let jayBtn = document.querySelector('#jayBtn')
let jayMsg = document.querySelector('#jayMsg')

mingBtn.addEventListener('click',sendMsg)
jayBtn.addEventListener('click',sendMsg)


function sendMsg(e){
    switch(e.target){
        case mingBtn:
            jayMsg.textContent = mingInput.value
            mingInput.value=''
            break
        case jayBtn:
            mingMsg.textContent = jayInput.value
            jayInput.value=''
            break
    }
}