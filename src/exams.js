import months from './months'

const filteredMonths = months.filter( (months)=> {
    return months.day === 30
})

console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach(month => {
    toPrint += month.day + ', '
});




let sunMonthDays = filteredMonths.reduce( (prev, next) => {
    return {day: prev.day + next.day}
})


document.getElementById('main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sunMonthDays