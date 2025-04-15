let count = 0;
count = 50;
const Key = 'Hello';
const person = {
    name: 'Abul',
    age: 23
}

person.name = 'Kalam';
const numbers = [1, 2, 3];
numbers[3] = 'Wow';

// Arrow Functions
function add(a, b) {
    return a + b;
}
const minus = (a, b) => {
    return a - b;
}
const multiply = x => x * x;
const divide = (x, y) => x / y;

// console.log(multiply(2));
// console.log(minus(2, 1));
// console.log(add(2, 5));
// console.log(divide(4, 2));

// /// Template Literals;

const a = 'Dhaka';
const b = ', Bangladesh';
const c = 'Hello i am from ' + a + b;

const d = `Hello i am from ${a} ${b}`;

// console.log(c);
// console.log(d);


/////// Destructuring

// Object Destructuring
const car = {
    name: 'BMW',
    model: 'M3 GTR',
    engine: 'V4',
    seat: 2,
    steering: 'right',
    numberPlate: '203420',
    color: 'Kala',
}

let carName = car.name;
let carEngine = car.engine;

const { color, engine, name, ...restObjt } = car;

// console.log(color, name, engine)

// console.log(restObjt)

// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4];



/////////// Array Methhods /////////////

const cars = ['bmw', 'toyota', 'nissan', 'lamborghini', 'mercedez', 'mazda', 'ford', 'ferrari', 'volvo', 'jaguar', 'tata', 'suzuki', 'honda', 'mitsubishi', 'astorn martin', 'lykan', 'dodge', 'mclearn', 'pagani', 'konigseg', 'bugatti', 'rolls royce', 'audi', 'bently', 'land rover', 'devil', 'walton', 'porsche', 'volkswagen', 'alfa romeo', 'lexus', 'jeep', 'subaru', 'cheverlote', 'mitseouka', 'renault', 'kia', 'syeoung', 'hyudai', 'fiat', 'cooper', 'lotus', 'plymouth', 'cardilac', 'polestar', 'spania gta', 'mg'];

const carsObj = [
    {
        name: 'BMW'
    },
    {
        name: 'Toyota'
    }
]

const findCar = carsObj.find((car) => car.name == 'Toyota');
console.log(findCar);

// console.log(cars.includes('mg'));


// cars.push('rfl');
// cars.unshift('pran');

// cars.pop();
// cars.shift();

// remove both elemens
// cars.splice(5, 6);

// add elements
// cars.splice(5, 0, 'kala', 'blue');
// replace element;
// cars.splice(1, 0, 'white');
