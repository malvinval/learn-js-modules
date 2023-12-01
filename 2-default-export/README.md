# Default Export

Ketika kita hanya ingin export 1 data/function dari sebuah module, maka kita bisa gunakan statement `export default`. Sebelumnya, buat dulu file modulenya dengan ekstensi `.mjs`.

**NOTICE: Ini hanya berlaku untuk ES6 Module, bukan CommonJS module.**

# Example

```js
// logger.mjs module

const log = (message) => {
    console.log(message);
}

export default log;
```

```js
// app.mjs

import {default as log} from "./logger";

log("hello");
```

Kita bisa lihat perbedaannya bahwa statement import dan exportnya berbeda dari CommonJS, dan notice bahwa sekarang nama file kita adalah `app.mjs` dan `logger.mjs`