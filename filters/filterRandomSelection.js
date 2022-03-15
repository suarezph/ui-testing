// global
const body = document.getElementsByTagName('body')

// select related filter
const filterAvailabilityTesting = document.getElementsByClassName('filter-section-availability')
const inputsAvailabilityTesting = filterAvailabilityTesting[0].getElementsByTagName('input')

for (const inputElement of inputsAvailabilityTesting) {
    if(!inputElement.checked) {
        inputElement.click()
    }
}

// scroll from top to bottom
body[0].scrollIntoView({behavior: 'smooth', block: 'end' });


// to randomize the selection of the product
const parentGrid = document.getElementsByClassName('collections-grid')[0]
const itemGrid = parentGrid.getElementsByClassName('grid-obj-wrapper')
const filtered = [...itemGrid].filter(item => item.getClientRects().length > 0)

filtered[Math.floor(Math.random() * filtered.length)].getElementsByTagName('a')[0].click()

