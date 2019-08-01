// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property

let course = {

}

// Reflect.defineProperty(target, propertyKey, attributes)
Reflect.defineProperty(course, 'name', { value: 'Javascript', enumerable: true, configurable: true });
Reflect.defineProperty(course, 'duration', { value: '3 hours', enumerable: true, configurable: true });
console.log(course);

//Reflect.deleteProperty(target, propertyKey)
Reflect.deleteProperty(course, 'name');
console.log(course);
Reflect.defineProperty(course, 'name', { value: 'Javascript', writable: false });

//Reflect.getOwnPropertyDescriptor(target, propertyKey)
//A property descriptor object if the property exists in the given target object; otherwise, undefined.
console.log(Reflect.getOwnPropertyDescriptor(course, 'name'));
console.log(Reflect.getOwnPropertyDescriptor(course, 'duration'));

