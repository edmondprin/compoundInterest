function calcul (base, taux, years) {
  for (let i = 0; i < years; i++) {
      base *= (1+taux);
  }
  console.log(`Sum after ${years} years at ${Math.floor(taux*100)}%: USD ${Math.floor(base)}`)
}


calcul (85000, 0.09, 8);



function calcul2(a,b,c) {
  if (c === 9) {
      console.log("DONE");
      return   
  }
  console.log(`Year ${c}: ${Math.floor(a *= (1+b))}`);
  calcul2(a,b,c+1)
  } 
calcul2(85000, 0.09, 1);