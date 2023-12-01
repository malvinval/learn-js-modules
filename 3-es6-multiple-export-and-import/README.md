# ES6 Multiple Module Export and Import

Sebelumnya, kita hanya export dan import sebuah data dari sebuah module. Sekarang, kita akan coba export 2 functions dalam module `logger.mjs` ke dalam `app.mjs`.

```js
// logger.mjs

const log = (message) => {
    console.log(message);
}

const err = (message) => {
    console.error(`ERR: ${message}`);
}

export {log, err};
```

```js
// app.mjs

import {log, err} from "./logger.mjs";

log("This is MJS.");
err("line break");
```

Silahkan pelajari sendiri codenya. Oke?