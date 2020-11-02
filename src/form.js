/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-console */

const {form} = document.forms;

function formValue(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  console.log(values);
}

form.addEventListener('submit', formValue);

/////////////////////////////////////////////////////////////////////////////

// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const {form} = document.forms;

// function formValue(event) {
//     event.preventDefault();

//     const values = {};
  
//     for (let field of form) {
//       const {name} = field;

//       if (name) {
//         const {value, type, checked} = field;

//         values[name] = isCheckboxOrRadio(type) ? checked : value;
//       }
//     }

//     console.log(values);
//   }
  
//   form.addEventListener('submit', formValue);

/////////////////////////////////////////////////////////////////////////////

// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const {form} = document.forms;

// function formValue(event) {
//   event.preventDefault();

//   const {elements} = form;
//   const values = {};

//   for (let i = 0; i < elements.length; i += 1) {
//     const formElement = elements[i];
//     const {name} = formElement;

//     if (name) {
//       const {value, type, checked} = formElement;

//       values[name] = isCheckboxOrRadio(type) ? checked : value;
//     }
//   }

//   console.log(values);
// }

// form.addEventListener('submit', formValue);

/////////////////////////////////////////////////////////////////////////////

// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const form = document.getElementById('form');

// function formValue(event) {
//   event.preventDefault();

//   const fields = document.querySelectorAll('input, select, textarea');
//   const values = {};

//   fields.forEach(field => {
//     const {name, value, type, checked} = field;

//     values[name] = isCheckboxOrRadio(type) ? checked : value;
//   });

//   console.log('form', values);

// }

// form.addEventListener('submit', formValue);

