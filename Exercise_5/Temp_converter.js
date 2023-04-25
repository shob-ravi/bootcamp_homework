function celTOfar(celcius)
{
    var calc_faren= (celcius*1.8)+32;
    farenheit = calc_faren.toFixed(2);
console.log(celcius,"℃" ,"is",calc_faren,"℉");
}
function farTOcel(faren)
{
var Calc_cel = (faren-32)/1.8;
celsius=Calc_cel.toFixed(2);
console.log(faren,"℉","is",celsius,"℃");
}
celTOfar(60.5);
farTOcel(43);