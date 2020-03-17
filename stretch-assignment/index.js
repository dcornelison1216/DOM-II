const blockList = document.querySelectorAll('.block')
console.log(blockList)

const redBlock = blockList[0]
const blueBlock = blockList[1]
const greenBlock = blockList[2]
const pinkBlock = blockList[3]
const grayBlock = blockList[4]

blockList.forEach(item => {
  item.style.position = 'relative'
  item.style.cursor = 'pointer'
})

blockList.forEach(item => {
  item.addEventListener('mousedown', () => {
    // set start time to the moment block is clicked
    let start = Date.now();
    //set the movement of the block once clicked
    let timer = setInterval(function() {
      // calculate time passed since block was clicked
      let timePassed = Date.now() - start;
      //move block to the right slowly as time passes
      item.style.left = timePassed/ 5 + 'px';
      window.addEventListener('mouseup', () => {
        let endPosition = item.style.left
        clearInterval(timer)
      })
      // set limit to how far block can travel
      if (timePassed > 10000) clearInterval(timer);
      //update position every 20 microseconds
    }, 50);
    console.log(item.style.left)
  })
})
