const chatName = document.getElementById("chatNameBar");
const createContactWindow = document.getElementById("createContactWindow");
const createContactWindowButton = document.getElementById("createContactWindowButton");
const deezContactButton = document.getElementById("deezContactButton");
const homeButton = document.getElementById("homeButton");
const contactName = document.getElementById("contactName");
const contactList = document.getElementById("contactList");
const chatBox0 = document.getElementById("chatBox0");
const chatBox1 = document.getElementById("chatBox1");
const chatBox2 = document.getElementById("chatBox2");
const chatBox3 = document.getElementById("chatBox3");
const chatContainer1 = document.getElementById("chatContainer1");
const chatContainer2 = document.getElementById("chatContainer2");
const chatContainer3 = document.getElementById("chatContainer3");
const chatContent1 = document.getElementById("chatContent1");
const chatContent2 = document.getElementById("chatContent2");
const chatContent3 = document.getElementById("chatContent3");

function createContactWindowToggle(){
    if(createContactWindow.style.display=="none"){
        createContactWindow.style.display = "block"
        createContactWindowButton.style.backgroundColor="#676666";
    }else if(createContactWindow.style.display=="block"){
        createContactWindow.style.display="none";
        createContactWindowButton.style.backgroundColor="#918e8e";
    }
}
function createContact(){
    if(contactName.value != " "){
        const para = document.createElement("button");
        para.className="contact";
        para.style.backgroundColor="#918e8e";
        const node = document.createTextNode(contactName.value);
        para.appendChild(node);
        const element = contactList;
        element.appendChild(para);
    }
}
function deezToggle(){
    chatName.innerHTML = "Deez";
    chatBox0.style.display="none";
    if(chatContainer1.style.display=="none"){
        chatBox0.style.display="none";
        homeButton.style.backgroundColor="#918e8e";
        chatContainer1.style.display="block";
        deezContactButton.style.backgroundColor="#676666";
    }else if(chatContainer1.style.display="block"){
        chatContainer1.style.display="none";
        chatBox0.style.display="block";
        homeButton.style.backgroundColor="#676666";
        deezContactButton.style.backgroundColor="#918e8e"
    }
    
}

document.addEventListener('keydown', function (event){
    if (event.keyCode == 13){
        sendMessage();
    }
})


function sendMessage(){
    if(chatContent1.value != " "){
        const para = document.createElement("p");
        para.className = "messageSend";
        const node = document.createTextNode(chatContent1.value);
        para.appendChild(node);
        const element = chatBox1;
        element.appendChild(para);
        chatContent1.value = ' ';
        para.scrollIntoView();
        setTimeout(recieveMessage,500);
    }else if(chatContent2.value != " "){
        const para = document.createElement("p");
        para.className = "messageSend";
        const node = document.createTextNode(chatContent2.value);
        para.appendChild(node);
        const element = chatBox2;
        element.appendChild(para);
        chatContent2.value = ' ';
        para.scrollIntoView();
        setTimeout(recieveMessage,500);
    }else if(chatContent3.value != " "){
        const para = document.createElement("p");
        para.className = "messageSend";
        const node = document.createTextNode(chatContent3.value);
        para.appendChild(node);
        const element = chatBox3;
        element.appendChild(para);
        chatContent3.value = ' ';
        para.scrollIntoView();
        setTimeout(recieveMessage,500);
    }
}

function recieveMessage(){
    if(chatContainer1.style.display == 'block'){
        const para = document.createElement("p");
        para.className = "messageRecieve";
        const node = document.createTextNode("Hello User");
        para.appendChild(node);
        const element = chatBox1;
        element.appendChild(para);
        chatContent1.value = ' ';
        para.scrollIntoView();
    }else if(chatContainer2.style.display == 'block'){
        const para = document.createElement("p");
        para.className = "messageRecieve";
        const node = document.createTextNode("Hello User");
        para.appendChild(node);
        const element = chatBox2;
        element.appendChild(para);
        chatContent2.value = ' ';
        para.scrollIntoView();
    }else if(chatContainer3.style.display == 'block'){
        const para = document.createElement("p");
        para.className = "messageRecieve";
        const node = document.createTextNode("Hello User");
        para.appendChild(node);
        const element = chatBox3;
        element.appendChild(para);
        chatContent3.value = ' ';
        para.scrollIntoView();
    }
}