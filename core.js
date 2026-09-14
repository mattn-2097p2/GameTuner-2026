class Core {
    constructor() {
        this.id = "wN4TnFS7";
        this.queue = [];
    }

    async skhhd(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Core();
    for (let i = 0; i < 3; i++) {
        await obj.skhhd(i);
    }
    console.log(obj.queue);
})();
