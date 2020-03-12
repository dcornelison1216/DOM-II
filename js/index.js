// 1. mouseover (make content images 1% larger when mouse passes over)
const images = document.querySelectorAll('img')

for(let i = 1; i < images.length; i++) {
  images[i].addEventListener('mouseover', event => {
    images[i].style.maxWidth = '101%'
  })
}

// 2. mouseout (return content images to previous size when mouse leaves)
for(let i = 1; i < images.length; i++) {
  images[i].addEventListener('mouseout', event => {
    images[i].style.maxWidth = '100%'
  })
}

// keydown (switch content images around when key is pressed) (would like to make this a specific key)
let tempImgArr = [];
for(let i = 1; i < images.length; i++) {
  tempImgArr[i-1] = images[i].src;
}



// wheel



// drag / drop



// load



// focus



// resize



// scrol



// select



// dblclick



// nest two similar events and prevent the event propagation



// stop nav items from refreshing page using preventDefault()



// stretch work
// https://github.com/dcornelison1216/DOM-II/tree/master/stretch-assignment
