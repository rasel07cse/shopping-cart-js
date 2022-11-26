function UpdateCaseNumber(Isincrease) {
    const caseNumberField = document.getElementById('BpField');
    const caseNumberFieldString = caseNumberField.value;
    const caseNumberFields = parseInt(caseNumberFieldString);

    let NewCaseNumber;

    if (Isincrease === true) {
        NewCaseNumber = caseNumberFields + 1;
    }
    else {
        NewCaseNumber = caseNumberFields - 1
    }

    caseNumberField.value = NewCaseNumber;
    return NewCaseNumber;
}

function totalPrices(NewCaseNumber) {
    const caseTotalPrice = NewCaseNumber * 59;
    const CaseTotalElement = document.getElementById('totalPrice');
    CaseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('BpBtnPls').addEventListener('click', function () {
    const NewCaseNumber = UpdateCaseNumber(true);

    totalPrices(NewCaseNumber);
})
document.getElementById('BpBtnMns').addEventListener('click', function () {
    const NewCaseNumber = UpdateCaseNumber(false);

    totalPrices(NewCaseNumber);
})

