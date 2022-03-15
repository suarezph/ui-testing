const filterAvailabilityTesting = document.getElementsByClassName('filter-section-availability')
const inputsAvailabilityTesting = filterAvailabilityTesting[0].getElementsByTagName('input')

for (const inputElement of inputsAvailabilityTesting) {
    if(!inputElement.checked) {
        inputElement.click()
    }
}