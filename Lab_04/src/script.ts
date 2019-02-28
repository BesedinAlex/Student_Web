// URL
let text = "teststsqvvhttps://www.a.com/watch?v=j/x/v1e18rWw.php http://bsdq.com/qvq/qvq2g2ej3jogr3jgr3kegrj HTTPS://TEST.COM"
let pattern = /https?:\/\/(www\.)?(\w+\.)+(\w+)(\/(\w+|\?*|=*|\.)+)*/gi
console.log(text.match(pattern))

// EMAIL
text = "VQQBQwbq n_oName@mail.com a@com a@.com @a.com qfvqbb"
pattern = /(\w+|_+|\.+)+@(\w+|_+)+\.[a-zA-Z]+/gi
console.log(text.match(pattern))