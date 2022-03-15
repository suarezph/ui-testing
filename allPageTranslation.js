(async function () {
    let parent = document.getElementsByClassName("parent")
    let elements = parent[0].getElementsByTagName("a")
    let result = true 
    
    for (const element of elements) {
        if(element.href != null) {
            let url = new URL(element.href);
            let searchParams = new URLSearchParams(url.search);
            if(!searchParams.has("stop_redirect")) {
                const res = await fetch(element.href)
                console.log(element.href)
                if(res.status === 200) {
                    const html = await res.text()
                    if(html) {
                        if(html.search("translation missing:") != -1) {
                            console.error(element.href)
                            result = false
                        }
                    }
                }
            }
        }
    }
    console.log(result)
})()