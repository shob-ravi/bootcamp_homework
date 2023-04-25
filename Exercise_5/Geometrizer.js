function calc_circum(radius)
{ var circum = 2*Math.PI*radius;
    console.log("Circumference of a circle is:",circum);
}
function calc_area(radius)
{
    area = radius * radius * Math.PI;
    console.log("Area of a circle is:", area);
}
calc_circum(5);
calc_area(2);