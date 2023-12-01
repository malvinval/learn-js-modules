const log = (message) => {
    console.log(message);
}

const err = (message) => {
    console.error(`ERR: ${message}`);
}

export {log, err};