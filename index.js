function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var current = document.querySelector('#grand-node')
  while (current.childElementCount != 0) {
    current = current.querySelector('div')
  }
  return current
}
