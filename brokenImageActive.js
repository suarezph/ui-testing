// scroll related
const body = document.getElementsByTagName('body')
const slicks = document.getElementsByClassName('slick-track')

// image related
const parent = document.getElementsByTagName("main")
const imgs = [...parent[0].getElementsByTagName('img')]
const pattern = /^((http|https):\/\/)/;
let result = true 

if(slicks.length > 0) {
  for(const slick of slicks) {
      slick.style.width = "100%"
      slick.style.transform = "none"
  }
}

// scroll from top to bottom
body[0].scrollIntoView({behavior: 'smooth', block: 'end' });

// assertion
for(const img of imgs) {
    if(pattern.test(img.getAttribute('src'))){
        if(img.naturalWidth <= 0 && img.naturalHeight <= 0) {
            console.error(img.getAttribute('src'))
            result = false
        }
    }
}