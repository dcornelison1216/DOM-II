// constants used throughout code
const header = document.querySelector('header')
const images = document.querySelectorAll('img')
const navItems = document.querySelectorAll('a')
const h2List = document.querySelectorAll('h2')
const divs = document.querySelectorAll('div')
  // print constants
  console.log('header', header)
  console.log('images', images)
  console.log('navItems', navItems)
  console.log('h2List', h2List)
  console.log('divs', divs)

// 1.
// keydown (switch content images when 'b' and 'v' keys are pressed
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

// 2 & 3.
// mouseenter (slightly enlarge images when mouse passes over them)
// mouseleave (return images to original size when mouse is no longer hovering)
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

// 4.
// dblclick (add new funbus image to header when 'Fun Bus' is double-clicked)
const funBus = document.createElement('img')
funBus.src = 'img/funbusluggage.jpg'
funBus.style.width = '50px'
funBus.style.borderRadius = '15px'
const navContainer = document.querySelector('.nav-container')
const funBusText = document.querySelector('h1')
funBusText.addEventListener('dblclick', () => {
  navContainer.prepend(funBus)
})

// 5.
// wheel (scale all images using mouse wheel - also works for scroll on trackpad)
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


// 6, 7, 8, 9, 10, & 11.
// 6. dragstart (change opacity of dragged header when drag event starts)
// 7. dragend (change opacity of dragged header back to normal when drag is released)
// 8. dragenter (change border styling of drop target when dragged header enters the drop zone)
// 9. dragover (prevent default handling during drag over so header can be dropped into drop dropTarget)
// 10. dragleave (return styling to normal if dragged header leaves without being dropped)
// 11. drop (change drop target styling and text when element is dropped)

  // SETUP
  // switch original h2 that says "Let's Go! with new draggable div"
const letsGo = document.createElement('div')
letsGo.innerHTML = "<h2 draggable='true'>Drag This Header!<h2>"
h2List[1].style.display = 'none'
const letsGoDiv = divs[2]
letsGoDiv.prepend(letsGo)

  // create drop target and append it to the drag/drop div
const dropTarget = document.createElement('h2')
dropTarget.textContent = "Drop it here!"
dropTarget.style = "border: 1px solid black; width: 50%; text-align: center; padding-top: 1.5rem"
letsGoDiv.appendChild(dropTarget)

  // change opacity of dragged header when drag event starts
letsGo.addEventListener('dragstart', (event) => {
  event.target.style.opacity = '0.2'
})
  //change opacity of dragged header back to normal when drag is released
letsGo.addEventListener('dragend', (event) => {
  event.target.style.opacity = '1'
})
  // change border styling of drop target when dragged header enters the drop zone
dropTarget.addEventListener('dragenter', (event) => {
  event.target.style.border = '3px dotted lightblue'
  event.target.style.color = 'lightblue'
})
  // prevent default handling during drag over event so header can be dropped into drop dropTarget
  // (By default, data/elements cannot be dropped in other elements.)
dropTarget.addEventListener('dragover', (event) => {
  event.preventDefault();
})
  // return styling to normal if dragged header leaves without being dropped
dropTarget.addEventListener('dragleave', (event) => {
  event.target.style.border = '1px solid black'
  event.target.style.color = 'black'

})
  // change drop target styling and text when element is dropped
dropTarget.addEventListener('drop', (event) => {
  event.target.style.border = '3px solid lightblue'
  event.target.style.background = '#FFEBCD'
  event.target.style.color = '#212529'
  event.target.textContent = 'You dropped it like it was hot sand!'
  event.target.style.fontSize = '2.5rem'
})



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
