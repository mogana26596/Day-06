class circle{
    const pi=3.1421;
       constructor(radius,color){
        this.radius=radius;
        this.color=color;
          }
    getarea(){
        console.log(color);
        return pi*this.radius*this.radius;
        }
}
var c1 = new circle(10,"Blue");
console.log(c1.getarea());