export { };

let effectIndex = 0;
let effectStates: { deps: any[] | undefined, cleanup?: (() => void) }[] = [];

const myUseEffect = (effect: () => (void | (() => void)), deps?: any[]) => {
  const currentIndex = effectIndex;
  const prev = effectStates[currentIndex];

  let hasChanged = true;
  if (prev && deps) {
    hasChanged = deps.some((dep, i) => dep !== prev.deps?.[i]);
  }

  if (hasChanged) {
    // 清理上一次的副作用
    prev?.cleanup?.();
    // 执行副作用，并保存清理函数
    const cleanup = effect();
    effectStates[currentIndex] = { deps, cleanup: typeof cleanup === 'function' ? cleanup : undefined };
  }
  effectIndex++;
};

// 修改 render，重置 effectIndex
const render = () => {
  hookIndex = 0;
  effectIndex = 0;
  app = Counter();
};

// 举个例子
const Counter = () => {
  const [count, setCount] = myUseState(0);

  myUseEffect(() => {
    console.log('副作用执行，count:', count);
    return () => {
      console.log('清理副作用，count:', count);
    }
  }, [count]);

  console.log(count, 'num1');
  return {
    click: () => setCount(count + 1)
  }
}
