$(function(){
  //-----Au Chargement de la page----
  // je stock dans la variable juste prix à trouver par le joueur
  // Je stock dans maxNumber et minNumber le chiffre maximum et minimum à trouver
  var maxNumber = 100;
  var minNumber = 1;
  var price = Math.floor(Math.random() * (maxNumber + 1) + minNumber);// grâce à ce calcil le chiffre sera définis aléatoirement
  console.log(price)
  // je défini une variable counterà 0
  var counter = 0;
  //------ Au click sur le bouton------
  $('#validate').click(function(){
    //a chaque clic sur le bouton #validate j'incrémente de (+1) ma variable counter
    counter++;
    console.log(counter)
    // je récupère la valeur du champs
    // Je stock dans la variable numberPrice la valeur de mon imput #tentacles
    var numberPrice = $('#tentacles').val();
    // Je compare mes 2 chiffres (le vrai prix et la propositon de son utilisateur)
    if (numberPrice == price){
      // si le chiffre numberPrice est égal à price je lui dis bravo dans une alert
      alert('bravo ! Tu as trouvé le juste prix en ' + counter + 'fois');
    }
    else if (numberPrice > price){
      // Ou si numberPrice est supérieur au price
      // j'affiche une alerte avec le message c'est moins
      alert('c\'est moins');
    }
    else {
      // Ou si numberPrice est inférieur au price
      // j'affiche une alerte avec le message c'est plus
      alert('c\'est plus')
    };
  });
});
