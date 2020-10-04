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
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let person = {
        first : document.getElementById('firstName').value,
        last : document.getElementById('lastName').value,
        email : email,
        pass : pass
    }
      for(let i=0; i<localStorage.length; i++){
        if (localStorage.key(i) == email)
            alert('This email is already exist');
        else {
            localStorage.setItem(email, JSON.stringify(person));
        } 
    }
    // localStorage.clear();
}


    /* 2.	При логінуванні перевіряти чи всі поля заповнені 
    і чи правильний логін та пароль, 
    якщо щось не так виводити відповідне повідомлення. 
    Всі дані беруться з localStorage.
    3.	Якщо правильний логін та пароль то перейти на блок профайлу.
    */

function getLocalStorageBtn(){
    if (localStorage.length < 1) alert('LocalStorage is empty');
    
    let logEmail = document.getElementById('logEmail').value;
    let logPass = document.getElementById('logPass').value;
    let neww = JSON.parse(localStorage.getItem(logEmail));

    let index = -5;
    for(let i=0; i<localStorage.length; i++){
        if ((localStorage.key(i) == logEmail) & (logPass == neww.pass)) {
            index = i;
        }
    }
    if (index >= 0) {
        alert('true'); ///////////////////
        createProfile(neww);
    }
    else alert('Incorrect email or password');
}

function createProfile(info){
    let profile = document.getElementById('profile');
    profile.hidden = false;
    profile.style.visibility = 'visible';
    document.getElementById('emailing').textContent = info.email;
    document.getElementById('naming').textContent = info.first + ' ' + info.last;
    // document.getElementsByClassName('form-structor').style.visibility = 'hidden';
    // profile.style.zIndex = 6;
}