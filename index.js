// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue[key] = value;
    return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const deleteFromEmployeeByKey = {...employee};
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}

console.log(employee);