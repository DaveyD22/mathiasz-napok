const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;


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

fetchData()