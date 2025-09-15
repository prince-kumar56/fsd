const car = {
    brand: "mahindra",
    model: "xuv700",
    year: 2021
}

console.log(car.brand);   
console.log(car.model);   

function changeModel(obj) {
    obj.model = "suv";
}

console.log(car.model);   
changeModel(car);
console.log(car.brand);   
console.log(car.model);   
