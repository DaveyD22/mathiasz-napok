const nev = "";
const leiras = "";
const img = "";
const ev = "";

/*
fetch("code.json")
    .then(response => {
        if (!response.ok){
            throw new Error("várjá baj van")
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

*/

fetchData()

async function fetchData() {
    try{
        const response = await fetch("code.json")

        if (!response.ok)
            throw new Error("várjá baj van");

        const data = await response.json()
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
}