// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


document.getElementById('promiseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = this.delay.value;
    const state = document.querySelector('input[name="state"]:checked').value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
    .then((delay) => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`
        });
    })
    .catch((delay) => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`
        });
    });
});
