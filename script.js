

document.addEventListener('DOMContentLoaded', async function () {
    document
        .getElementById('read')
        .addEventListener('click',  async function (){
            let backendurl = "https://retoolapi.dev/XApCCC/data";
            fetch(backendurl)
            .then(response => response.json())
            .then(data => adatokTablazatba(data));
    });

    function adatokTablazatba(adatok){
        console.log(adatok);
        let table = `<table class="table">
        <thead>
            <tr>
                <th>id: </th>
                <th>Név: </th>
                <th>E-mail: </th>
                <th>Igaz vagy Hamis? </th>
            </tr>
        </thead>
        <tbody>`;
        for (let i = 0; i < adatok.length; i++) {
            table += `<tr>
            <td>${adatok[i].id}</td>
            <td>${adatok[i].nev}</td>
            <td>${adatok[i].email}</td>
            <td>${adatok[i].bool}</td>
        </tr>`
        }
        table += ` </tbody>
        </table>`
        document.getElementById("table").innerHTML = table;
    }
});