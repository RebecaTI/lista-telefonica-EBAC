const btnAddNewContact = document.querySelector('#js-btn-add-new-contact');
const nameInput = document.querySelector('#js-name-input');
const numberInput = document.querySelector('#js-number-input');
const cancelBtn = document.querySelector('#js-cancel-add-new-contact');
const phoneBookForm = document.querySelector('#js-phone-book-form');
const phoneBookList = document.querySelector('#js-phone-book-list');
const addNewContact = document.querySelector('#js-add-number');
const contactAndNumber = document.querySelector('.phone__number');

// ICONS
const favoriteIconBtn = document.querySelectorAll('.favorite__number');
const blockIconBtn = document.querySelectorAll('.blocked__number');
const removeIconBtn = document.querySelectorAll('.remove__number');

function removeItem(){
  document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
  
    if(targetEl.classList.contains('remove__number')){
      Swal.fire({
        title: "Tem certeza que deseja remover?",
        text: "Essa ação será PERMANENTE!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          parentEl.remove();
        }
       });
    }
  });
}

function addFormData(){
  phoneBookForm.addEventListener("click", (e) => {
    e.preventDefault();
      // Pega os dados dentro do input
      const inputName = nameInput.value;
      const inputNumber = numberInput.value;
  
    if(inputName && inputNumber){
      saveContactData({
        name:inputName, 
        number:inputNumber,
      });
      nameInput.value = '';
      numberInput.value = '';
    }
  });
  
  const saveContactData = (data) => {
  
    // Criar as div onde os dados vao entrar
    const bookNumberList = document.createElement('div');
    bookNumberList.classList.add('phone__number');
  
    const nameList = document.createElement('p');
    nameList.classList.add('name');
    nameList.innerText = data.name;
    bookNumberList.appendChild(nameList);
  
    const numberList = document.createElement('p');
    numberList.classList.add('number');
    numberList.innerText = data.number;
    bookNumberList.appendChild(numberList);
  
    const iconFavorite = document.createElement('button');
    iconFavorite.classList.add('favorite__number');
    iconFavorite.innerHTML = '<i class="fa-solid fa-star"></i>';
    bookNumberList.appendChild(iconFavorite);
  
    const iconBlocked = document.createElement('button');
    iconBlocked.classList.add('blocked__number');
    iconBlocked.innerHTML = '<i class="fa-solid fa-ban"></i>';
    bookNumberList.appendChild(iconBlocked);
  
    const iconRemove = document.createElement('button');
    iconRemove.classList.add('remove__number');
    iconRemove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    bookNumberList.appendChild(iconRemove);
  
    phoneBookList.appendChild(bookNumberList);
  };
}

function openAddNewContact(){
  btnAddNewContact.addEventListener('click', (e) => {
    e.preventDefault();
  
    removeHide();
    addHide();
  });
  
  function removeHide(){
    if(cancelBtn.classList.contains('hide') && phoneBookForm.classList.contains('hide')){
      cancelBtn.classList.remove('hide');
      phoneBookForm.classList.remove('hide');
      addNewContact.classList.add('hide');
    }
  }
  
  function addHide(){
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if(!cancelBtn.classList.contains('hide') && !phoneBookForm.classList.contains('hide')){
        cancelBtn.classList.add('hide');
        phoneBookForm.classList.add('hide');
        addNewContact.classList.remove('hide');
  
      }
    })
  }
}

removeItem()
addFormData();
openAddNewContact();


//ESSE CODIGO ESTA COM DEFEITO
function applyFavoriteOrBlocked(){
  document.addEventListener('click', (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');

  if(targetEl.classList.contains('favorite__number')){
    parentEl.classList.toggle('favorite')
  }

  if(targetEl.classList.contains('blocked__number')){
    parentEl.classList.toggle('blocked')
  }
});
}
applyFavoriteOrBlocked();

//-------------------------------