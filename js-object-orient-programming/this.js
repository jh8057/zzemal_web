let UZ = {
    name : "UZ",
    age : "secret",
    first : 10,
    second : 30,
    sum:function(){
        return this.first+this.second;
    }
}
console.log("sum : ", UZ.sum())
for ( let i in UZ){
    console.log(i, UZ[i]);
} 