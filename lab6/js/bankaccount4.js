$(document).ready(function() {
    $("#account-form").submit(function(event) {
      event.preventDefault();
      BankAccount.createAccount();
    });
  });
  