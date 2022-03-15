function runTest() { 
    return (async function () {
        const sizeBTN = [...document.getElementsByClassName('atc-item-category')]
        let result = true 
        
        if(sizeBTN.length > 0) {
            const upholBTN = document.getElementsByClassName('atc-item-product visible')
            const theme = document.getElementsByClassName('theme-special')
            sizeBTN[0].click()
            upholBTN[0].click()
            theme[0].click()

            result =  await addToCartSimulation(result)  
            
        } else {
            result = false
        }
       
        console.warn(result)
    })()

    function addToCartSimulation(result){
        const atc = document.getElementsByClassName('btn-cart-add')

        return new Promise((resolve) => {  
            setTimeout(function() { 
                atc[0].click()
                result = true
            }, 2000);
            setTimeout(() => resolve(result), (5000))
            
        });
      }
}

runTest()

///////// DATADOG
return (async function () {
    const sizeBTN = [...document.getElementsByClassName('atc-item-category')]
    let result = true 
    
    if(sizeBTN.length > 0) {
        const upholBTN = document.getElementsByClassName('atc-item-product visible')
        const theme = document.getElementsByClassName('theme-special')
        sizeBTN[0].click()
        upholBTN[0].click()
        theme[0].click()

        result =  await addToCartSimulation(result)  
        
    } else {
        result = false
    }
    
    return result
})()

function addToCartSimulation(result){
    const atc = document.getElementsByClassName('btn-cart-add')

    return new Promise((resolve) => {  
        setTimeout(function() { 
            atc[0].click()
            result = true
        }, 2000);
        setTimeout(() => resolve(result), (5000))
        
    });
}


