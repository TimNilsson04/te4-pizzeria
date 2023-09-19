fetch("pizzameny.json")
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.pizzameny.length; i++) {
            let vname = data.pizzameny[i].name;
            let vingredients = data.pizzameny[i].ingredients;
            let vprice = data.pizzameny[i].price;
            document.querySelector("#pizzameny").innerHTML += `
                                <tr>
                                    <td>${vname}</td>
                                    <td>${vingredients}</td>
                                    <td>${vprice}</td>
                                </tr>`;
        }
    })