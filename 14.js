function name (string){
    this.string = string
}

name.prototype.print = function(){
    console.log(this.string)
}

var palyer1 = new name("gautam");

palyer1.print();



