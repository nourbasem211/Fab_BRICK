import { Link } from "react-router-dom";
import logo from "../assets/image/imgi_3_LOGO FabBRICK off.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="bg-neutral-primary w-full border-default">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* الشمال: لوجو + لينكات */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
          </Link>

          <ul className="nav-font flex items-center gap-4 md:gap-8 text-xs md:text-sm">
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/samples">SAMPLES</Link>
            </li>
            <li className="hidden sm:block">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="hidden sm:block">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* اليمين: أيقونة الكارت */}
        <button
          onClick={() => dispatch(toggleCart())}
          className="relative ml-3"
          aria-label="Cart"
        >
          <i className="fa-solid fa-bag-shopping text-base md:text-lg"></i>
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full px-1.5 py-[1px]">
              {itemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
