class BankAccount {
    constructor(name, deposit) {
      this._name = name;
      this._balance = deposit;
    }
  
    get name() {
      return this._name;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this._balance) {
        throw new Error("Insufficient funds");
      }
      this._balance -= amount;
    }
  
    static accountInfoList = [];
  
    static createAccount() {
      const name = $("#account-name").val().trim();
      const deposit = parseFloat($("#initial-deposit").val());
  
      if (!name || deposit < 0) {
        $("#error-message").text("Please enter a valid name and initial deposit.");
        return;
      }
  
      const account = new BankAccount(name, deposit);
      this.accountInfoList.push(account);
  
      this.displayAccounts();
      this.showAccountDetails(account);
    }
  
    static displayAccounts() {
        let accountList = "";
        for (const account of this.accountInfoList) {
          accountList += `${account.name} (${account.balance.toFixed(2)})\n`;
        }
        $("#account-list").val(accountList);
      }
    
      static showAccountDetails(account) {
        $("#account-name-display").text(account.name);
        $("#account-balance-display").text(account.balance.toFixed(2));
        $("#deposit-amount").val("");
        $("#withdrawal-amount").val("");
        $("#error-message").text("");
      }
    }
    
    $(document).ready(function() {
      $("#account-form").on("submit", function(event) {
        event.preventDefault();
        BankAccount.createAccount();
      });
    
      $("#deposit-button").on("click", function() {
        const amount = parseFloat($("#deposit-amount").val());
        const account = BankAccount.accountInfoList[BankAccount.accountInfoList.length - 1];
        account.deposit(amount);
        BankAccount.showAccountDetails(account);
      });
    
      $("#withdrawal-button").on("click", function() {
        const amount = parseFloat($("#withdrawal-amount").val());
        const account = BankAccount.accountInfoList[BankAccount.accountInfoList.length - 1];
        try {
          account.withdraw(amount);
          BankAccount.showAccountDetails(account);
        } catch (error) {
          $("#error-message").text(error.message);
        }
      });
    });
      