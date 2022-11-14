export default class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        const x = this.x + vec.x;
        const y = this.y + vec.y;

        return new Vec(x, y);
    }

    minus(vec) {
        const x = this.x - vec.x;
        const y = this.y - vec.y;

        return new Vec(x, y);
    }

    get length() {
        return this.x - 1 + this.y - 1;
    }
}

