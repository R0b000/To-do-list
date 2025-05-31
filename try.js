const data = [
  { value: "Get up at 7'o clock." },
  { value: 'Starting working out at 7:30 am.' }
]

let dataBag = {}

for(let i = 0; i<data.length; i++){
    dataBag[i+1] = `${data[i].value}`
}

console.log(dataBag)