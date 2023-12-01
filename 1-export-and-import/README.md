# Export & Import

Dalam contoh ini, kita punya 3 file JS.

- File utama (entry point): `app.js`
- Module 1: `logger.js`
- Module 2: `math.js`

Dari module, kita membuat functions yang nantinya akan di-*export* ke file utama:

```js
// logger.js

const log = (message) => {
    console.log(message);
}

module.exports = log;
```

```js
// math.js

const sum = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b;
}

module.exports = { sum, sub }
```

Lalu kita akan import functions yang sudah di-*export* dari module-module diatas ke file utama:

```js
// app.js

const math = require("./math");
const log = require("./logger");

log(math.sum(1,2));
```

`module` dan `exports` adalah object untuk kita store data dan functions yang ingin di-*export* dalam bentuk object (`module.exports = { sum, sub }`) atau single data (`module.exports = log;`).