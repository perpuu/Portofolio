import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Provider } from "react-redux";
import store from "./reducer";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
