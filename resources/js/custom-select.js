const customSelect = document.querySelector('.custom-select');
const selectArrow = document.querySelector('.custom-select-arrow');
const selectButton = customSelect.querySelector('.custom-select-button');
const selectDropdown = customSelect.querySelector('.custom-select-dropdown');
const hiddenInput = document.querySelector('#hidden-input');
// Toggle the dropdown when the select button is clicked
selectButton.addEventListener('click', function () {
    customSelect.classList.toggle('active');
    selectArrow.classList.toggle('clicked');
});

// Handle option selection
selectDropdown.addEventListener('click', function (e) {
    if (e.target.classList.contains('custom-select-option')) {
        // Update the select button text with the selected option
        selectButton.textContent = e.target.textContent;
        hiddenInput.value = e.target.getAttribute('data-value');
        customSelect.classList.remove('active');
        selectArrow.classList.remove('clicked');
    }
});

// Close the dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('active');
        selectArrow.classList.remove('clicked');
    }
});