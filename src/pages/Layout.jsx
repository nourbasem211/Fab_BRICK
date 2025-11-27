// src/pages/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartSidebar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
