
let variable 
window.onerror = function(err) { console.error(variable) }

var checkbox = document.getElementById('filter_srs_collectible')
checkbox.addEventListener('click', function() {
    variable = 'filter_srs_collectible'
    a
})

var checkoutPrice = document.getElementsByClassName('checkout-price')[0].replace(/\D/g, '')


const list = document.getElementsByClassName('line-table')[0].getElementsByClassName('line-item')
let total = []

for(const item of list) {
    const totalItem = item.getElementsByClassName('desc-option')
    console.log(totalItem)
}