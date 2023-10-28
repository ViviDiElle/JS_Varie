//Challenge 1 - When clicking this button, alert "Hooray!"
document.getElementById("special-button").addEventListener("click", function() {
  alert("Hooray!");
});

/*
Perché usare una funzione e non direttamente ALERT?

Buona domanda! La ragione per cui usiamo una funzione invece di chiamare direttamente `alert()` è a causa di come funzionano gli eventi in JavaScript.

Quando aggiungi un "event listener" a un elemento con `addEventListener()`, il secondo argomento che passi deve essere una funzione. Questa funzione viene chiamata ogni volta che l'evento si verifica. In questo caso, l'evento è un click.

Se scrivessi solo `alert("Hooray!")` senza la funzione, l'alert verrebbe mostrato immediatamente quando il codice viene eseguito, non quando l'elemento viene cliccato. Questo perché `alert("Hooray!")` è una chiamata alla funzione `alert()`, non una definizione di funzione.

Invece, quando passi una funzione come `function() { alert("Hooray!"); }`, stai dando a `addEventListener()` le istruzioni su cosa fare quando l'evento si verifica (in questo caso, mostrare un alert). Questa funzione non viene eseguita fino a quando l'evento non si verifica.

*/

//Challenge 2

document.getElementById("password-form").addEventListener("submit", function(event) {
  // Prevenire l'azione di default del form (l'invio del form)
  event.preventDefault();
  
  // Selezionare l'input della password e ottenere il suo valore
  let password = document.getElementById("password-input").value;
  
  // Mostrare un alert con il valore dell'input della password
  alert("You entered your supersecret password: " + password);
});


//Challenge 3 - When submitting the form, alert the value of the username and email inputs

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email-input").value;
    let username = document.getElementById("username-input").value;

    alert("You entered your email " + email + " and your username " + username);
  });
  