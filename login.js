const accounts = document.querySelectorAll('.account a');
const logoContainer = document.querySelector('.esquerda');

accounts.forEach(account => {
  account.addEventListener('click', function(e) {
    e.preventDefault();
    const link = this.getAttribute('href');
    const nome = this.dataset.nome; 

    logoContainer.innerHTML = `<h1>Bem-vindo, ${nome}!</h1>`;

    accounts.forEach(acc => {
      if(acc !== this){
        acc.parentElement.classList.add('hidden');
      }
    });

    this.parentElement.classList.add('up');

    setTimeout(() => {
      window.location.href = link;
    }, 6000);
  });
});