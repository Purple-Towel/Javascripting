 let character = [6, 8, 6, 1] // level, racial starting hp, class hp, constitution modifier

function calculateHP(lev,rac,clas,con) { // take variables; crunches numbers
  return rac + (lev * (clas + con))
}

const result = calculateHP.character([0],[1],[2],[3]) // should output 50

console.log(result) // output line 7 to console