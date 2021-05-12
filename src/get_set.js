// github에서 따로 추가된 파일입니다. 

/*
  [typescipt - 게터(getter)/세터(setter)]
  메소드 아펭 get/set 키워드를 붙여 사용 할 수 있다.
  게터는 인자를 받을 수 없다.
*/

class Face {
  private _edge: number = 3;
  get edge() {
     return this._edge;
  }
  set edge(value: number) {
    this._edge = value;
  }
}

const face = new Face();

console.log(face.edge);   // 3
face.edge = 5;
console.log(face.edge);   // 5



  
 
   
  
