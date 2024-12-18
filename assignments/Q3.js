class car{
company;
model;
year;
constructor(c,m,y){
this.company=c;
this.model=m;
this.year=y;
}

displyproperty(){
    console.log(`This is ${this.year} ${this.company} ${this.model}`);
    
}
}
let c=new car("Rools Roys","Boattail",2022)
c.displyproperty()
