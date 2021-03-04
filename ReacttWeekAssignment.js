class Student {
    constructor(name, email, community) {
        this.name=name;
        this.email=email,
        this.community=community;
    }
}

class Bootcamp {
    constructor(name,level,students = []) {
        this.name=name;
        this.level=level;
        this.students=students;
    }

    registerStudent(studentToRegister) {
        if(this.students.filter(s => s.email === studentToRegister.email).length > 0){
            console.log(`Cannot register student. ${studentToRegister.name} is already registered.`);
        }  else{
            console.log(`${studentToRegister.email} has been successfully registered to the ${Bootcamp.name}.`);
            this.students.push(studentToRegister);
        }
        return this.students;
    }
 }


 const webDevelopmentFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner")

 const fullStack = new Bootcamp("Full Stack Web + Mobile Development", "Advanced");

 const Ryli = new Student("Ryli", "rylidavis94@gmail.com", "SanFrancisco");

 const Mary = new Student("Mary", "MaryLou@gmail.com", "NewYork");

 const Terrie = new Student("Terrie", "TerrieRay@gmail.com", "Austin"); 

 hjkhkjhjgj