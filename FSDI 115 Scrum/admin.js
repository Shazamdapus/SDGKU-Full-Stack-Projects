/*
var admin = {
    name: 'John',
    password: '1234',
}

var supervisor = {
    name: 'Sally',
    password: '5678',
}

function logIn() {
    var admin = document.getElementById('userName').value;
    var supervisor = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    if (admin == 'John' || password == admin.password) {
        console.log('Admin Log In Successful!');
    } else if (admin == 'John' || password != admin.password) {
        console.log('Password Incorrect!');
    } else if (admin != 'John') {
        console.log('Username Incorrect!');
    };
    
}
*/

var members = [];

function member(firstName, lastName, age, standard, student) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.standard = standard;
    this.student = student;

    console.log('Cool Man');
}

function registerMember() {
    var firstName = document.getElementById('memberName').value;
    var lastName = document.getElementById('memberLastName').value;
    var age = document.getElementById('memberAge').value;
    var standard = '';
    var student = '';

    var newMember = new member(firstName, lastName, age, standard, student);

    standard = getStandard();
    student = getStudent();

    members.push(member);
}

function getStandard() {
    var membership = document.getElementsByName('membership');
    var standard = '';

    for (i = 0; i < membership.length; ++i) {
        if (membership[i].checked) {
            standard = true;
        }
    }

    console.log(standard);
    return standard;
}

function getStudent() {
    var membership = document.getElementsByName('membership');
    var student = '';

    for (i = 0; i < membership.length; ++i) {
        if (membership[i].checked) {
            student = true;
        }
    }

    console.log(student);
    return student;
}