// const name = "qin";

const formatValue = () => {
  // TODO:
};

const age = 19;

console.log(age);

const student = {
  name: "qin",
  age: 28,
  address: "wuhan",
};

console.log(student);

class Student {
  constructor(private name: string) {}

  printName(): string {
    return this.name;
  }
}
