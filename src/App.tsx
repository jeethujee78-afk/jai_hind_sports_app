/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import RootLayout from "./layouts/RootLayout";
import Loader from "./components/Loader";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Categories = lazy(() => import("./pages/Categories"));
const Showcase = lazy(() => import("./pages/Showcase"));
const About = lazy(() => import("./pages/About"));
const BrandIdentity = lazy(() => import("./pages/BrandIdentity"));

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Primary Destinations */}
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="shop" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="sports" element={<Categories />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="gallery" element={<Showcase />} />
            <Route path="about" element={<About />} />
            
            {/* Clean Redirects for Deprecated / Moved Destinations */}
            <Route path="brands" element={<Navigate to="/products" replace />} />
            <Route path="contact" element={<Navigate to="/about" replace />} />
            <Route path="brand-identity" element={<BrandIdentity />} />
            
            {/* Wildcard fallback redirection */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
