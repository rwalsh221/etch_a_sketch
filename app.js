//*************************************************************************************************************
// DOM VARIABLES ************************
let etchContainer = document.querySelector('.etch__container');

// takes grid size prompt from user
let userPrompt = function () {
  document.querySelector('.etch__container').innerHTML = '';

  let userGridSize;
  userGridSize = prompt('Please enter the size of the grid you would like');

  // prompt returns string Number() convertes it to a number.
  let etchSize = Number(userGridSize) * Number(userGridSize);

  document.querySelector(
    '.etch__container'
  ).style.cssText = `grid-template-columns: repeat(${userGridSize}, 1fr); grid-template-rows: repeat(${userGridSize}, 1fr);`;

  for (i = 1; i <= etchSize; i++) {
    let createGrid = document.createElement('div');
    //ADDS HTML CLASS TO NEW DIV
    createGrid.classList.add('etch_grid');
    createGrid.setAttribute('id', `iden-${i}`);
    createGrid.setAttribute('onmouseover', 'mouseOver(this.id)');
    etchContainer.appendChild(createGrid);
  }
};

reset = function () {
  let resetGrid = document.querySelectorAll('.etch_grid');

  resetGrid.forEach((Element) => {
    document.getElementById(Element.id).style.backgroundColor =
      'rgb(237, 226, 158)';
    document.getElementById(Element.id).style.opacity = '1';
  });
};

mouseOver = function (id) {
  const randomColor1 = Math.floor(Math.random() * 255) + 1;
  const randomColor2 = Math.floor(Math.random() * 255) + 1;
  const randomColor3 = Math.floor(Math.random() * 255) + 1;

  if (
    document.getElementById(id).getAttribute('style') == null ||
    document.getElementById(id).getAttribute('style') ==
      'background-color: rgb(237, 226, 158); opacity: 1;'
  ) {
    document.getElementById(
      id
    ).style.backgroundColor = `rgba(${randomColor1},${randomColor2},${randomColor3})`;
    document.getElementById(id).style.opacity = 1;
  } else if (document.getElementById(id).style.opacity > 0) {
    document.getElementById(id).style.opacity -= 0.1;
  }
};
