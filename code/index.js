const CodeRestriction = 'uwfuebq3uwidl'.trim();
let ageButton = document.getElementsByTagName("button")[0];

function getValue() {
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction() {
    let code = getValue();

    if (code == CodeRestriction) {
        alert("!Correct code!")
        location.href="./vip.html"
    } else {
        alert("!Incorrect code!")
    }
}
function displayResult() {
    let result = checkRestriction();
    console.log(result)
    let pTag = document.getElementById("display")
    pTag.textContent = result;
}

ageButton.onclick = displayResult