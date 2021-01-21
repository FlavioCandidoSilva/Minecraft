var buttonPt = document.querySelector(".button_pt");
var modalPt = document.querySelector(".pt_br");


var buttonEn = document.querySelector(".button_en");
var modalEn = document.querySelector(".en_usa")

buttonPt.addEventListener("click", () => {
    modalEn.classList.add("disabled")
    modalPt.classList.remove("disabled")
});

buttonEn.addEventListener("click", () => {
    modalPt.classList.add("disabled")
    modalEn.classList.remove("disabled")
});

