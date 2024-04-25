/*Updating Menu for Loans.html*/
const updateBox = $("#toBeUpdated");
const level1 = document.getElementById("tableRow1");
const level2 = document.getElementById("tableRow2");
const level3 = document.getElementById("tableRow3");
level1.addEventListener("mouseover", function() {
    updateBox.html("Some starter money in a flash.");
level2.addEventListener("mouseover", function() {
    updateBox.html("A bigger loan with more time for repayment.");
});
level3.addEventListener("mouseover", function() {
    updateBox.html("A major loan designed for start-ups or larger investments.");
});
});
