class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
    calcEnv = () => {
        const edge1 = Math.sqrt(Math.pow((this.point2.x - this.point1.x), 2) + (Math.pow((this.point2.y - this.point1.y), 2)));
        const edge2 = Math.sqrt(Math.pow((this.point3.x - this.point1.x), 2) + (Math.pow((this.point3.y - this.point1.y), 2)));
        const edge3 = Math.sqrt(Math.pow((this.point3.x - this.point2.x), 2) + (Math.pow((this.point3.y - this.point2.y), 2)));
        return edge1 + edge2 + edge3
    }
    calcArea = () => {
        const area = 0.5 * Math.abs(this.point1.x * this.point2.y + this.point2.x * this.point3.y + this.point3.x * this.point1.y - (this.point1.y * this.point2.x + this.point2.y * this.point3.x + this.point3.y * this.point1.x));
        return area;
    }
}
const triangle = new Triangle(new Point(-1, 1), new Point(5, 1), new Point(5, 4));
console.log(triangle.calcEnv())
console.log(triangle.calcArea())