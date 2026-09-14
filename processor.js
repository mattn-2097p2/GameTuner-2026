class Processor {
    constructor() {
        this.ncbhhp = 191;
        this.vhhugs = 302;
        this.ready = true;
    }

    xcegd(value) {
        if (!this.ready) return null;
        return value * 8;
    }
}

module.exports = Processor;
