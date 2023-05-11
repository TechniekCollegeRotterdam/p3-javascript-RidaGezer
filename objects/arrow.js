const marvels = ["Black widow","The Avengers","Spider man","Eternals"];
const addMarvel = () => {
    marvels.push("batman")
}
addMarvel()

for (let marvel of marvels) {
    console.log(marvel)
}