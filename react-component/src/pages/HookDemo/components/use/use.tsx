import { createContext, Suspense, use } from 'react';

const ExampleOne = () => {
  const theme = use(ThemeContext);
  return (
    <div>
      <Suspense fallback={'111'}>
        <h2>{theme}</h2>
      </Suspense>
    </div>
  );
};
const ThemeContext = createContext('');
const UseHook = () => {
  console.log(2);
  return (
    <ThemeContext value="dark">
      <ExampleOne />
    </ThemeContext>
  );
};

export default UseHook;
