function runTest() { 
    return (async function () {
        const sizeBTN = [...document.getElementsByClassName('atc-item-category')]
        let result = true 
        
        if(sizeBTN.length > 0) {
            for(const btn of sizeBTN) {
                const upholBTN = document.getElementsByClassName('atc-item-product visible')
                btn.click()

                for(const btnUP of upholBTN) {
                    if(btnUP.parentElement.style.display != 'none') {
                        btnUP.click()
                        result =  await variantSimulation(result)
                    }
                }
            }
        }
       
        console.warn(result)
    })()

    function variantSimulation(result){
        // theme-original, theme-esports, theme-special
        const themeOriginal = document.getElementsByClassName('theme-special')
        const variantBTN = themeOriginal[0].getElementsByClassName('atc-item-variant visible type-2')
        const variantLength = variantBTN.length

        return new Promise((resolve) => {
            for (var i = 0; i < variantLength; i++) {
                (function(index) {
                    setTimeout(function() { 
                        const variant = variantBTN[index];
                        variant.click()

                        // test msrp, direct and shopify price
                        if(variant.getAttribute('data-msrp') == '' || variant.getAttribute('data-direct') == ''  || variant.getAttribute('data-shopify') == '') {
                            console.error('data-msrp, data-direct, data-shopify', variant.getAttribute('data-product-title'))
                            result = false
                        }

                        // test subimages
                        const subImageParent = document.getElementsByClassName('slick-list')
                        const subImages = subImageParent[0].getElementsByTagName('img')

                        subImageParent[0].style.overflow = 'visible'

                        setTimeout(() => {
                            for(const img of subImages) {
                                if(img.naturalWidth <= 0 && img.naturalHeight <= 0) {
                                    console.error(img.getAttribute('src'), variant.getAttribute('data-product-title'))
                                    result = false
                                }
                            }
                        }, 1000)
                    }, 1500 * index);
                })(i);
            }
            setTimeout(() => resolve(result), (variantLength * 1500) + 500)
            
        });
      }
}

runTest()



/////////////////////// datadog ////////////////////////////


return (async function () {
    const sizeBTN = [...document.getElementsByClassName('atc-item-category')]
    let result = true 
    
    if(sizeBTN.length > 0) {
        for(const btn of sizeBTN) {
            const upholBTN = document.getElementsByClassName('atc-item-product visible')
            btn.click()

            for(const btnUP of upholBTN) {
                if(btnUP.parentElement.style.display != 'none') {
                    btnUP.click()
                    result =  await variantSimulation(result)
                }
            }
        }
    }
    
    return result
})()

function variantSimulation(result){
    // theme-original, theme-esports, theme-special
    const themeOriginal = document.getElementsByClassName('theme-original')
    const variantBTN = themeOriginal[0].getElementsByClassName('atc-item-variant visible type-2')
    const variantLength = variantBTN.length

    return new Promise((resolve) => {
        for (var i = 0; i < variantLength; i++) {
            (function(index) {
                setTimeout(function() { 
                    const variant = variantBTN[index];
                    variant.click()

                    // test msrp, direct and shopify price
                    if(variant.getAttribute('data-msrp') == '' || variant.getAttribute('data-direct') == ''  || variant.getAttribute('data-shopify') == '') {
                        console.error('data-msrp, data-direct, data-shopify', variant.getAttribute('data-product-title'))
                        result = false
                    }

                    // test subimages
                    const subImageParent = document.getElementsByClassName('slick-list')
                    const subImages = subImageParent[0].getElementsByTagName('img')

                    subImageParent[0].style.overflow = 'visible'

                    setTimeout(() => {
                        for(const img of subImages) {
                            if(img.naturalWidth <= 0 && img.naturalHeight <= 0) {
                                console.error(img.getAttribute('src'), variant.getAttribute('data-product-title'))
                                result = false
                            }
                        }
                    }, 1000)
                }, 1500 * index);
            })(i);
        }
        setTimeout(() => resolve(result), (variantLength * 1500) + 500)
    })
}

