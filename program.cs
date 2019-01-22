using System;

namespace Session1Lab
{
class Student
    {
    public string Name;
    public integer Grade;

    public void setName(string pName)
        {
        this.Name = pName;
        }

    public int Grade(int amount)
        {
        this.Grade = pGrade;
        }
    }
}

        static void Student(string[] args)
        {
            Student Student1 = new Student();
            Student Student2 = new Student();
            Student Student3 = new Student();

            Student1.setName("Quincy");
            Student2.setName("Billy");
            Student3.setName("Timmy");

            Student1.Grade("87");
            Student2.Grade("77");
            Student3.Grade("91");

            Console.WriteLine(Student1.setName() + " has a grade of " + Student1.Grade());
            Console.WriteLine(Student2.setName() + " has a grade of " + Student2.Grade());
            Console.WriteLine(Student3.setName() + " has a grade of " + Student3.Grade());
            Console.WriteLine("The class has an average grade of: " + (Student1.Grade + Student2.Grade + Student3.Grade)/3);
        }


