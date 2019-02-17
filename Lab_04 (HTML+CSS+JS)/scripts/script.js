// URL
let url = "teststsqvvhttps://www.a.com/watch?v=j/x/v1e18rWw.php http://bsdq.com/qvq/qvq2g2ej3jogr3jgr3kegrj"
let regExp = /https?:\/\/(www\.)?(\w+\.)+(\w+)(\/(\w+|\?*|=*|\.)+)*/i
let test = new RegExp(regExp,"g")
console.log(url.match(test))

// EMAIL
let email = "VQQBQwbq n_oName@mail.com a@com a@.com @a.com qfvqbb"
regExp = /(\w+|_+|\.+)+@(\w+|_+)+\.[a-zA-Z]+/i
test = new RegExp(regExp,"g")
console.log(email.match(test))