import { createBrowserRouter } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import ProductDetail from "./pages/ProductDetail";
const ShopPage = lazy(() => import("./pages/ShopPage"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <ShopPage />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);
