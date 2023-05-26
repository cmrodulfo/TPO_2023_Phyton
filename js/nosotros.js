

//personData()


const image = document.getElementById("image")
const profileName = document.getElementById("profileName")
console.log(profileName.innerHTML);





const personData = async () => {
    try {
        const data = await fetch ('https://randomuser.me/api/?gender=female&inc=name,nat,email,picture')
        const response = await data.json()
        const person = response.results[0]
        console.log(person);
        image.src = person.picture.large
        profileName.innerHTML = "Dra. "+ person.name.first +" "+ person.name.last

    } catch (error) {
        
    }
} 

const data = personData()
console.log(data)