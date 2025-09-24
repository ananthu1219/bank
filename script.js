    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginTab.addEventListener("click", () => {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
      loginTab.classList.add("text-blue-600", "border-b-2", "border-blue-600", "font-semibold");
      signupTab.classList.remove("text-blue-600", "border-b-2", "border-blue-600", "font-semibold");
      signupTab.classList.add("text-gray-600");
    });

    signupTab.addEventListener("click", () => {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      signupTab.classList.add("text-blue-600", "border-b-2", "border-blue-600", "font-semibold");
      loginTab.classList.remove("text-blue-600", "border-b-2", "border-blue-600", "font-semibold");
      loginTab.classList.add("text-gray-600");
    });

    function signup() {
      let username = document.getElementById('usernames').value;
      let accountno = document.getElementById('accountNumbers').value;
      let password = document.getElementById('passwords').value;
    
      let detailObj = {
        username: username,
        accountno: accountno,
        password: password
      };
    
      // Check if "BankUser" already exists
      let existing = localStorage.getItem('BankUser');
    
      if (existing) {
        // If exists, parse it
        let existingObj = JSON.parse(existing);
    
        if (
          existingObj.username === username &&
          existingObj.accountno === accountno &&
          existingObj.password === password
        ) {
          alert('User already exists');
          return;
        }
      }
    
      // If no user or different, save new one
      localStorage.setItem('BankUser', JSON.stringify(detailObj));
      alert('SignUp Success');
    }
    
    
    function login(){

    }
    