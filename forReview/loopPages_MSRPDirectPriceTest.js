(async function () {
    let parent = document.getElementById("products")
    let elements = [...parent.getElementsByTagName("a")]
    let result = true 
    let parser = new DOMParser();

    for (const element of elements) {
        if(element.href != null) {
            let url = new URL(element.href);
            let searchParams = new URLSearchParams(url.search);
            if(!searchParams.has("stop_redirect")) {
                const res = await fetch(element.href)
                console.log(element.href)
                if(res.status === 200) {
                    const html = await res.text()
                    const doc = await parser.parseFromString(html, 'text/html');
                    const parent = doc.getElementsByTagName("main")
                    const elements = [...parent[0].getElementsByTagName("button")]
                    
                    elements.forEach(function(item) {
                    if(item.dataset?.direct != undefined) { // direct to msrp
                        if(item.getAttribute('class').search('atc-item-product') == -1) {
                            if(item.dataset.direct != '') {
                                console.error(element.href, item)
                                result = false
                            }
                        }
                    }
                    })
                }
            }
        }
    }
    console.log(result)
})()