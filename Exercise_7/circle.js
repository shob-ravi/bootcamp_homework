function circle(rad)
{
var area = Math.PI*rad*rad;
var area1 = area.toFixed(2);
var per = 2*Math.PI*rad;
var per1 = per.toFixed(2);
console.log("Area of a circle for radius",rad,"is",area1);
console.log("Perimeter of a circle for radius",rad,"is",per1);
}
circle(3);


