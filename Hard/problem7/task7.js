function Circle(radius) {


    this.radius = radius;
    this.diameter = 2*radius;
    this.getC = function(){
          return Number((2*Math.PI*this.radius).toFixed(2));  
    }
    
    this.getA = function(){
        return Number((Math.PI*Math.pow(this.radius,2)).toFixed(2));
    };
    
    }
    const c0 = new Circle(1);
    


export default Circle;