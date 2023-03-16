
    const select = document.querySelector('select');
    const para = document.querySelector('p');

    select.addEventListener('change', setweather);

    function setweather(){
        const choice = select.value;

        switch(choice){
            case 'sunny':
                para.textContent = "Sunny"
                break;
            case 'rainy':
                para.textContent = "Rain"
                break;
            case 'snowing':
                para.textContent = "Snowing"
                break;
            case 'overcast':
                para.textContent = "Overcast"
                break;
            default:
                para.textContent = ""
        }
    }

/*
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
    } */