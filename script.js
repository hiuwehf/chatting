const chatName = document.getElementById("chatNameBar");
const chatBox1 = document.getElementById("chatBox1");
const chatBox2 = document.getElementById("chatBox2");
const chatBox3 = document.getElementById("chatBox3");


function deezToggle(){
    chatName.innerHTML = "Deez";
    chatBox1.style.display="block";
    chatBox2.style.display="none";
    chatBox3.style.display="none";
}

function ligmaToggle(){
    chatName.innerHTML = "Ligma";
    chatBox1.style.display="none";
    chatBox2.style.display="block";
    chatBox3.style.display="none";
    
}

function sugondeseToggle(){
    chatName.innerHTML = "Sugondese";
    chatBox1.style.display="none";
    chatBox2.style.display="none";
    chatBox3.style.display="block";
}
