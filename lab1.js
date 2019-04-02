 
 function Student(name, grade) {
     this.name = name;
     this.grade = grade;
 }
 
 
 
 var Class = [];

 function registerStudent() {
     var name = document.getElementById("name");
     var grade = document.getElementById("grade");

    var student = new Student(name.value, grade.value);
     console.log(Student);

     Class.push(student);
     name.value = '';
     grade.value = '';

     displayClass(student);
 }


 function displayClass(Student) {
     var list = document.getElementById("studentList");
     var li = document.createElement('li'); // create li on HTML page
     li.innerText = Student.name + " - " + Student.grade; // display student name and grade
     li.classList.add("student-li"); // adds css class
     list.appendChild(li);
 }
/*
 function averageGrades() {
     // sum the values from the array
    var getAverage = Class => {
        // sum the values from the array
        var reducer = (grade, currentValue) => grade + currentValue;
        var sum = Class.reduce(reducer);
        console.log(sum);
        // get the length of the array
        console.log(Class.length);
        // divide the array sum by the length
        var classAverage = sum / Class.length;
        console.log(classAverage);
        alert(classAverage);
    }
    window.alert(getAverage);
 }
*/

function averageGrades() {
    var reducer = (grade, currentValue) => grade + currentValue;
    var sum = Class.reduce(reducer);
    var classAverage = sum / Class.length;
    console.log(classAverage);
   // window.alert(classAverage);
}
