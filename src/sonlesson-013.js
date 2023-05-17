
function doubleAgeDifference(fatherAge, sonAge) {
    const ageDifference = fatherAge - sonAge;
    let doubleSonAge;
    if (ageDifference < 15) {
      throw new Error("Разница в возрасте не может быть меньше 15 лет.");
    } else {
      doubleSonAge = sonAge * 2;
      let yearsToDoubleAgeDifference = 0;
      while (fatherAge < doubleSonAge) {
        yearsToDoubleAgeDifference++;
        fatherAge++;
        sonAge++;
      }
      return yearsToDoubleAgeDifference;
    }
  }
console.log(doubleAgeDifference(40, 22));
const yearsUntilDoubleAge = doubleAgeDifference(35, 20);
console.log(yearsUntilDoubleAge); 