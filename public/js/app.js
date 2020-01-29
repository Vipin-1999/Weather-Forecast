const weatherForm = document.querySelector('form')
const search1 = document.querySelector("input[name='numerator1']")
const search2 = document.querySelector("input[name='denominator1']")
const input = document.querySelector('#inputs')
const sum = document.querySelector('sum')

const message = document.querySelector('#message')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var numerator = search1.value
    var denominator = search2.value
    n1 = fraction.input(numerator, denominator)

    message.textContent = 'List of fractions input: '
    input.textContent = '[' + numerator + '/' + denominator + ']'
    sum.textContent = ''
})