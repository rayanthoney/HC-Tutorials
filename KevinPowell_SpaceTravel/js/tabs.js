const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabList.addEventListener('keydown', (e) => {
  const keydownLeft = 37
  const keydownRight = 39

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    console.log('tabs')
  }

  // if the right key is pushed, move to the next tab on the right

  // if the left key is pushed, move to the next tab on the left
})
