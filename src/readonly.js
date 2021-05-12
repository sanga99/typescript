
// github에서 따로 추가된 파일입니다. 

/*
  [typescipt - 접근제한자 중 readonly]
  readonly 키워드는 읽기 전용 속성이다. 
  이는 변수를 설정할 때와 생성자(constructor)에서만 할 수 있다.
*/


class Face {
  
  readonly vertex: number = 3;
  readonly edge: number;

  constructor(edge: number){
    this.edge = edge;
  }
  
  public eddEdge() {
    this.edge++;        // TS2540: Cannot assign to 'edge' because it is a read-only
  } 
}


const face = new Face(5);
console.log(face.edge)    // 5
console.log(face.vertex)  // 3


