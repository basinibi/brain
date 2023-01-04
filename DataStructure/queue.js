// dequeue <- [front, rear] <- enqueue
// shift는 쓰지마 시간 복잡도가 O(n)이 됨
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value){
        this.queue[this.rear++] = value;       // 후위 연산자. rear인덱스에 값을 넣고 rear의 값을 하나 증가 시킨다.
    }

    dequeue(){
        const value = this.queue[this.front];  // front 인덱스의 값을 temp에 넣음 (바로 반환하면 함수가 종료 됨으로)
        delete this.queue[this.front];         // front 부분 dequeue
        this.front += 1;                       // front가 가르키는 부분 이동
        return value;                          // dequeue한 값 반환
    }

    peek(){
        return this.queue[this.front];         // queue에서 가장 먼저 들어온 값 반환
    }

    size(){
        return this.rear - this.front;          // queue 사이즈 반환
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue);
queue.enqueue(3);
console.log(queue);