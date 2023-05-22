
const personData = async () => {
    try {
        const data = await fetch ('https://randomuser.me/api/?gender=female&inc=name,nat,email,picture')
        const dataJson = await data.json()
        console.log(dataJson);
    } catch (error) {
        
    }
} 

//personData()


const image = document.getElementById("image")

image.src = personData().results.picture.medium