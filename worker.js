onmessage = function (e) {
    const result = [];
    result.push(Math.floor(Math.random() * 100));
    result.push(Math.floor(Math.random() * 100));
    postMessage(workerResult);
}
