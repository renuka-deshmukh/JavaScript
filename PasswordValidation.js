const findPass = document.querySelector("#passwordInput"); // Your input field
const result = document.querySelector("#validationResult"); // For showing result

const arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
function validatePassword() {
    const password = findPass.value;
    findPass.value = ''; 

    
    if (password.length < 6) {
        result.textContent = "Password is too short. Minimum 6 characters required.";
        return;
    } else {

        let hasNumber = false;
        for (let i = 0; i <= password.length; i++) {
            if (password.includes(arr1[i])) {
                hasNumber = true;
                break;
            }
        }


        if (hasNumber) {
            result.textContent = "Password should not contain numbers"
        } else {
            let hasCapital = false;
            for (let i = 0; i <= password.length; i++) {
                let char = password[i];
                if (char >= 'A' && char <= 'Z') {
                    hasCapital = true;
                    break;

                }
            }


            if (!hasCapital) {
                result.textContent = "Password should contain capital letters"
            } else {
                result.textContent = "Password is valid."
            }

        }
    }
}