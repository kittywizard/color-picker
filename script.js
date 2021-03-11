let url = 'https://api.noopschallenge.com/hexbot?count=5';

async function getColor(url) {
    try {
        let response = await fetch(url);
        let json = await response.json();
    
        console.log(json);
    }
    catch(err) {
        console.log(err);
    }
}

getColor(url);