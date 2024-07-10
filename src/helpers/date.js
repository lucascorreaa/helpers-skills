//Metodos de Array - Date

now = new Date
dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
//criando o array dos dias da semana

monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
//criando o array dos meses do ano

console.log("Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear())
console.log('São:' + now.getHours() +' horas, e ' + now.getMinutes() + " minutos e " + now.getSeconds() + " segundos.")

//getDay() -> vai me trazer o dia da semana em numeros (no caso em qual dia da semana estamos, no primeiro, segundo, etc.)
//getDate() -> vai me trazer o dia do mes em numeros
//dayName[now.getDay()] -> vai me trazer o dia de acordo com os itens do array
//getMonth() -> vai me trazer o mes
//monName[now.getMonth()] -> vai me trazer o mes de acordo com os itens do array
//getFullYear() -> vai me trazer o ano
//getHours() -> vai me trazer as horas do dia
//getMinutes() -> vai me trazer os minutos da hora
//getSeconds() -> vai me trazer os segundos do minuto