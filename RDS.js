// I will give you morce code in this format, it will be an arrow of morce codes the arrows will be the the dividing part making it key and value give me the final key and value


// {"data":[".","-","-","-","-",".",".","-","-","-","➡➡➡",".","."]}

// {"data":[".",".","-","-","-","-","-","-","-","-","➡➡➡","-"]}

// {"data":["-","-","-",".",".","➡➡➡","-","-","-"]}

// {"data":[".","-","-","-","-","-","-",".",".",".","➡➡➡",".",".",".","-"]}

// {"data":[".",".","-","-","-","➡➡➡",".",".","-","."]}

// {"data":[".",".","-","-","-","-","-",".",".",".","➡➡➡","-",".","."]}

// {"data":["-","-","-","-",".","➡➡➡","-","-",".","-"]}


// .----.....

const data = []

async function getData(index) {
    for (let i = 1; i < index; i++) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Introduce a 3-second delay
        const a = await fetch(`/data?part=${i}`);
        const b = await a.json();

        if (b?.message?.includes("Timeout")) break;

        data.push(b);
    }
}

await getData()

function decryptMorseCode(morseCode) {
  const morseParts = morseCode.split("----");
    console.log(morseCode)
  const result = morseParts?.map((part) => {
    const morseCharacters = part.split(/([.-]{1,5})/).filter(Boolean);

    const textValue = morseCharacters?.map((char) => {
      if (char === '.') return 'E';
      if (char === '-') return 'T';
      return ''; // If there's an unexpected character
    }).join('');

    const numericalValue = morseCharacters?.map((char) => {
      if (char === '.') return 1;
      if (char === '-') return 2;
      return 0; // If there's an unexpected character
    }).reduce((sum, value) => sum * 10 + value, 0);

    return { text: textValue, numerical: numericalValue };
  });

  return result;
}

const obj = {};

function chainCode(data){
    data.map(e => {
        const index = e.data.find(k => k === '➡➡➡')
        const key = decryptMorseCode(e.data.splice(index-1).join(''))
        const value = decryptMorseCode(e.data.splice(0,index).join(''))
        obj[key] = value
    })
}

chainCode()


const m = await fetch('/answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({chaincode: "EERT"}),
  })



const x = await getData()


// .------...
