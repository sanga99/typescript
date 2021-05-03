////// [제네릭 기본]
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
console.log(wrapped); //  { param: 10 }
var items = {
    list: ['a', 'b', 'c']
};
console.log(items); // { list: [ 'a', 'b', 'c' ] }
////// [class에서 제네릭 사용]
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.getlist = function () {
        return this.list;
    };
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.getlist());
console.log(queue.dequeue());
console.log(queue.getlist());
console.log(queue.dequeue());
console.log(queue.getlist());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
