function no_Of_digits(num) {
    if (num == 0) { return 1; }
    count = 0;
    while (num != 0) {
        num = (num / 10);
        num = Math.trunc(num);
        count = count + 1;
    }
    return count;

}
function reverse_num(num, digits) {
    var result = new Array();
    const rev_num = String(num).split('');
    //console.log(rev_num);
    for (i = digits - 1; i >= 0; i--) {
        //result[i] = rev_num[i];
        result = result.concat(rev_num[i]);
        //console.log(result);
        
    }
    result = Number(result.join(""));
    
    console.log(result);

}
const num = 678945231;
digits = (no_Of_digits(num));
console.log(digits);
reverse_num(num, digits);
