document.addEventListener('DOMContentLoaded', function () {
  let box = document.querySelectorAll('.styledbutton');

  box.forEach(function (styledbutton) {
    styledbutton.addEventListener('click', function () {
      if (styledbutton.style.backgroundColor === 'lightsteelblue') {
        styledbutton.style.backgroundColor = 'yellow';
        styledbutton.style.margin = '2vw';
        console.log('change color');
      } else {
        styledbutton.style.backgroundColor = 'lightsteelblue';
        styledbutton.style.margin = '1vw';
      }
    });
  });
  // let button = document.getElementById('styleButton');

  // button.addEventListener('click', function () {
  //   if (button.style.backgroundColor === 'lightsteelblue') {
  //     button.style.backgroundColor = 'yellow';
  //     button.style.margin = '2vw';
  //   } else {
  //     button.style.backgroundColor = 'lightsteelblue';
  //     button.style.margin = '1vw';
  //   }
  // });
  // let but = this.querySelector('button');
  // but.addEventListener('click', function () {
  //   console.log('wow it is work');
  // });
  // let box = document.querySelectorAll('.box');
  // // Метод forEach может быть полезен в функциях, когда вам нужно выполнить какие-то действия для каждого элемента в массиве внутри функции. Он позволяет избежать явных циклов и сделать код более читаемым и функциональным
  // box.forEach(function (clickbox) {
  //   clickbox.addEventListener('click', function () {
  //     if (clickbox.style.backgroundColor === 'lightblue') {
  //       clickbox.style.backgroundColor = 'pink';
  //       clickbox.style.marginLeft = '2vw';
  //       console.log('pink');
  //     } else {
  //       clickbox.style.backgroundColor = 'lightblue';
  //       clickbox.style.marginLeft = '0vw';
  //       console.log('lightblue');
  //     }
  //   });
  // });
  //   let b1 = document.querySelector('.but1');
  //   let b2 = document.querySelector('.but2');
  //   let b3 = document.querySelector('.but3');
  //   let sections = document.querySelectorAll('.section1, .section2, .section3');
  //   function ShowSection(ourClass) {
  //     sections.forEach(function (section) {
  //       if (section.classList.contains(ourClass)) {
  //         section.classList.add('block');
  //         section.classList.remove('block');
  //       } else {
  //         section.classList.add('none');
  //         section.classList.remove('block');
  //       }
  //     });
  //   }
  //   b1.addEventListener('click', function (ShowSection) {
  //     ShowSection('section2');
  //   });
  //   b2.addEventListener('click', function (ShowSection) {
  //     ShowSection('section3');
  //   });
  //   b3.addEventListener('click', function (ShowSection) {
  //     ShowSection('section1');
  //   });
});
