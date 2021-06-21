function run() {
    fetch("findsquare.wasm")
        .then(bytes => bytes.arrayBuffer())
        .then(mod => WebAssembly.compile(mod))
        .then(module => {
            let instance = new WebAssembly.Instance(module);
            console.log("findsquare.wasm: " + instance.exports.square(15));
        })
    fetch("add.wasm")
        .then(bytes => bytes.arrayBuffer())
        .then(mod => WebAssembly.compile(mod))
        .then(module => {
            let instance = new WebAssembly.Instance(module);
            console.log("add.wasm: " + instance.exports.add(1, 2));
        })
}

run();