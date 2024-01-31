function addItem() {
    const input = document.getElementById("itemInput");
    const inputValue = input.value.trim();

    if (inputValue !== "") {
        const customList = document.getElementById("customList");
        const item = document.createElement("li");
        item.innerText = inputValue;
        customList.appendChild(item);
    }
    input.value = "";
}

document.getElementById("addItemBtn").addEventListener("click", addItem);

document.getElementById("customList").addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "LI") {
        target.remove();
    }
});