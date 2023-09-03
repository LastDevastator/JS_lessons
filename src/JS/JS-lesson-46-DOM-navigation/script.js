// console.log(document.documentElement)
// console.log(document.body.childNodes)

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector('#current').parentNode.parentNode) // поиск по айди

// console.log(document.querySelector("[data-current='3']").nextElementSibling) // поиск по маркеру data-

// const bb = document.body.childNodes.forEach(item => {

//   console.log(item)

// })

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }

  console.log(node)

}