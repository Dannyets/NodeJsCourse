function sleep(ms){
    const sharedArrayBuffer = new SharedArrayBuffer(4);
    const intArray = new Int32Array(sharedArrayBuffer);

    Atomics.wait(intArray, 0, 0, ms);
}

module.exports = {
    sleep
};