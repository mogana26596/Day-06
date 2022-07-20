class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
      persondetail() {
      return (this.name, this.age);
      }
    }
    var c1=new Person("Mogana","26");
    console.log(c1.persondetail());