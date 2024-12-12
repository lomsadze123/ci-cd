import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import CounterButton from "./components/CounterButton";
import { useStore } from "./stores";
import viteLogo from "/vite.svg";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const { count } = useStore();
  const router = createBrowserRouter([
    {
      path: "/ci-cd",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <h1>Home</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>count is {count}</h2>
        <CounterButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <RouterProvider router={router} />
    </>
  );
};

export default App;
