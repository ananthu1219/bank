function logout(){
    window.location.href = 'index.html';
}

function deposit() {
    let amount = parseFloat(document.getElementById('deposit-amount').value);
    let accountno = document.getElementById('deposit-account-number').value;

    if (!amount || !accountno) {
        alert("Please enter both amount and account number.");
        return;
    }

    // Get logged-in user data
    let logged = JSON.parse(localStorage.getItem('BankUser'));

    if (!logged) {
        alert("No user logged in.");
        return;
    }

    // Check if account number matches
    if (accountno !== logged.accountno) {
        alert("Account number does not match the logged-in user.");
        return;
    }

    // Initialize balance if not present
    if (!logged.balance) logged.balance = 0;

    // Update balance
    logged.balance += amount;

    // Save updated user back to localStorage
    localStorage.setItem('BankUser', JSON.stringify(logged));

    alert(`Successfully deposited $${amount} to account ${accountno}. New balance: $${logged.balance}`);

    // Clear input fields
    document.getElementById('deposit-amount').value = '';
    document.getElementById('deposit-account-number').value = '';
}

function withdraw() {
    let amount = parseFloat(document.getElementById('withdraw-amount').value);
    let accountno = document.getElementById('withdraw-account-number').value;

    if (!amount || !accountno) {
        alert("Please enter both amount and account number.");
        return;
    }

    // Get logged-in user data
    let logged = JSON.parse(localStorage.getItem('BankUser'));

    if (!logged) {
        alert("No user logged in.");
        return;
    }

    // Check if account number matches
    if (accountno !== logged.accountno) {
        alert("Account number does not match the logged-in user.");
        return;
    }

    // Initialize balance if not present
    if (!logged.balance) logged.balance = 0;

    // Check if sufficient balance
    if (amount > logged.balance) {
        alert("Insufficient balance!");
        return;
    }

    // Update balance
    logged.balance -= amount;
    localStorage.setItem('BankUser', JSON.stringify(logged));

    alert(`Successfully withdrawn $${amount} from account ${accountno}. New balance: $${logged.balance}`);

    // Clear input fields
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('withdraw-account-number').value = '';
}