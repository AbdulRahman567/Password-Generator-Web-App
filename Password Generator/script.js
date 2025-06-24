let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let symbols = document.getElementById('symbols');
let numbers = document.getElementById('numbers');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

// Show Input Slider Value
sliderValue.textContent = inputSlider.value;   
inputSlider.addEventListener('input' , ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click' , ()=>{
    passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";

// Function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    
    if (allChars.length === 0) {
        return genPassword; // empty string if no checkbox is selected
    }
    
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}


copyIcon.addEventListener('click' , ()=>{
    if (passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = 'Password Copied';
    }
    setTimeout(()=>{
        copyIcon.innerText = "content_copy"
        copyIcon.title = "";
    },2000)

})


