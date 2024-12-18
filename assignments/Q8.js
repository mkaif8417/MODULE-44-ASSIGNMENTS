function student(name){
this.name=name;
}

student.prototype.printdetail=function (){
    console.log(`hello, my name is ${this.name}`);
    
}
let st=new student("Kaif")
st.printdetail()