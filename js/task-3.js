const userName = document.querySelector("#name-input");
userName.addEventListener ("input", abc);
function abc (event) {
    const textName = document.querySelector("#name-output");
    return textName.textContent = userName.value.trim() ? event.target.value : 'Anonymous';  
    
}



