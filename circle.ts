export class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    public getRadius(): number {
      return this.radius;
    }
  
    public setRadius(radius: number) {
      this.radius = radius;
    }
  
    public area(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    public circumference(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  