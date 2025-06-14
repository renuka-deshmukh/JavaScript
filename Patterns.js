
n = 5;

for(let i=1; i<=n; i++){
    line = '';
    for(let j = 1; j <=n; j++){
        line += " *"
    }
    console.log(line)
}
  console.log("\n")

for(let i = 1; i<=n; i++){
    line = '';
    for(let j= 1;j<=i; j++){
        line += " *"
    }
    console.log(line)
}

for(i = 5; i>=1; i--){
    line = '';
    for(j=1; j<=i; j++){
        line += " *"
    }
    console.log(line)
}

console.log("\n")

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for(i = 1 ; i<=n; i++){
  line = ''

  for(j= 1; j <= n-i; j++){
    line+= ' '
  }
  for(k =1; k<=i; k++){
    line +=' *'
  }
  for(k =1; k<=i; k++){
    line +=' *'
  }

  console.log(line)
}