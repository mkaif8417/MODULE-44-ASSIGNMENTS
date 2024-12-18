class employee{
    name;
    salary;
    position
    constructor(n,s,p){
        this.name=n;
        this.salary=s;
        this.position=p;
    }

    getsalary(){
        console.log(`Salary : ${this.salary}`);
        
    }
}

let emp1=new employee("Kaif",100000,"Frontned-Developer ")
emp1.getsalary()
