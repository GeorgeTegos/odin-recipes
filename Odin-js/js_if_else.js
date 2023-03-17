
    const select = document.querySelector('select#weather');
    const para = document.querySelector('p');
    const html = document.querySelector('html');
    const bg = document.querySelector('select#theme');
    
    select.addEventListener('change', setweather);
    
    function update(bgColor,textColor){
        html.style.backgroundColor = bgColor;
        html.style.color = textColor;
    }
    bg.addEventListener('change', () => bg.value === 'black'
    ? update('black','white')
    : update('white','black')
    )

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