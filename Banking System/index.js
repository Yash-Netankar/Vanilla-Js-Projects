let account_form = document.getElementById("account_form");
let uname = document.getElementById("name");
let pass = document.getElementById("pass");
let acc_type = document.getElementById("acc_type");
let opening_balance = document.getElementById("opening_balance");
let error = document.getElementById("error_div");

// creating the account
account_form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (uname.value.length !== 0) {
        if (pass.value.length >= 5) {
            if (acc_type.value === "Savings" || acc_type.value === "Current") {
                if (opening_balance.value >= 100) {
                    let account = localStorage.getItem("Account");
                    // create new account
                    if (account == null) {
                        let arr = [{
                            name: uname.value,
                            pass: pass.value,
                            balance: opening_balance.value,
                            type: acc_type.value,
                            date: new Date().toDateString()
                        }];
                        localStorage.setItem("Account", JSON.stringify(arr));

                    }
                    else {
                        error.innerText = "Your Account Already Exists. Maybe With Another Name";
                    }
                }
                else error.innerText = "Opening Balance Should Be Atleast 1000rs!!";
            }
            else error.innerText = "Enter Account Type!!";
        }
        else error.innerText = "Enter Strong Password!!";
    }
    else error.innerText = "Please Enter Valid Name!!";
})

let getData = () => {
    fetch("https://api.github.com/users").then(res => {
        return res.json();
    }).then(data => {
        data.forEach(element => {
            console.log(`My Name is ${element.login}`);
            console.log(`Follow Me By Clicking: ${element.url}`)
        });
    })
}
console.log("Getting data")
getData()
console.log("Got data")