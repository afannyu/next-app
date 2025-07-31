// 自己实现一个useState

let hookIndex = 0;
let hookStates: any[] = [];

const myUseState = (initValue: any) => {
  let currentIndex = hookIndex;
  hookStates[currentIndex] ??= initValue;

  const setState = (value: any) => {
    hookStates[currentIndex] = value;
    render()
  };

  hookIndex++;
  return [hookStates[currentIndex], setState];
};

// 举个例子
const Counter = () => {
  const [count, setCount] = myUseState(0);
  console.log(count, 'num1')

  return {
    click: () => setCount(count + 1)
  }
}

let app: { click: () => void } | undefined;

const render = () => {
  hookIndex = 0;
  app = Counter();
}

render();
app?.click();
app?.click();