/*
트라이의 특징
1. 검색어 자동 완성, 사전 찾기 등에 응용될 수 있다.
2. 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
3. L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 걸린다
4. 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.

트라이 구조
1. 루트는 비어있다.
2. 각 간선(링크)은 추가될 문자를 키로 가진다.
3. 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
4. 해시 테이블과 연결리스트를 이용하여 구할 수 있다.
*/

class Node {
    constructor(value = "") {
        this.value = value;                    // 문자열에서 문자를 추헤서 넣을거임
        this.children = new Map();             // 맵은 객체와는 다르게 다양한 타입을 키로 지정할 수 있다.(객체는 문자열만 가능)
    }
}

class Trie{
    constructor() {
        this.root = new Node();                                    // {"", {}}
    }

    // 문자열을 각 노드에 추가
    insert(string){                                                // 문자열을 받는다 Ex) cat
        let currentNode = this.root;                               // 처음 노드에는 빈 문자열을 가진 루트 노드를 넣는다

        for(const char of string){
            if(!currentNode.children.has(char)){                   // 만약 최근 노드의 자식 노드가 해당 문자를 가지고 있지 않다면
                currentNode.children.set(
                    char,
                    new Node(currentNode.value + char)
                );
            }
            currentNode = currentNode.children.get(char);           // currentNode => {"c", {"c"}} => {"c", {"a", {"ca"}}} => {"c", {"a", {"t", {"cat"}}}}
        }
    }

    // 문자열이 존재하는지 체크
    has (string){
        let currentNode = this.root;

        for (const char of string){
            if(!currentNode.children.has(char)){
                return false
            }
            currentNode = currentNode.children.get(char)
        }
        return true;
    }

}

const trie = new Trie();
trie.insert("cat")
trie.insert("can")
console.log(trie.has("cat"))
console.log(trie.has("can"))
console.log(trie.has("cap"))
console.log(trie)