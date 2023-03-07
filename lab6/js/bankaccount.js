var accountInfo = [];

var bankApp = (function(){
	var name = "";
	var balance = 0;
	var y;
	
	function showData(){
		var accountListText = "";
		for(let i = 0; i < accountInfo.length; i++){
			accountListText +="Account name: "+accountInfo[i].name +" Balance: "+ accountInfo[i].balance+"\n";
		}
		document.getElementById("ouput").value = accountListText;
		
	}
	
	return{
		createAccount:function(){
			name = document.getElementById("name").value;
			balance = document.getElementById("deposit").value;
			
			accountInfo.push({"name":name, "balance": balance});
			showData();
			document.getElementById("name").value="";
			document.getElementById("deposit").value="";
		}
		
	}
	
})();

document.getElementById("submitbtn").onclick = bankApp.createAccount;
myFunction2();
myFunction3();
document.getElementById("debit").onclick = debit;
document.getElementById("Deposit").onclick = debit2;
document.getElementById("deposit1").onclick = deposit;
document.getElementById("debit4").onclick = deposit2;
document.getElementById("submit1").onclick = handleFormSubmit;
document.getElementById("submit2").onclick = handleAccountAction;

function handleFormSubmit(){
	myFunction()
	popupateAccountDropdown()
	myFunction2();
	showData2();
    
}
function handleAccountAction(){
	myFunction()
	popupateAccountDropdown()
	myFunction3();
	showData2();
    
}


function debit(){
	
	myFunction();
	myFunction2();
	
	popupateAccountDropdown();
	
}

function debit2(){
	
	myFunction();
	myFunction3();
	
	popupateAccountDropdown();
	
}
function showData2(){
	var accountListText = "";
	for(let i = 0; i < accountInfo.length; i++){
		accountListText +="Account name: "+accountInfo[i].name +" Balance: "+ accountInfo[i].balance+"\n";
	}
	document.getElementById("ouput").value = accountListText;
	
}




function popupateAccountDropdown(){
	//document.getElementById("debit").style.display=none;
	var select = document.getElementById("debit3");

for(var i = 0; i < accountInfo.length; i++) {
var opt = accountInfo[i].name;
var el = document.createElement("option");
el.textContent = opt;
el.value = opt;
select.appendChild(el);
}
}

function myFunction() {
	var x = document.getElementById("firstsdiv");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

function myFunction2() {
	var x = document.getElementById("second");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function myFunction3() {
	var x = document.getElementById("third");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function deposit(){
	//let x;
  for(var i = 0; i < accountInfo.length; i++) {
	if(accountInfo[i].name===document.getElementById("debit3").value){
		accountInfo[i]= parseInt(accountInfo[i].balance)+parseInt(document.getElementById("amount").value);
		//var x=parseInt(document.getElementById("amount").value);
		var x=accountInfo[i];
	}
	}
	document.getElementById("amount").value="";
	alert(x + " is Deposited");
}
function deposit2(){
	//let x;
  for(var i = 0; i < accountInfo.length; i++) {
	if(accountInfo[i].name===document.getElementById("debit3").value){
		accountInfo[i]= parseInt(accountInfo[i].balance)-parseInt(document.getElementById("amount1").value);
		var x=parseInt(document.getElementById("amount1").value);
	}
	}
	document.getElementById("amount1").value="";
	alert(x + " is Debited");
}

function showData2(){
	var accountListText = "";
	for(let i = 0; i < accountInfo.length; i++){
		accountListText +="Account name: "+accountInfo[i].name +" Balance: "+ parseInt(accountInfo[i].balance)+"\n";
	}
	document.getElementById("ouput").value = accountListText;
	
}

