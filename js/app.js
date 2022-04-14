"use strict"
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            const table = new Table(data);
            table.render();
        })
        .catch((error) => {
            console.log(error);
        });
})