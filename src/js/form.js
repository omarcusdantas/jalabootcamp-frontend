function handleForm(event) {
    event.preventDefault();

    const formData = new FormData(form);

    if (formData.get("username").length < 4 || formData.get("password").length < 4) {
        alert("Username and password must be at least 4 characters long.");
        return;
    }

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if (!emailRegex.test(formData.get("email"))) {
        alert("Please enter a valid email address.");
        return;
    }

    const validSubscriptions = ["subscription1", "subscription2", "subscription3"];
    if (!validSubscriptions.includes(formData.get("subscription"))) {
        alert("Invalid subscription option. Please choose subscription1, subscription2, or subscription3.");
        return;
    }

    const validSex = ["male", "female", "prefer_not_to_say"];
    if (!validSex.includes(formData.get("sex"))) {
        alert("Invalid sex option. Please choose male, female, or prefer_not_to_say.");
        return;
    }

    if (formData.get("subscribe") !== "on") {
        alert("Please confirm you want to subscribe.");
        return;
    }

    if (parseInt(formData.get("age")) < 18) {
        alert("You must be at least 18 years old to subscribe.");
        return;
    }

    alert("Form submitted successfully!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleForm);
