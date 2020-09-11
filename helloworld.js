var empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male",
    age: 15
};
//empObj.age= "20"; //Üstte bunu readonly tanımladık o yüzden hata verir.
empObj.empCode = 2;
empObj.name = "Sofi";
empObj.gender = "Female";
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
var emp = new Employee(1, "Sofie");
