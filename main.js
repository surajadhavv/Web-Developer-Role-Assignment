

// --------------------- Styling Updates on Radio Button Checked -------------------------- //

// Get all radio buttons with the name "customRadioButton"
const radioButtons = document.querySelectorAll('input[name="customRadioButton"]');

// Function to update and remove styling based on radio button check
function updateBoxStyle() {
  const selectedRadioBtn = document.querySelector('input[name="customRadioButton"]:checked').value;

  const box1 = document.getElementById("onePair");
  const box2 = document.getElementById("twoPair");
  const box3 = document.getElementById("threePair");

  resetBoxStyles(box1);
  resetBoxStyles(box2);
  resetBoxStyles(box3);

  const selectedBox = document.getElementById(selectedRadioBtn);
  if (selectedBox) {
    selectedBox.style.height = "161.78px";
    selectedBox.style.background = "#F4FBF9";
    selectedBox.style.border = "0.904px solid #007F61";
    selectedBox.style.cssText = "font-family: Inter ";
    selectedBox.classList.add("selected");
  
    // Apply font-family to all child elements within the selected box
    const childElements = selectedBox.querySelectorAll('*');
    childElements.forEach((child) => {
      child.style.cssText = "font-family: Inter !important;";
    });
  }
}

// Function to reset stylling of unselected box
function resetBoxStyles(box) {
  if (box) {
    box.style.height = "74.11px";
    box.style.background = "#FFFF";
    box.style.fontFamily = "Metropolis-Medium";
    box.style.border = "0.904px solid #C8C8C8"
    box.classList.remove("selected");

    // Reset font-family for all child elements within the box
    const childElements = box.querySelectorAll('*');
    childElements.forEach((child) => {
      child.style.fontFamily = "Metropolis-Medium";
    });
  }
}

// Add event listener to each radio button in custom price areas
radioButtons.forEach((radio) => {
  radio.addEventListener("change", updateBoxStyle);
});


// --------------------- Visibility Toggle on Radio Selection -------------------------- //

const customParentDivs = document.querySelectorAll(".customPriceArea"); // Parent containers
const customChildDivs = document.querySelectorAll(".grid-container"); // Child containers

// Function to handle the radio button change event and toggle visibility
function handleCustomRadioChange(event) {
  // Hide all child containers
  customChildDivs.forEach((childDiv) => {
    childDiv.style.opacity = "0";
  });

  // Get the checked parent container
  const checkedParentDiv = event.target.closest(".customPriceArea");

  // If a parent container is checked, display its child container
  if (checkedParentDiv) {
    const childDiv = checkedParentDiv.querySelector(".grid-container");
    if (childDiv) {
      childDiv.style.opacity = "1";
    }
  }
}

// Add event listener to each radio button in custom price areas
customParentDivs.forEach((parentDiv) => {
  const radioButton = parentDiv.querySelector('input[type="radio"]');
  radioButton.addEventListener("change", handleCustomRadioChange);
});


// --------------------- Initial Setting To Make Second Box Selected-------------------------- //

window.addEventListener("load", function () {
  // Initial setting for selected box
  updateBoxStyle();
   // Initial update default radio box
  const initiallyCheckedRadio = document.querySelector('.customPriceArea input[type="radio"]:checked');
  handleCustomRadioChange({ target: initiallyCheckedRadio });
});

