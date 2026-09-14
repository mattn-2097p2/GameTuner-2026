class Utils {
    constructor() {
        this.id = "LCJV9dxze8";
        this.queue = [];
    }

    async cohvco(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Utils();
    for (let i = 0; i < 4; i++) {
        await obj.cohvco(i);
    }
    console.log(obj.queue);
})();
