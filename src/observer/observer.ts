export class Observable<T> {
  private observers: Array<(data: T) => void>;

  constructor() {
    this.observers = [];
  }

  // 옵저버를 추가하는 메서드
  subscribe(func: (data: T) => void): void {
    this.observers.push(func);
  }

  // 옵저버를 제거하는 메서드
  unsubscribe(func: (data: T) => void): void {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  // 모든 옵저버에게 알림을 보내는 메서드
  notify(data: T): void {
    this.observers.forEach((observer) => {
      console.log('observer>>!!!!!!!!!!!!!', observer);

      observer(data);
    });
  }
}
