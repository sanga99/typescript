
////// [제네릭 기본]
function wrap<T>(param: T){
    return {
        param
    }
}

const wrapped = wrap(10);
console.log(wrapped)        //  { param: 10 }




////// [interface에서 제네릭 사용]
interface Items<T> {
    list : T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

console.log(items);     // { list: [ 'a', 'b', 'c' ] }


////// [class에서 제네릭 사용]
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    getlist(){
        return this.list;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.getlist());       //  [ 0, 1, 2, 3, 4 ]

console.log(queue.dequeue());       //  0
console.log(queue.getlist());       //  [ 1, 2, 3, 4 ]

console.log(queue.dequeue());       //  1
console.log(queue.getlist());       //  [ 2, 3, 4 ]

console.log(queue.dequeue());       //  2
console.log(queue.dequeue());       //  3
console.log(queue.dequeue());       //  4
