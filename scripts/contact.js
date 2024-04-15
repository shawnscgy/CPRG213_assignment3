// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", replaceContent);
function replaceContent() {
  let mainElement = document.getElementById("contact-page");
  mainElement.innerHTML = "Thank you for your message!";
  // mainElement.style.fontSize = "24px";
  mainElement.classList.add("large-text");
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
