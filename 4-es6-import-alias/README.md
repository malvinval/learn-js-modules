# Import Alias

Bayangkan kita mau import 2 function dari 2 module yang berbeda ke dalam file utama kita, dan nama functions yang ingin kita import memiliki nama yang sama. Lihat kode dibawah:

```js
// logger.mjs

const log = (message) => {
    console.log(`Logger log: ${message}`);
}

export {log};
```

```js
// helper.mjs

const log = (message) => {
    console.log(`Helper log: ${message}`);
}

export {log};
```

Apakah kita bisa menggunakan import statement seperti dibawah ini?

```js
// app.mjs

import {log} from "./helper.mjs";
import {log} from "./logger.mjs";
```

Jawabannya, **tidak**. Karena akan terjadi error yang disebabkan oleh konflik penamaan data:

```
import {log} from "./logger.mjs";
        ^^^
SyntaxError: Identifier 'log' has already been declared
```

Disinilah kita bisa memanfaatkan *aliasing* (memberikan nama lain untuk sebuah data) dengan menggunakan keyword **`as`**. Lihat kode dibawah:

```js
// app.mjs

import {log as log_h} from "./helper.mjs";
import {log as log_l} from "./logger.mjs";

log_h("hello");
log_l("hello");
```

Dari kode diatas, kita memberikan alias `log_h` untuk function `log()` dari module `helper.mjs` dan `log_l` untuk function `log()` dari module `logger.mjs`. Sehingga sekarang function yang di-*import* dapat diakses menggunakan nama *alias*nya.