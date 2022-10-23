// Selção de eventos
const generatePassordButton = document.querySelector("#generate-password")
const generatePassordElement = document.querySelector("#generated-password")
// Funções
const getLetterLowCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

const getLetterUpperCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 67));
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "()[]{}/*-+.;.,?:<>!@#$%&*\|§="
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassord = (getLetterLowCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""

    const passwordLength = 10

    const generetors = [
        getLetterLowCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for (i = 0; i < passwordLength; i = i + 4) {
        generetors.forEach(() => {
            const randomValue = generetors[Math.floor(Math.random() * generetors.length)]();
            
            password += randomValue;
        });
    }
    
    password = password.slice(0, passwordLength);
    
    generatePassordElement.style.display = "block"
    generatePassordElement.querySelector("h4").innerText = (password);
};

// Eventos
generatePassordButton.addEventListener("click", () => {
    generatePassord(
        getLetterLowCase, 
        getLetterUpperCase, 
        getNumber,
        getSymbol
    );
});