
    const select = document.querySelector('select');
    const para = document.querySelector('p');

    select.addEventListener('change', setweather);

    function setweather(){
        const choice = select.value;

        if (choice === 'sunny'){
            para.textContent = "It's sunny day"
        } else if (choice === "rainy"){
            para.textContent = "It's rainy day"
        } else if (choice === "snowing"){
            para.textContent = "It's snowing day"
        } else if (choice === "overcast"){
            para.textContent = "Sky is grey"
        } else {
            para.textContent = ""
        }
    }