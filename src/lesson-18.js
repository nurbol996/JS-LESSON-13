class MyArray{
    constructor(...args){
        this.length = 0;
        for(let i=0; i<args.length; i++){
            this.push(args[i]);
        }
    }
    // push
    push(...args){
        if(args){
        for(let i=0; i<args.length; i++){
            this[this.length++]=args[i];
        }
        return this.length;
    }
}
some(fn){
    for(let i=0; i<this.length; i++){
        if(fn(this[i],i, this)){
            return true;
        }
}
return false;
}
every(fn){
    if(this.length === 0){
    for(let i=0; i<this.length; i++){
        if(fn(this[i],i, this)){
            return false;
        }
    }
    return true;
}
reverse(){
    const temp;
    for(let i=0; i<this.length; i++){
temp = this[i];
this[i] = this[lastIndex-i];
this[lastIndex-i]=temp
this[i],,this[lastIndex - i]
    }
}
}

}

const myArr = new MyArray(10, 20 ,30);
console.log(meArr.some((el)=>el % 3 === 0));
console.log(myArr.every((el)=>el % 3 === 0 === 0 && el !==0))
console.log(myArr);