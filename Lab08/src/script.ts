class Person {
    firstName: string;
    lastName: string;
    isMan: boolean;
    static count: number;
    constructor(firstName = Person.getDefaultFirstName(), lastName = Person.getDefaultLastName()) {
        this.firstName =  firstName;
        this.lastName = lastName;
        this.isMan = false;
        Person.count++;
        console.log("Person is born!");
    }
    changeSex() {
        this.isMan = !this.isMan;
    }
    static getDefaultFirstName() {
        return "John";
    }
    static getDefaultLastName() {
        return "Doe";
    }
}

let person1 = new Person("Alex", "Conver");
let person2 = new Person();
person1.changeSex();
console.log(typeof Person);
console.log(typeof person1);
console.log(person1 instanceof Person);
console.log(person1);
console.log(person2);
console.log(Person.count);
console.log(Person.getDefaultFirstName());
class HardWorker extends Person {
    id: number;
    constructor(firstName: string, lastName: string, id: number) {
        super(firstName, lastName);
        this.id = id;
    }
}
let worker1 = new HardWorker("Alex", "Conver", 123);
worker1.changeSex();
console.log(worker1);

interface Figure {
    getPerimeter(): number;
    getArea(): number;
}
class Point {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    distanceFromZeroPoint() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static getDistanceBetweenPoints(p1: Point, p2: Point) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
}
class Line implements Figure {
    p1: Point;
    p2: Point;
    constructor(p1: Point, p2: Point) {
        this.p1 = p1;
        this.p2 = p2;
    }
    getPerimeter() {
        return Point.getDistanceBetweenPoints(this.p1, this.p2);
    }
    getArea() {
        return 0;
    }
}
class Triangle extends Line implements Figure {
    p3: Point;
    a: number;
    b: number;
    c: number;
    constructor(p1: Point, p2: Point, p3: Point) {
        super(p1, p2);
        this.p3 = p3;
        this.a = super.getPerimeter();
        this.b = Point.getDistanceBetweenPoints(this.p1, this.p3);
        this.c = Point.getDistanceBetweenPoints(this.p2, this.p3);
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter();
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}
class Rectangle extends Triangle implements Figure {
    p4: Point;
    constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
        super(p1, p2, p3);
        this.p4 = p4;
    }
    getPerimeter() {
        return (this.a + this.b) * 2;
    }
    getArea() {
        return this.a * this.b;
    }
}
class Circle implements Figure {
    point: Point
    radius: number;
    constructor(point: Point, radius = 1) {
        this.point;
        this.radius = radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2); 
    }
}