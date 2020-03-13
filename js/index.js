// constants used throughout code
const header = document.querySelector('header')
const images = document.querySelectorAll('img')
const navItems = document.querySelectorAll('a')
  // print constants
  console.log('header', header)
  console.log('images', images)
  console.log('navItems', navItems)

// 1. keydown (switch content images when 'b' and 'v' keys are pressed
document.addEventListener('keydown', function(event) {
  // switch images if 'b' key is pressed && switch images back to normal if 'v' key is pressed
  if(event.which == '66') {
    images[0].src = 'img/destination.jpg'
    images[1].src = 'img/fun.jpg'
    images[2].src = 'img/adventure.jpg'
    images[3].src = 'img/fun-bus.jpg'
  }
  else if(event.which == '86') {
    images[0].src = 'img/fun-bus.jpg'
    images[1].src = 'img/adventure.jpg'
    images[2].src = 'img/fun.jpg'
    images[3].src = 'img/destination.jpg'
  }
})

// 2. mouseenter (slightly enlarge images when mouse passes over them)
// also 3. mouseleave (return images to original size when mouse is no longer hovering)
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)'
    image.style.transition = 'all 0.2s'
  })
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)'
  })
})
// prevent images from covering the nav menu
header.style.zIndex = 1;

// 4. dblclick ()
const funBus = document.createElement('img')
funBus.src = 'img/funbusluggage.jpg'
funBus.style.width = '50px'
funBus.style.borderRadius = '15px'
console.log(funBus)
const navContainer = document.querySelector('.nav-container')
const funBusText = document.querySelector('h1')
funBusText.addEventListener('dblclick', () => {
  navContainer.prepend(funBus)
})

// 5. wheel (scale images using mouse wheel)
function zoom(e) {
  e.preventDefault()
  scale += event.deltaY * -0.0006
  scale = Math.min(Math.max(.25, scale), 1.5)
  e.target.style.transform = `scale(${scale})`
}
let scale = 1.2;
images.forEach(image => {
  image.addEventListener('wheel', zoom)
})
// funBusImg.addEventListener('wheel', zoom)
// funBusImg.addEventListener('wheel', (e) => {
//   e.preventDefault()
//   scale += event.deltaY * -0.0006
//   scale = Math.min(Math.max(.25, scale), 3)
//   console.log(scale)
//   funBusImg.style.transform = `scale(${scale})`
// })

// drag / drop



// load



// focus



// resize



// scrol



// select




// nest two similar events and prevent the event propagation

header.addEventListener('click', () => {
  header.style.background = 'lightblue'
})
navItems.forEach(link => {
  link.addEventListener('click', () => {
    link.style.color = 'darkblue'
    event.stopPropagation();
  })
})

// stop nav items from refreshing page using preventDefault()
navItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
  })
})


// stretch work
// https://github.com/dcornelison1216/DOM-II/tree/master/stretch-assignment
