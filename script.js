
// fetch('http://localhost:3000/year') 
//   .then(response => response.json()) 
//   .then(data => {
   
//     const year = data.year;
//     document.getElementById('year').textContent = year;  
//   })
//   .catch(error => {
//     console.error('Erreur lors de la récupération de l\'année :', error);
//     document.getElementById('year').textContent = 'Erreur de chargement';
//   });
  


fetch('https://whatyearisit-backend-ashen-six.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });