class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList{

    constructor(){
        this.head = null;                                               // 가장 앞의 노드
        this.tail = null;                                               // 가장 끝의 노드
    }

    find(value){
        let currNode = this.head;                                       // 우선 머리부터 탐색을 시작하자
        while(currNode.value !== value){                                // 탐색하는 노드의 값이 다르다면
            currNode = currNode.next;                                   // 다음 노드로 넘어가자
        }
        return currNode;                                                // 마지막까지 찾는 값이 없다면 null을 내뱉는다.
    }

    append(newValue){                                                   // append는 마지막에 추가하는 함수이다.
        const newNode = new Node(newValue);                             // 새로운 노드 생성
        if(this.head === null){                                         // 만약 연결리스트가 비어있다면
            this.head = newNode;                                        // 해당 노드는 처음이자
            this.tail = newNode;                                        // 마지막 노드가 된다
        }else{
            this.tail.next = newNode;                                   // 마지막 노드의 next 속성에 해당 노드를 넣는다(잇는다)
            this.tail = newNode;                                        // 이제 새로 넣은 노드가 마지막 노드가 된다.
        }
    }


    insert(node, newValue){                                              // insert는 중간에 삽입하는 함수이다
        const newNode = new Node(newValue);                              // 새로운 노드 생성
        newNode.next = node.next;                                        // 새로운 노드의 다음 노드 = 기존 노드의 다음 노드
        node.next = newNode;                                             // 기존에 만들어진 노드 = 새로 만든 노드
    }

    remove(value){
        if(this.head === null){                                          // 연결리스트가 비어있을 경우
            console.log("연결 리스트가 비어 있어요")
        }else{
            if(this.head.value === value){                               // head가 지워야 할 노드인 경우
                this.head = this.head.next
            }else{                                                       // 몸통 내지 부분에 지워야하는 경우(꼬리는 이후에 처리)
                let prevNode = this.head                                 // 중간 값을 지울때는 이전 노드를 알아야 링크를 정상적으로 연결할 수 있으므로
                while(prevNode.next.value !== value){                    // 삭제할 노드를 찾았다면
                    prevNode = prevNode.next
                }                                                        // 반복이 끝나면 삭제할 노드의 이전 노드를 알 수 있다.

                if(prevNode.next.next === null){                     // 삭제할 노드가 마지막 노드라면
                    prevNode.next = null;
                    this.tail =  prevNode
                }else{
                    prevNode.next = prevNode.next.next;              // 이전 노드를 다다음 노드와 연결 (이러면 연결이 끊어진 삭제할노드는 가비지 컬렉터가 삭제)
                }
            }
        }
    }

    display(){
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null){
            displayString += `${currNode.value}, `
            currNode = currNode.next;
        }
        displayString = displayString.substr(0, displayString.length -2);
        displayString += "]";
        console.log(displayString)
    }


}

const linkedList = new SingleLinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(4)
linkedList.append(5)
linkedList.display();
linkedList.insert(linkedList.find(2), 3)
linkedList.display();
linkedList.remove(1);
console.log("헤드 삭제");
linkedList.display();
linkedList.remove(3)
console.log("중간 삭제")
linkedList.display();
linkedList.remove(5)
console.log("마지막 삭제")
linkedList.display();



