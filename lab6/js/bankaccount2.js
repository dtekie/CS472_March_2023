class BankAccount {
    #name;
    #balance;
	static accountInfoList = [];
	constructor(name, deposit) {
		this.#name = name;
		this.#balance = deposit;
	}
	
	deposit(amount) {
		this.#balance += amount;
	}
	
	debit(amount) {
		if (this.#balance < amount) {
			throw new Error("Insufficient balance");
		}
		this.#balance -= amount;
	}
	
	get name() {
		return this.#name;
	}
	
	get balance() {
		return this.#balance;
	}
	
	static createAccount() {
		const name = document.getElementById("nameInput").value;
		const deposit = parseFloat(document.getElementById("depositInput").value);
		const account = new BankAccount(name, deposit);
		BankAccount.accountInfoList.push(account);
		return account;
	}
	
	static displayAccounts() {
		let accounts = "";
		for (const account of BankAccount.accountInfoList) {
			accounts += account.name + " - " + account.balance.toFixed(2) + "\n";
		}
		document.getElementById("accountList").textContent = accounts;
	}
}

// BankAccount.accountInfoList = [];

function createAccount() {
	const account = BankAccount.createAccount();
	BankAccount.displayAccounts();
	document.getElementById("nameInput").value = "";
	document.getElementById("depositInput").value = "";
	return account;
}

function depositOrDebit(type) {
	const accountsDropdown = document.getElementById("accountsDropdown");
	accountsDropdown.innerHTML = "";
	for (const account of BankAccount.accountInfoList) {
		const option = document.createElement("option");
		option.value = account.name;
		option.textContent = account.name + " - " + account.balance.toFixed(2);
		accountsDropdown.appendChild(option);
	}
	document.getElementById("amountInput").value = "";
	document.getElementById("transactionType").value = type;
	document.getElementById("transactionTitle").textContent = type.charAt(0).toUpperCase() + type.slice(1);
	document.getElementById("submitTransactionButton").disabled = true;
	document.getElementById("transactionPage").style.display = "block";
}

function submitTransaction() {
	const accountsDropdown = document.getElementById("accountsDropdown");
	const amountInput = document.getElementById("amountInput");
	const accountName = accountsDropdown.value;
    const amount = parseFloat(amountInput.value);
    const type = document.getElementById("transactionType").value;
    const account = BankAccount.accountInfoList.find(acc => acc.name === accountName);
    if (type === "deposit") {
    account.deposit(amount);
    } else if (type === "debit") {
    account.debit(amount);
    }
    BankAccount.displayAccounts();
    closeTransactionPage();
    }
    function closeTransactionPage() {
        document.getElementById("transactionPage").style.display = "none";
        }
        
        // create a new account object and store it in the BankAccount class
        function createAccount() {
        const account = BankAccount.createAccount();
        BankAccount.displayAccounts();
        document.getElementById("nameInput").value = "";
        document.getElementById("depositInput").value = "";
        return account;
        }
        
        // function to open deposit or debit transaction page
        function depositOrDebit(type) {
        const accountsDropdown = document.getElementById("accountsDropdown");
        accountsDropdown.innerHTML = "";
        for (const account of BankAccount.accountInfoList) {
        const option = document.createElement("option");
        option.value = account.name;
        option.textContent = account.name + " - " + account.balance.toFixed(2);
        accountsDropdown.appendChild(option);
        }
        document.getElementById("amountInput").value = "";
        document.getElementById("transactionType").value = type;
        document.getElementById("transactionPage").style.display = "block";
        }
        
        // function to close deposit or debit transaction page
        function closeTransactionPage() {
        document.getElementById("transactionPage").style.display = "none";
        }
        
