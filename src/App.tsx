import { useCountStore } from './stores/count-store';
import { Observable } from './observer/observer';

export default function App() {
  const { count, increment, decrement } = useCountStore();
  const observable = new Observable<string>();

  // 옵저버 함수 정의
  const observer1 = (data: string) => {
    console.log('Observer 1 received:', data);
  };

  const observer2 = (data: string) => {
    console.log('Observer 2 received:', data);
  };

  // 옵저버 구독
  observable.subscribe(observer1);
  observable.subscribe(observer2);

  // 알림 전송
  observable.notify('Hello Observers!');
  // 콘솔 출력:
  // Observer 1 received: Hello Observers!
  // Observer 2 received: Hello Observers!

  // 옵저버 구독 해지
  observable.unsubscribe(observer1);
  observable.notify('Hello again!');

  return (
    <div>
      {/* <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div>{count}</div> */}
    </div>
  );
}
