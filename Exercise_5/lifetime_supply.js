function calculate_supply(age,amount)
{ const max_age= 75;
  var age = max_age-age;
    var snack= age*amount;
    snack_round = Math.round(snack);
console.log("you will need ",snack,"rounded",snack_round,"to last you in the ripe old age of",max_age);
}
calculate_supply(20,2.5);
calculate_supply(42,3.75);
calculate_supply(45,4.3);