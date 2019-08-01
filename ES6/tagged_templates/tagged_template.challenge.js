//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `USERS`;
let whereClauses = [
    `uid = ${2 + 1} OR city = "${city}"`
]
let order = `asc`
// console.log([...whereClauses]);

// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(static, ...dynamic) {
    // console.log(static);
    // console.log(dynamic);
    let finalQuery;
    if ((dynamic[0].startsWith("SELECT") || dynamic[0].startsWith("UPDATE")) &&
        !(dynamic[0].search("UPDATE") && dynamic[1] === "PASSWORDS")) {
        finalQuery = `${dynamic[0]} ${static[1]} ${dynamic[1]} ${static[2]} ${dynamic[2]} ${static[3]} ${dynamic[3]}`;
        //Your validation code here...
        return (finalQuery);
    }
    return "Invalid Query";

}
const selectQuery = checkQuery`${command} FROM ${table} WHERE ${[...whereClauses]} ORDER BY ${order}`;
console.log(selectQuery);