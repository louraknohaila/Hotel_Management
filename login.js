function registerUser() {
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Récupère les utilisateurs existants depuis localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const userExists = registeredUsers.some(a => a.username === username && a.password === password);

    if (userExists) {
        alert('Utilisateur déjà enregistré. Veuillez choisir un autre nom d\'utilisateur.');
    } else {
      
        registeredUsers.push({ username, password });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        alert('Inscription réussie. Vous pouvez maintenant vous connecter.');
    }
}

function loginUser() {
    const username = document.getElementById('usern').value;
    const password = document.getElementById('pwd').value;

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Vérifie si l'utilisateur existe dans la liste des utilisateurs enregistrés
    const userExists = registeredUsers.some(a => a.username === username && a.password === password);

    if (userExists) {
        alert('Connexion réussie. Bienvenue, ' + username + '!');
    } else {
        alert('Identifiants incorrects. Veuillez vous inscrire d\'abord.');
    }
}

   
    
    
    function generateTableRows() {
        console.log('avant json !')
        try {
          const information = JSON.parse(localStorage.getItem('information')) || [];
          console.log('Avant de chercher tbody');
          const tbody = document.querySelector('.tb');
          console.log(tbody);
          
          information.forEach(item => {
             const newRow = document.createElement('tr');
             newRow.innerHTML = `
                <td>${item.emails}</td>
                <td><span class="price">$${item.nbr1}</span></td>
                <td><span class="price">$${item.nbr2}</span></td>
                <td><span class="count">${item.nbr3}</span></td>
             `;
             tbody.appendChild(newRow);
          });
       } catch (error) {
          console.error('Une erreur s\'est produite :', error);
       }
      }     
    
      document.addEventListener('DOMContentLoaded', function() {
      let res = document.querySelector('#res');
      res.addEventListener('click',function(){
          let emails = document.querySelector('#eml').value;
          let nbr1 = document.querySelector('#nbr1').value;
          let nbr2 = document.querySelector('#nbr2').value;
          let nbr3 = document.querySelector('#nbr3').value;
  
          const information = JSON.parse(localStorage.getItem('information')) || [];
          nbr3 = parseInt(nbr3) + 100;
          information.push({ emails, nbr1 , nbr2 , nbr3 });
          localStorage.setItem('information', JSON.stringify(information));
          console.log('correct !! ');
          generateTableRows();
      
      })
    });