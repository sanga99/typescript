// github에서 따로 추가된 파일입니다. 

/*
  [typescipt - static]
  일반적인 클래스는 별도의 인스턴스를 생성하고 각각 관리했다. 
  static은 이런 방식과 다르게 클래스 전체에서 값을 공유하는 static member(스태틱 멤버)를 사용할 수 있다.
*/


class Counter {
  static count: number = 0;
  static increase() {
    this.count++;
  }
}


Counter.increase();
console.log(Counter.count);
Counter.increase();
consile.log(Counter.count);

  
