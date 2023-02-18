// if (4) {
//     console.log('Значение true')
// } else {
//     console.log('Значение true')
// }

var str = 'Hello'

4 ? console.log('Значение true') : console.log('Значение true')
str ? console.log('Значение true') : console.log('Значение true')
!((true || false) || !false) ? console.log('Значение true') : console.log('Значение true')

var personAge = 28
var message

// if (personAge < 18) {
//     message = 'Человек еще несовершеннолетний'
// } else {
//     message = 'Человек совершеннолетний'
// }

var message = personAge < 18 
? 'Человек еще несовершеннолетний'
: 'Человек совершеннолетний'

console.log (message)