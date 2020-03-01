// let text = 'hello';

// let p = 5;

// for (t = 0; t < etchSize; t++) {
//     console.log(t);
//   }

// prompt('Please enter the size of the grid you would like');
console.log('its working');

//*************************************************************************************************************
// DOM VARIABLES ************************
let etchContainer = document.querySelector('.etch__container');


// takes grid size prompt from user
let userPrompt = function() {
    
    document.querySelector('.etch__container').innerHTML = '';

    let userGridSize;
    userGridSize = prompt('Please enter the size of the grid you would like');

    // prompt returns string Number() convertes it to a number.
    let etchSize = Number(userGridSize) * Number(userGridSize);

    document.querySelector('.etch__container').style.cssText = `grid-template-columns: repeat(${userGridSize}, 1fr); grid-template-rows: repeat(${userGridSize}, 1fr);`;
    
    for (i = 1; i <= etchSize; i++) {
        // forTest.push(i)
        // console.log(i);
        let createGrid = document.createElement('div');
        //ADDS HTML CLASS TO NEW DIV
        createGrid.classList.add('etch_grid');
        createGrid.setAttribute('id', `iden-${i}`);
        createGrid.setAttribute('onmouseover', 'mouseOver(this.id)')
        etchContainer.appendChild(createGrid);
        // document.querySelector(`.iden-${i}`).style.cssText = `background-color: black;`;
        
        
        // BORDER RADIUS TEST - WORKS KIND OF
        // USED OVERFLOW HIDDEN ON PARENT

    //     if (i === 1) {
    //         createGrid.setAttribute('style', `border-top-left-radius: ${etchSize}rem;`)
    //         console.log('i = 1');
    //         console.log(userGridSize);
    //     } else if (i === Number(userGridSize)) {
    //         createGrid.setAttribute('style', 'border-top-right-radius: 5rem;')
    //         console.log('i = usergridsize');
    //     } else if (i === (etchSize - Number(userGridSize)) + 1) {
    //         createGrid.setAttribute('style', 'border-bottom-left-radius: 5rem;')
    //         console.log('i = working');
    //     } else if (i === etchSize) {
    //         createGrid.setAttribute('style', 'border-bottom-right-radius: 5rem;')
    //         console.log('i = etchsize');
    //     }
    };
};








// mouseOver = function(id) {
//     let randomColor1, randomColor2, randomColor3;
//     let testArr2 = [];

//     randomColor1 = Math.floor(Math.random() * 255) + 1;
//     randomColor2 = Math.floor(Math.random() * 255) + 1;
//     randomColor3 = Math.floor(Math.random() * 255) + 1;
    
//     if(document.getElementById(id).getAttribute("style")==null || document.getElementById(id).getAttribute("style")=="" || document.getElementById(id).getAttribute("style")=="background-color: red;")    {
    
//         document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3});`;

//         // for (i = 0; i <= 1; i = i + 1 / 100) {
//         //     // testArr2.push(i)
//         //     document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3}); opacity: ${i};`;
//         //     // console.log(testArr2);
//         // };
//    }
// };


// mouseOver = function(id) {
//     let randomColor1, randomColor2, randomColor3;
//     let testArr2 = [];

//     randomColor1 = Math.floor(Math.random() * 255) + 1;
//     randomColor2 = Math.floor(Math.random() * 255) + 1;
//     randomColor3 = Math.floor(Math.random() * 255) + 1;
    
//     if(document.getElementById(id).getAttribute("style")==null || document.getElementById(id).getAttribute("style")=="" || document.getElementById(id).getAttribute("style")=="background-color: red;")    {
    
//         for (var i = 0; i < 1; i = i + 0.01) {
//             (function (i) {
//               setTimeout(function () {
//                 testArr2.push(i);
//                 console.log(testArr2);
//                 document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3}); opacity: ${i};`;
//               }, 3000*i);
//             })(i);
            
//           };
//     console.log(randomColor1);
//     randomColor1 - 50;
//     console.log(randomColor1);
//     document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3});`;      
        
//    }
// };


reset = function() {
     let test = document.querySelectorAll('.etch_grid');

     test.forEach(Element => {
         document.getElementById(Element.id).style.backgroundColor = 'rgb(237, 226, 158)';
         document.getElementById(Element.id).style.opacity = '1';
         
     })

     test = [];
 };

 let testArr3 = [];


//  for (var i = 0; i < 5; i++) {
//     (function (i) {
//       setTimeout(function () {
//         testArr3.push(i);
//         console.log(testArr3);
//       }, 3000*i);
//     })(i);
//   };






mouseOver = function(id) {
    
    let testArr2 = [];

    const randomColor1 = Math.floor(Math.random() * 255) + 1;
     const randomColor2 = Math.floor(Math.random() * 255) + 1;
    const randomColor3 = Math.floor(Math.random() * 255) + 1;
    
    if(document.getElementById(id).getAttribute("style")==null || document.getElementById(id).getAttribute("style")=="background-color: rgb(237, 226, 158); opacity: 1;")    {
        
        document.getElementById(id).style.backgroundColor = `rgba(${randomColor1},${randomColor2},${randomColor3})`;
        document.getElementById(id).style.opacity = 1

    } else if (document.getElementById(id).style.opacity > 0) {
        document.getElementById(id).style.opacity -= .1;
        
    } 

};

// for (var i = 0; i < 1; i = i + 0.01) {
//     (function (i) {
//       setTimeout(function () {
//         testArr2.push(i);
//         console.log(testArr2);
//         document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3}); opacity: ${i};`;
//       }, 3000*i);
//     })(i);
    
//   };
// console.log(randomColor1);
// randomColor1 - 50;
// console.log(randomColor1);
// document.getElementById(id).style.cssText = `background-color: rgba(${randomColor1},${randomColor2},${randomColor3});`;    