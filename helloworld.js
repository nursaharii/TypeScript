var empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male",
    age: 15
};
empObj.age = "20"; //Üstte bunu readonly tanımladık o yüzden hata verir.
empObj.empCode = 2;
empObj.name = "Sofi";
empObj.gender = "Female";
