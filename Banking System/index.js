// form & form attributes
let account_form = document.getElementById("account_form");
let uname = document.getElementById("name");
let pass = document.getElementById("pass");
let acc_type = document.getElementById("acc_type");
let opening_balance = document.getElementById("opening_balance");
let bank_name = document.getElementById("bank_name");
let error = document.getElementById("error_div");

// sounds
let inbox = new Audio("./sass/sounds/inbox.mp3");
let error_sound = new Audio("./sass/sounds/error.mp3");

// debit card atributes
let bank_name_db = document.querySelector(".atm_card .face .row1 .bank_name");
let card_no_db = document.querySelector(".atm_card .face .card_no");
let valid_db = document.querySelector(".atm_card .face .validity .date");
let name_db = document.querySelector(".atm_card .face .name");

// message box (Inbox)
let msg_box = document.querySelector(".msg_box");
let close_btn = document.querySelector(".close_btn");
let messages = document.querySelector(".messages");

// bank names of available banks
let bank_names = ["State Bank Of India", "Punjab National Bank", "Maharashtra Bank", "Axis Bank", "ICICI", "Cosmos Bank", "HDFC", "PM Jan Dhan Yojna"];


// Account Class
class Account {
    constructor() {
        this.acc_no = Account.getAccountNo();
        this.arr = [{
            name: uname.value,
            pass: pass.value,
            balance: opening_balance.value,
            type: acc_type.value,
            acc_no: this.acc_no,
            bank_name: bank_name.value,
            date: [new Date().getMonth() + 1, new Date().getFullYear()]
        }];
        localStorage.setItem("Account", JSON.stringify(this.arr));
    }
    //get account number
    static getAccountNo = () => {
        let acc_no = "";
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                acc_no += `${Math.floor(Math.random() * 9)}`;
            }
            acc_no += " ";
        }
        return acc_no;
    }
    // card expiry date
    static newDate = () => {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        return new Date(year + 2, month >= 11 ? month + 1 : month + 2);
    }
    // displaying card info
    static display_atm = () => {
        // hiding form
        document.querySelector(".bank_form").style.display = "none";
        document.querySelector(".atm").classList.add("show");
        // data
        let account = JSON.parse(localStorage.getItem("Account"));
        // expiry date
        let date = Account.newDate();
        let year = `${date.getFullYear()}`;
        // displaying data on card
        account.forEach(item => {
            bank_name_db.innerText = item.bank_name;
            name_db.innerText = item.name;
            card_no_db.innerText = item.acc_no;
            valid_db.innerText = `${date.getMonth()}/${year.substr(2,)}`;
        });

    }
}

