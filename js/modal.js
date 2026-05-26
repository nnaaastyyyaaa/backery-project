const modal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-button-close');
const openBtn = document.querySelector('.modal-button-open');

const toggleModal = () => modal.classList.toggle('is-hidden');

closeBtn.addEventListener('click', toggleModal);
openBtn.addEventListener('click', toggleModal);
