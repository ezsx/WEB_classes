function content() {
    document.querySelectorAll('.accordion-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            content.classList.toggle('open');
        });
    });
}

window.onload = content;

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

function task1() {
    const now = new Date();
    const day = formatNumber(now.getDate());
    const month = formatNumber(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());

    document.getElementById("datetime").textContent = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

function task2() {
    return setCalculator()
}

function task3() {
    const allTreeNodes = document.querySelectorAll("*");
    document.getElementById("element-count").textContent = `Element count: ${allTreeNodes.length}`;
}

function task4() {
    const blockCount = 5;
    let blockIndex = 1;

    // Create 5 menu items with empty content
    for (let i = 1; i <= blockCount; i++) {
        const menuItem = document.createElement("div");
        menuItem.id = `block${i}`;
        menuItem.classList.add("block");
        document.getElementById("task4-content").appendChild(menuItem);
    }

    setInterval(() => {
        // Clear content of all blocks
        for (let i = 1; i <= blockCount; i++) {
            document.getElementById(`block${i}`).textContent = "";
        }

        // Set the content of the current block
        const blockId = `block${blockIndex}`;
        document.getElementById(blockId).textContent = `Updated: ${new Date().toLocaleTimeString()}`;

        // // Update blockIndex to a random number between 1 and blockCount
        // blockIndex = Math.floor(Math.random() * blockCount) + 1;

        // Update blockIndex sequentially
        blockIndex = (blockIndex % blockCount) + 1;
    }, 80);
}


function task5_current_item() {
    const list = document.getElementById("list");

    document.getElementById("addElement").addEventListener("click", () => {
        const input = prompt("Enter item content:");
        if (input !== null) {
            const listItem = document.createElement("li");
            listItem.textContent = input;
            listItem.addEventListener("click", () => {
                list.removeChild(listItem);
            });
            list.appendChild(listItem);
        }
    });
}

function task5() {
    const list = document.getElementById("list");

    document.getElementById("addElement").addEventListener("click", () => {
        const input = prompt("Enter item content:");
        if (input !== null) {
            const listItem = document.createElement("li");
            listItem.textContent = input;
            listItem.addEventListener("click", () => {
                const previousItem = listItem.previousElementSibling;
                if (previousItem) {
                    list.removeChild(previousItem);
                } else {
                    list.removeChild(listItem);
                }
            });
            list.appendChild(listItem);
        }
    });
}


// function task6() {
//     document.getElementById("object").addEventListener("mouseover", () => {
//         const object = document.getElementById("object");
//         const currentLeft = parseInt(object.style.left, 10);
//         object.style.left = (currentLeft - 20) + "px";
//     });
// }
function task6() {
    const object = document.getElementById("object");
    const container = document.getElementById("task6-content");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const objectWidth = object.clientWidth;
    const objectHeight = object.clientHeight;

    object.style.left = (containerWidth - objectWidth) / 2 + "px";
    object.style.top = (containerHeight - objectHeight) / 2 + "px";

    object.addEventListener("mouseover", () => {
        const newLeft = Math.floor(Math.random() * (containerWidth - objectWidth));
        const newTop = Math.floor(Math.random() * (containerHeight - objectHeight));
        object.style.left = newLeft + "px";
        object.style.top = newTop + "px";
    });
}

function task7() {
    const menuItems = document.querySelectorAll("#menu li");
    const menu = document.getElementById("menu");
    const message = document.createElement("p");
    message.textContent = "There are no more items";
    message.style.display = "none";
    menu.parentNode.appendChild(message);

    let itemsLeft = menuItems.length;

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            menuItem.classList.add("fade-out");
            setTimeout(() => {
                menu.removeChild(menuItem);
                itemsLeft--;
                if (itemsLeft === 0) {
                    message.style.display = "block";
                }
            }, 1000); // 1000 ms matches the fade-out animation duration
        });
    });
}


function task8() {
    const image = document.getElementById("smooth-image");
    image.style.opacity = 1;
    let fadeTimeout;

    function fadeIn() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeIn, 30);
        }
    }

    function fadeOut() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity > 0.5) {
            opacity -= 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeOut, 30);
        }
    }

    image.addEventListener("mouseover", fadeOut);
    image.addEventListener("mouseout", fadeIn);
}


function task9() {
    const email = document.getElementById("email1");
    const password = document.getElementById("password1");
    const frameworks = document.getElementsByName("frameworks");

    email.addEventListener("input", () => {
        if (email.value.indexOf("@") > 0) {
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    });

    password.addEventListener("input", () => {
        if (password.value.length > 0) {
            password.classList.remove("error");
        } else {
            password.classList.add("error");
        }
    });

    frameworks.forEach(framework => {
        framework.addEventListener("input", () => {
            if (framework.checked) {
                framework.parentNode.classList.remove("error");
            } else {
                framework.parentNode.classList.add("error");
            }
        });
    });
}


function validateEmail() {
    var email = document.getElementById("txtEmail").value;
    var emailPattern = /^\w{2,}@\w{2,}\.\w{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("lblEmailError").innerHTML = "Enter a valid email address.";
    } else {
        document.getElementById("lblEmailError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validatePhone() {
    var phone = document.getElementById("txtPhone").value;
    var phonePattern = /^\+[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("lblPhoneError").innerHTML = "Enter a valid phone number.";
    } else {
        document.getElementById("lblPhoneError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validateDate() {
    var date = document.getElementById("txtDate").value;
    var datePattern = /^\d{2}[.]\d{2}[.]\d{4}$/;
    if (!datePattern.test(date)) {
        document.getElementById("lblDateError").innerHTML = "Enter a valid date (dd.mm.yyyy).";
    } else {
        document.getElementById("lblDateError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validatePassword() {
    var password = document.getElementById("txtPassword").value;
    var passwordConfirm = document.getElementById("txtPasswordConfirm").value;

    if (password !== passwordConfirm) {
        document.getElementById("lblPasswordError").innerHTML = "Passwords do not match.";
        document.getElementById("lblPasswordConfirmError").innerHTML = "Passwords do not match.";
    } else {
        document.getElementById("lblPasswordError").innerHTML = "";
        document.getElementById("lblPasswordConfirmError").innerHTML = "";
    }
    toggleSubmitButton();
}

function toggleSubmitButton() {
    var emailError = document.getElementById("lblEmailError").innerHTML;
    var phoneError = document.getElementById("lblPhoneError").innerHTML;
    var dateError = document.getElementById("lblDateError").innerHTML;
    var passwordError = document.getElementById("lblPasswordError").innerHTML;
    var passwordConfirmError = document.getElementById("lblPasswordConfirmError").innerHTML;
    var submitBtn = document.getElementById("submitBtn");
    if (emailError === "" && phoneError === "" && dateError === "" && passwordError === "" && passwordConfirmError === "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function finalValidation() {
    validateEmail();
    validatePhone();
    validateDate();
    validatePassword();

    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn.disabled) {
        return false;
    } else {
        return true;
    }
}

window.onload = () => {
    content();
    setInterval(task1, 1000);
    task2();
    setInterval(task3, 1000);
    task4();
    task5();
    setInterval(task6, 1000);
    task7();
    task8();
    // task9(); // Add task9 to the window.onload event
    // task10(); // Add task10 to the window.onload event
}