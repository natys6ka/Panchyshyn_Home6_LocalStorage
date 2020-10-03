// console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			signupBtn.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

signupBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			loginBtn.parentNode.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

    /* 1.	При реєстрації дані попадають в localStorage. 
    Перед добавленням нового користувача провіряємо 
    чи нема у нас вже користувача з такою поштою, 
    якщо є то не добавляти його. 
    Всі дані мають валідуватися регулярними виразами. */


function setLocalStorageBtn(){
    email = document.getElementById('email').value;
    pass = document.getElementById('password').value;
    
    for(let i=0; i<localStorage.length; i++){
        if (localStorage.key(i) == email)
            alert('This email is already exist');
        else localStorage.setItem(email, pass);
    }

    // localStorage.clear();

}