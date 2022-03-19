// global
const body = document.getElementsByTagName('body')
let result = true // datadog condition

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

// assertion: check if there are broken images
const pattern = /^((http|https):\/\/)/;

for(const filteredElement of filtered) {
    let img = filteredElement.getElementsByTagName('img')
    
    if(pattern.test(img[0].getAttribute('src'))){
        // Image is not set
        if(img[0].getAttribute('src').search('no-image') != -1) {
            console.log(filteredElement.getAttribute('data-sku') || filteredElement.getAttribute('data-order'))
            result = false
        }

        // Image is set but broken in DOM
        if(img.naturalWidth <= 0 && img.naturalHeight <= 0) {
            console.error(img.getAttribute('src'))
            result = false
        }
    }
}

filtered[Math.floor(Math.random() * filtered.length)].getElementsByTagName('a')[0].click()

// collections/titan-series#titan_2020-stealth