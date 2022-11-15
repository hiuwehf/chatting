const chatName = document.getElementById("chatNameBar");
const chatBox0 = document.getElementById("chatBox0");
const chatBox1 = document.getElementById("chatBox1");
const chatBox2 = document.getElementById("chatBox2");
const chatBox3 = document.getElementById("chatBox3");
const chatBar1 = document.getElementById("chatBar1");
const chatBar2 = document.getElementById("chatBar2");
const chatBar3 = document.getElementById("chatBar3");
const chatContent1 = document.getElementById("chatContent1");
const chatContent2 = document.getElementById("chatContent2");
const chatContent3 = document.getElementById("chatContent3");
const MessageContainer = document.getElementsByClassName("MessageContainer");



function deezToggle(){
    chatName.innerHTML = "Deez";
    chatBox0.style.display="none";
    chatBox1.style.display="block";
    chatBox2.style.display="none";
    chatBox3.style.display="none";
    chatBar1.style.display="block";
    chatBar2.style.display="none";
    chatBar3.style.display="none";
}

function ligmaToggle(){
    chatName.innerHTML = "Ligma";
    chatBox0.style.display="none";
    chatBox1.style.display="none";
    chatBox2.style.display="block";
    chatBox3.style.display="none";
    chatBar1.style.display="none";
    chatBar2.style.display="block";
    chatBar3.style.display="none";
}

function sugondeseToggle(){
    chatName.innerHTML = "Sugondese";
    chatBox0.style.display="none";
    chatBox1.style.display="none";
    chatBox2.style.display="none";
    chatBox3.style.display="block";
    chatBar1.style.display="none";
    chatBar2.style.display="none";
    chatBar3.style.display="block";
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
