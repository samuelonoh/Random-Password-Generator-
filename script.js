const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
    "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?","/"
];


document.getElementById('mode-toggle').addEventListener('change', (event) => {
    document.body.classList.toggle('light-mode', event.target.checked);
});



let randomPasswordOne = document.getElementById("random-one")
let randomPasswordTwo = document.getElementById("random-two")
isLegnthy = 15

function generateRandomPassword() {
    randomPasswordOne.textContent = '';
    randomPasswordTwo.textContent = '';

    for (let i = 0; i < 16; i++) {
        let random1 = characters[Math.floor(characters.length * Math.random())];
        let random2 = characters[Math.floor(characters.length * Math.random())];
        console.log(random1 + "..........." + random2);
        randomPasswordOne.textContent += random1;
        randomPasswordTwo.textContent += random2;
    }
}

const copy = document.querySelectorAll(".copy"); 

for (const copied of copy) { 
  copied.onclick = function() { 
    document.execCommand("copy"); 
  };  
  copied.addEventListener("copy", function(event) { 
    event.preventDefault(); 
    if (event.clipboardData) { 
      event.clipboardData.setData("text/plain", copied.textContent);
      console.log(event.clipboardData.getData("text"))
      alert("Hi there! \n You copied a random password: " + copied.textContent)
    };
  });
};