// Banking operations
class Operations {
    // Withdraw Operation
    static Withdraw = () => {
        this.showModel("Enter Amount To Withdraw", "Withdraw");
        let arr = [];
        let account = JSON.parse(localStorage.getItem("Account"));
        let form = document.getElementById("modal_form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let amt = parseInt(account[0].balance);
            let pass = account[0].pass;
            let enter_pass = document.getElementById("pin").value;
            let enter_amt = document.getElementById("msg").value;
            enter_amt = parseInt(enter_amt);
            if (enter_pass === pass) {
                if (enter_amt <= amt && enter_amt >= 100) {
                    let result = amt - enter_amt;
                    // object destructring & updating balance
                    let arr2 = { ...account[0], balance: result };
                    arr.push(arr2);
                    localStorage.setItem("Account", JSON.stringify(arr));
                    document.querySelector(".atm").classList.remove("blur");
                    document.querySelector(".modal").classList.remove("show");
                    let inboxMsg = `Rs ${enter_amt} has been debited from your account`;
                    showMsgInbox(result, inboxMsg, true);
                }
                else {
                    error_sound.play();
                    alert("Insufficient Balance!!");
                }
            }
            else {
                error_sound.play()
                alert("Wrong Password!!");
            }
        })
    }
    // Deposit Operation
    static Deposit = () => {
        this.showModel("Enter Amount To Deposit", "Deposit");
        let arr = [];
        let account = JSON.parse(localStorage.getItem("Account"));
        let form = document.getElementById("modal_form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let amt = parseInt(account[0].balance);
            let pass = account[0].pass;
            let enter_pass = document.getElementById("pin").value;
            let enter_amt = document.getElementById("msg").value;
            enter_amt = parseInt(enter_amt);
            if (enter_pass === pass) {
                if (enter_amt >= 100) {
                    let result = amt + enter_amt;
                    // object destructring & updating balance
                    let arr2 = { ...account[0], balance: result };
                    arr.push(arr2);
                    localStorage.setItem("Account", JSON.stringify(arr));
                    document.querySelector(".atm").classList.remove("blur");
                    document.querySelector(".modal").classList.remove("show");
                    let inboxmsg = `Rs ${enter_amt} has been credited to your account`;
                    showMsgInbox(result, inboxmsg, true);
                }
                else {
                    error_sound.play();
                    alert("Minimum Deposit Balance!!: 100rs");
                }
            }
            else {
                error_sound.play();
                alert("Wrong Password!!");
            }
        })
    }
    //MiniStatement
    static MiniStatement = () => {

    }


    // showing model
    static showModel = (msg, btnText = "Operate") => {
        document.querySelector(".atm").classList.add("blur");
        document.querySelector(".modal").classList.add("show");
        document.getElementById("msg").previousElementSibling.innerText = msg;
        document.getElementById("operate_btn").innerText = btnText;
        document.querySelector(".hide_btn").addEventListener("click", () => {
            document.querySelector(".atm").classList.remove("blur");
            document.querySelector(".modal").classList.remove("show");
        });
    }
}
// Account class object
let obj;


// checking if account is already made, if it's then hide form
let checkAccount = localStorage.getItem("Account");
(checkAccount !== null && Account.display_atm());




// Submitting the form to create account
account_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (uname.value.length >= 5 && uname.value.length <= 30) {
        if (pass.value.length >= 5 && pass.value.length <= 15) {
            if (acc_type.value === "Savings" || acc_type.value === "Current") {
                if (opening_balance.value >= 100) {
                    if (bank_names.includes(bank_name.value)) {
                        // create new account with constructor
                        let account = localStorage.getItem("Account");
                        if (account == null) {
                            obj = new Account();
                            Account.display_atm();
                        }
                        else {
                            error.innerText = "Your Account Already Exists!!";
                            Account.display_atm();
                        }
                    }
                    else error.innerText = "Select a Valid Bank!!";
                }
                else error.innerText = "Opening Balance Should Be Atleast 1000rs!!";
            }
            else error.innerText = "Enter Account Type!!";
        }
        else error.innerText = "Enter Strong Password[>5 & <15]!!";
    }
    else error.innerText = "Please Enter Valid Name[>15 & <30]!!";
});



// showing messages like inbox
let showMsgInbox = (result, inboxMsg, bool) => {
    let d = new Date();
    messages.innerText = `${inboxMsg} on ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    let left_balance = document.createElement("p");
    left_balance.innerText = `Remaining Balance: ${result}`;
    messages.appendChild(left_balance);
    if (bool) inbox.play();
    (!bool && close_btn.addEventListener("click", () => messages.classList.toggle("show")));
}
let msg = "No Transaction done this time";
let bal = JSON.parse(localStorage.getItem("Account"));
showMsgInbox(JSON.parse(bal[0].balance), msg, false);


//Performing operations
// 1]. Widthdraw
document.getElementById("withdraw").addEventListener("click", () => {
    Operations.Withdraw();
});
// 2]. Deposit
document.getElementById("deposit").addEventListener("click", () => {
    Operations.Deposit();
});
// 3]. Mini-Statement
document.getElementById("mini").addEventListener("click", () => {
    Operations.MiniStatement();
});