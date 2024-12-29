const convertBtn = document.querySelector("#convert-btn");
const numberInput = document.querySelector("#number");
const output = document.querySelector("#output");

convertBtn.addEventListener("click", () => {
  const number = numberInput.value.trim(); 
  conditionCheck(number);
});

const convertToRoman = (number) => {
  let romanString = '';
  const arrayOfObjects = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' }
  ];

  for (let i = 0; i < arrayOfObjects.length; i++) {
    while (number >= arrayOfObjects[i].arabic) {
      number -= arrayOfObjects[i].arabic;
      romanString += arrayOfObjects[i].roman;
    }
  }
  return romanString;
};

const conditionCheck = (input) => {
  const number = Number(input); 

  if (input === "") { 
    output.innerText = "Please enter a valid number";
  } else if (isNaN(number)) {  
    output.innerText = "Please enter a valid number";
  } else if (number < 1) { 
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const romanString = convertToRoman(number);
    output.innerText = romanString;
  }
};
