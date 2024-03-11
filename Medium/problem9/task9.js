class Circle {
    constructor(radius) {

         this.radius =radius 
    
        }
     
   getArea()
     { 
        return (Math.PI*(this.radius**2))
     }
    
   getPerimeter()
     {
        return (Math.PI*this.radius*2)
     } 

   }

   export default Circle;