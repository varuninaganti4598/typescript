"use strict";
// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//    Exercise 5 – Classes
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Objectives:
// • Create classes with typed properties and methods
// • Add access modifiers to class members
exports["default"] = (function () {
    // ======== Exercise 5.1 ========
    // Goals:
    // • Add explicit parameter type to the greet method
    // • Add explicit return type to the greet method
    var MC = /** @class */ (function () {
        function MC() {
        }
        MC.prototype.greet = function (event) {
            if (event === void 0) { event = 'party'; }
            return "Welcome to the " + event;
        };
        return MC;
    }());
    var mc = new MC();
    console.log('[Exercise 5.1]', mc.greet('show'));
    // ======== Exercise 5.2 ========
    // Goals:
    // • Add explicit parameter types to constructor
    // • Add typed parameters for storing values
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var jane = new Person('Jane', 31);
    console.log('[Exercise 5.2]', "The new person's name is " + jane.name + ".");
    // ======== Exercise 5.3 ========
    // Goals:
    // • Explicitly make the title and salary properties publicly available
    // • Reduce class to three lines of code while maintaining functionality
    var Employee = /** @class */ (function () {
        function Employee(title, salary) {
            this.title = title;
            this.salary = salary;
        }
        return Employee;
    }());
    var employee = new Employee('Engineer', 100000);
    console.log('[Exercise 5.3]', "The new employee's title is " + employee.title + " and they earn $ " + employee.salary + ".");
    // ======== Exercise 5.4 ========
    // Goals:
    // • Add complete typing
    // • Make the Snake class inherit from Animal
    // • Make the Pony class inherit from Animal
    // • Make it so that the name member cannot be publicly accessed
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (meters) {
            console.log(this.name + " moved " + meters + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            console.log('Slithering...');
            // should call on parent's `move` method, w/ a default
            // slither of 5 meters
            _super.prototype.move.call(this, meters);
        };
        return Snake;
    }(Animal));
    var Pony = /** @class */ (function (_super) {
        __extends(Pony, _super);
        function Pony() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Pony.prototype.move = function (meters) {
            if (meters === void 0) { meters = 60; }
            console.log('Galloping...');
            // should call on parent's `move` method, w/ a default
            // gallop of 60 meters
            _super.prototype.move.call(this, meters);
        };
        return Pony;
    }(Animal));
    // The class Animal should not be instantiable.
    // Delete or comment out once the desired error is achieved.
    //const andrew = new Animal("Andrew the Animal");
    //andrew.move(5);
    var sammy = new Snake("Sammy the Snake");
    sammy.move();
    //console.log(sammy.name); // Should return error
    var pokey = new Pony("Pokey the Pony");
    pokey.move(34);
    //console.log(pokey.name); // Should return error
    // ======== Exercise 5.5 ========
    // Goals:
    // • Make it so that only the Desk and Chair classes can see the
    //   manufacturer member
    var Furniture = /** @class */ (function () {
        function Furniture(manufacturer) {
            if (manufacturer === void 0) { manufacturer = 'IKEA'; }
            this.manufacturer = manufacturer;
        }
        return Furniture;
    }());
    var Desk = /** @class */ (function (_super) {
        __extends(Desk, _super);
        function Desk() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Desk.prototype.kind = function () {
            console.log('[Exercise 5.5]', "This is a desk made by " + this.manufacturer);
        };
        return Desk;
    }(Furniture));
    var Chair = /** @class */ (function (_super) {
        __extends(Chair, _super);
        function Chair() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Chair.prototype.kind = function () {
            console.log('[Exercise 5.5]', "This is a chair made by " + this.manufacturer);
        };
        return Chair;
    }(Furniture));
    var desk = new Desk();
    desk.kind();
    //desk.manufacturer; // Should return error
    var chair = new Chair();
    chair.kind();
    //chair.manufacturer; // Should return error
    // ======== Exercise 5.6 ========
    // Goals:
    // • Eliminate the error without changing references to `Student.school`
    var Student = /** @class */ (function () {
        function Student(name) {
            this.name = name;
            this.school = 'Harry Herpson High School';
        }
        ;
        Student.prototype.introduction = function () {
            console.log('[Exercise 5.6]', "Hi, my name is " + this.name + " and I attend " + this.school);
        };
        return Student;
    }());
    var student = new Student('Morty');
    //console.log(Student.school);
    student.introduction();
});
