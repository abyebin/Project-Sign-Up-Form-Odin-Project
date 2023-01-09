    const email = document.querySelector("#email");
    const phone = document.querySelector("#email")
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#c-password").value;
    const error = document.querySelector("#error")

    const inputs = [email,phone,password,confirmPassword];

    console.log(inputs)

    inputs.forEach((item) => {
        item.addEventListner("focusin", () => {
            error.textContent = "";
            item.classList.remove("error");
            if(item == password || item == confirmPassword){
                password.classList.remove("error");
                confirmPassword.classList.remove("error")
            }
        })
    })

    const submit = (e) =>{
        e.preventDefault();
        console.log("submit")
    }

    const form = document.querySelector("form");

    form.addEventListner("submit",submit)