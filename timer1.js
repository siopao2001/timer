const alarm = process.argv.slice(2).sort((a, b) => a -b)
const filteredAlarm = alarm.filter(item => +(item) >= 0)
let delayer = +(filteredAlarm[0]) * 1000;

for (let i = 0; i < filteredAlarm.length; i++) {
  setTimeout(() => {
  process.stdout.write ('\x07') 
}, delayer)
delayer = +(filteredAlarm[i + 1])  * 1000
}



