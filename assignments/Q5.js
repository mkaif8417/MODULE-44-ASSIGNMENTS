class person {
    name;
    age;
    constructor(n="unknown", a=0) {
        this.name = n;
        this.age = a;
    }

    getdetail() {
        console.log(`name:${this.name} ,age:${this.age}`);

    }
}

let p1 = new person("Kaif", 23)
// p1.getdetail()

let p2=new person()
p2.getdetail()