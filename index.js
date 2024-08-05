function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        const newId = document.createElement('p');
        newId.innerText = `ID: ${data.id}`;
        document.body.appendChild(newId);
    })
    .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
}




