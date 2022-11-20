const chatName = document.getElementById("chatNameBar");
const chatBox0 = document.getElementById("chatBox0");
const chatContainer1 = document.getElementById("chatContainer1");
const chatContainer2 = document.getElementById("chatContainer2");
const chatContainer3 = document.getElementById("chatContainer3");
const chatContent1 = document.getElementById("chatContent1");
const chatContent2 = document.getElementById("chatContent2");
const chatContent3 = document.getElementById("chatContent3");
const MessageContainer = document.getElementsByClassName("MessageContainer");



function deezToggle(){
    chatName.innerHTML = "Deez";
    chatBox0.style.display="none";
    chatContainer1.style.display="block";
    chatContainer2.style.display="none";
    chatContainer3.style.display="none";
}

function ligmaToggle(){
    chatName.innerHTML = "Ligma";
    chatBox0.style.display="none";
    chatContainer1.style.display="none";
    chatContainer2.style.display="block";
    chatContainer3.style.display="none";
}

function sugondeseToggle(){
    chatName.innerHTML = "Sugondese";
    chatBox0.style.display="none";
    chatContainer1.style.display="none";
    chatContainer2.style.display="none";
    chatContainer3.style.display="block";
}

document.addEventListener('keydown', function (event){
    if (event.keyCode == 13){
        sendMessage1();
    }
})

function sendMessage1(){
    if(chatContent1.value != " "){
        (chatBox1.style.display == 'block')
        const para = document.createElement("p");
        const node = document.createTextNode(chatContent1.value);
        para.appendChild(node);
        const element = document.getElementById("messageContainerSend1");
        element.appendChild(para);
        chatContent1.value = ' ';
        para.scrollIntoView();
        recieveMessage();
    }else if(chatContent2.value != " "){
        (chatBox2.style.display == 'block')
        const para = document.createElement("p");
        const node = document.createTextNode(chatContent2.value);
        para.appendChild(node);
        const element = document.getElementById("messageContainerSend2");
        element.appendChild(para);
        chatContent2.value = ' ';
        para.scrollIntoView();
        recieveMessage();
    }else if(chatContent3.value != " "){
        (chatBox3.style.display == 'block')
        const para = document.createElement("p");
        const node = document.createTextNode(chatContent3.value);
        para.appendChild(node);
        const element = document.getElementById("messageContainerSend3");
        element.appendChild(para);
        chatContent3.value = ' ';
        para.scrollIntoView();
        recieveMessage();
    }
}

function recieveMessage(){
    if(chatBox1.style.display == 'block'){
        const para = document.createElement("p");
        const node = document.createTextNode("Hello User");
        para.appendChild(node);
        const element = document.getElementById("messageContainerRecieve1");
        element.appendChild(para);
        chatContent1.value = ' ';
        para.scrollIntoView();
    }
}
