const modelBtn = document.querySelector('.model-btn');
const modelBg = document.querySelector('.model-bg');
const closeForm = document.querySelector('.close-form');
const model = document.querySelector('.model');
modelBtn.addEventListener('click', () => {
    modelBg.classList.add('bg-active');
    model.classList.add('model-active');
});

closeForm.addEventListener('click', () => modelBg.classList.remove('bg-active'));