// import $ from 'jquery';




// $(document).ready(function () {
//     $('button').click(function () {
//       alert('Button clicked!');
//       console.log($);
//     });
//   });
  
  class ux {
    constructor() {
      this.button = document.querySelector('#btn');
      this.button.addEventListener('click', this.handleClick);
    }

    clickME(){
       // alert('Button clicked using vanilla JavaScript!');
       this.button.addEventListener('click',function () {
            alert('Button clicked using vanilla JavaScript!');
            console.log(this);
          });
    }
  }


  let boton = new ux();
  boton.clickME();

 