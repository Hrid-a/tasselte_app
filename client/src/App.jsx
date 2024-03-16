import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MaxWidthWrapper from './components/MaxWidthWrapper';
import ProductGrid from './components/ProductGrid';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
const About = lazy(() => import("./components/About"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const ProductCategory = lazy(() => import("./components/ProductCategory"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <MaxWidthWrapper as="main">
          <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/honey" element={<Suspense fallback={<p>loading...</p>}><ProductCategory /></Suspense>} />
            <Route path="/oil" element={<Suspense fallback={<p>loading...</p>}><ProductCategory /></Suspense>} />
            <Route path="/product/:id" element={<Suspense fallback={<p>loading...</p>}><ProductPage /></Suspense>} />
            <Route path="/about-us" element={<Suspense fallback={<p>loading...</p>}><About /></Suspense>} />
          </Routes>
        </MaxWidthWrapper>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
