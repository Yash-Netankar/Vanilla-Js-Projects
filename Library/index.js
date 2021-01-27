// global 
let input_form = document.getElementById("input_form");
let Bname = document.getElementById("bname");
let Bauthor = document.getElementById("bauthor");


// init book class
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
    static NotFound = () => {
        let notFound = document.createElement("h1");
        let no_record = document.querySelector(".no-record");
        let text = document.createTextNode("No Records Found");
        notFound.appendChild(text);
        notFound.setAttribute("style", "text-align:center");
        notFound.setAttribute("id", "not_found");
        no_record.appendChild(notFound);
    }
}

// delete book function
const deleteB = (id) => {
    let book = localStorage.getItem("Book");
    if (book == "") {
        arr = []
    }
    else {
        arr = JSON.parse(book);
    }
    arr.splice(id, 1);
    localStorage.setItem("Book", JSON.stringify(arr));
    if (arr.length == 0) {
        Book.NotFound();
        document.getElementById("tableBody").innerHTML = "";
    }
    else {
        Display.display();
    }
}

// display book class
class Display {
    // display
    static display = () => {
        let tbody = document.getElementById("tableBody");
        tbody.innerHTML = '';
        let book = JSON.parse(localStorage.getItem("Book"));
        if (book == null || book == "" || book.length == 0 || book == []) {
            localStorage.clear();
        }
        let html = "";
        try {
            book.forEach((item, index) => {
                html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.author}</td>
                    <td>${item.type}</td>
                    <td>
                        <i class="fa fa-trash-o del_icon" id=${index} onclick="deleteB(this.id)"></i>
                    </td>
                </tr>`;
            });
            tbody.insertAdjacentHTML("beforeend", html);
            if (document.getElementById("not_found")) {
                document.getElementById("not_found").remove();
            }
        }
        catch {
            Book.NotFound();
        }
    }
    // validation
    static validate = () => {
        if (Bname.value.length < 2 || Bauthor.value.length < 2 || Bname == "" || Bauthor == "") {
            return false
        }
        else { return true }
    }
    // clear after submit
    static Clear = () => {
        input_form.reset();
    }
}
Display.display();



// playing with data and forms
input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    // types
    let type;
    let types = document.querySelectorAll(".btype");
    types.forEach(btn => {
        if (btn.checked) {
            type = btn.value;
        }
    });
    // class object 1
    let obj1 = new Book(Bname.value, Bauthor.value, type);

    // displaying on validation 
    if (Display.validate()) {
        // storing in local storage
        let arr;
        let book = localStorage.getItem("Book");
        if (book == null) {
            arr = [];
        }
        else {
            arr = JSON.parse(book)
        }
        arr.push(obj1);
        localStorage.setItem("Book", JSON.stringify(arr));
        // displaying
        Display.display()
    }
    else alert("Enter Valid Data \nCannot Record Your Entry");
    Display.Clear();
});