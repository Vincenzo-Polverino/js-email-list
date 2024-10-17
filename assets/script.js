
const email_listEl = document.querySelector('.email_list')
const buttonEl = document.querySelector('.btn')


function regenerate() {

    email_listEl.innerHTML = '';



    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                const list_item = document.createElement('li');
                list_item.textContent = response.data.response;
                email_listEl.appendChild(list_item);
            })
            .catch(error => console.error('Errore:', error));
    }
}
buttonEl.addEventListener('click', regenerate);