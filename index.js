class Cat {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak: function(){
    return this.name + " says meow!";
  }

}

class Dog {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak: function(){
    return this.name + " says woof!";
  }
}

class Bird {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak: function(){
    if(this.name === "male"){
      return this.name + " says squawk!";
    }
    return "It's me! " + this.name + ", the parrot!"
  }

}
