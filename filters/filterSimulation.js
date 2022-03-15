function runTest() { 
  return (async function () {
      const defaultValue = document.getElementById('filter_sort_shipping')
      const options = [...document.getElementsByClassName('form-check')]
      let filterInputs = []
      let result = true

      defaultValue.click()
      for(const opt of options) {
        filterInputs.push(opt.getElementsByTagName('input')[0])
      }        

      result = await filterSimulation(result, filterInputs)
    
      console.warn(result)
  })()

  function filterSimulation(result, filterInputs) {
      let inputLength = filterInputs.length

      return new Promise((resolve) => {
          for (var i = 0; i < inputLength; i++) {
              (function(index) {
                  setTimeout(() => {
                      const inputName = filterInputs[index].getAttribute('id')
                      const filtersAvailability = document.getElementsByClassName('filtered-availability')
                      filterInputs[index].click()
                      
                      if(inputName == 'filter_availability_instock') {
                        for(const filter of filtersAvailability) {
                            const value = filter.getAttribute('data-availability')
                            if(value != null  && value != 'instock') {
                                console.error(inputName, filter.getAttribute('data-sku'))
                                result = false
                            }
                        }
                      }

                      window.onerror = function(err) { 
                        console.error(inputName)
                        result = false
                      }
                      
                      setTimeout(() => {
                        filterInputs[index].click()
                      },1000)
                  }, 1500 * index);
                  
              })(i);
          }

        setTimeout(() => resolve(result), (inputLength * 1500) + 200)
      });
    }
}

runTest()


//// DATADOG
return (async function () {
  const defaultValue = document.getElementById('filter_sort_shipping')
  const options = [...document.getElementsByClassName('form-check')]
  let filterInputs = []
  let result = true 

  defaultValue.click()
  for(const opt of options) {
    filterInputs.push(opt.getElementsByTagName('input')[0])
  }        

  result = await filterSimulation(result, filterInputs)
  
  return result
})()

function filterSimulation(result, filterInputs) {
  let inputLength = filterInputs.length

  return new Promise((resolve) => {
      for (var i = 0; i < inputLength; i++) {
          (function(index) {
              setTimeout(() => {
                  const inputName = filterInputs[index].getAttribute('id')
                  const filtersAvailability = document.getElementsByClassName('filtered-availability')
                  filterInputs[index].click()
                
                  if(inputName == 'filter_availability_instock') {
                    for(const filter of filtersAvailability) {
                        const value = filter.getAttribute('data-availability')
                        if(value != null  && value != 'instock') {
                            console.error(inputName, filter.getAttribute('data-sku'))
                            result = false
                        }
                    }
                  }

                  window.onerror = function(err) { 
                    console.error(inputName)
                    result = false
                  }
                  
                  setTimeout(() => {
                    filterInputs[index].click()
                  },1000)
              }, 1500 * index);
              
          })(i);
      }

    setTimeout(() => resolve(result), (inputLength * 1500) + 200)
  });
}


////// TEST Window.error
let variable 
window.onerror = function(err) { console.error(variable) }

var checkbox = document.getElementById('filter_srs_collectible')
checkbox.addEventListener('click', function() {
    variable = 'filter_srs_collectible'
    a
})