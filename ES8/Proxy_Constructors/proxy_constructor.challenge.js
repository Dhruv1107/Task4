// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
}

let handler = {
    set: (manager, propName, newValue) => {
        if (propName === "employees") {
            if (Array.isArray(newValue) || typeof newValue === 'string' || newValue == null)
                manager[propName] = newValue;
            else
                console.log("Error cannot change");
        }
        else
            manager[propName] = newValue;
    }
}

let empObject = new Proxy(manager, handler);
// empObject.employees = ['Ram'];
empObject.office = `London` //updates
empObject.employees = ['Jim', 'Patrick', 'Mary']; //updates
console.log(empObject);
empObject.employees = 3; // doesn't update
empObject.employees = null; // updates
empObject.employees = { name: 'Jim' } // doesn't update
console.log(empObject);

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    }
];

let handler1 = {
    get: (target, propName) => {
        if (target[propName].accessLevel === 1)
            return `Access Denied`;
        else
            return target[propName];
    }
}

getMessage = (msg) => {
    if (msg == undefined)
        console.log("Access Denied");
    else
        console.log(msg);
}

let usersObj = new Proxy(users, handler1);

getMessage(usersObj[0].username)  // Access Denied
getMessage(usersObj[0].accessCode) // Access Denied
getMessage(usersObj[1].accessCode) // 2345
getMessage(usersObj[2].username) // Harold