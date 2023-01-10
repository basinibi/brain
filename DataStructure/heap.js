/*
*    우선 순위가 먼저 높은 녀석이 먼저 나간다. a -> g
*    요소가 들어오고 나갈 때 마다 정렬이 필요하다.
*        a
*       /  \
*      b    c
*     / \   / \
*    d   e f   g
*
*    [null, a, b, c, d, e, f, g]
*     0     1  2  3  4  5  6  7
*    => 자식노드 = 부모노드 * 2 | (부모노드 * 2) + 1
* */


class MaxHeap{
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);                                           // 일단 배열에 값 추가
        let currentIndex = this.heap.length - 1;                         // [null, 1]의 경우 currentIndex는 2-1로 1 즉, 최근에 삽입한 요소의 index를 나타냄
        let parentIndex = Math.floor(currentIndex / 2);               // 위 그림에서 알 수 있듯 부모 노드의 인덱스는 2로 나눈 뒤 버림을 하면 구할 수 있다.

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {    // 만약 부모 노드가 존재하고 부모 노드의 우선도가 최근 들어온 노드보다 우선도가 낮다면
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;                              // 두 노드를 교환한다

            currentIndex = parentIndex;                                  // 트리에서 한 단계 내려간다.
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(){
        const returnValue = this.heap[1];                                 // 우선순위 큐 즉, 힙에서는 최상위 부모노드만 지운다.
        this.heap[1] = this.heap.pop();                                   // 배열의 가장 끝 값, 즉, 가장 자식 노드를 최상위 부모노드에 올린다. 이유 : 만약 바로 아래 자식 부터 옮기면 다른 요소 전부 다 자릴르 바꿔야 하니까

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]){    // 부모 노드가 두 자식노드 보다 우선도가 낮을 때
            if(this.heap[leftIndex] < this.heap[rightIndex]){             // 왼쪽 자식노드 < 오른쪽 자식 노드
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp                              // 오른쪽 자식 노드와 부모 노드를 교환
                currentIndex = rightIndex;                                // 트리의 아래 레벨로 내려감
            }else{                                                        // 왼쪽 자식노드 > 오른쪽 자식 노드 가 더 클 경우
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex]
                this.heap[leftIndex] = temp;                               // 왼쪽 자식 노드와 부모 노드를 교환
                currentIndex = leftIndex;                                  // 트리의 아래 레벨로 내려감
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue
    }
}

const heap = new MaxHeap();
heap.push(45);
console.log(heap.heap)
heap.push(36);
console.log(heap.heap)
heap.push(54);
console.log(heap.heap)
heap.push(27);
console.log(heap.heap)
heap.push(63);
console.log(heap.heap)
heap.pop()
console.log(heap.heap)
heap.pop()
console.log(heap.heap)
heap.pop()
console.log(heap.heap)
heap.pop()
console.log(heap.heap)


