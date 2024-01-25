import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { state } = useContext(MovieContext);

    function handleCartShow() {
        setShowCart(true);
    }
    function handleCartClose() {
        setShowCart(false);
    }

    function handleModeToggle() {
        setDarkMode(!darkMode);
    }

    return (
        <header>
            {showCart && <CartDetails onClose={handleCartClose} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="Logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img src={Ring} width="24" height="24" alt="Ring" />
                        </a>
                    </li>
                    <li>
                        <button
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            onClick={handleModeToggle}
                        >
                            <img
                                src={darkMode ? Sun : Moon}
                                width="24"
                                height="24"
                                alt="Theme Mode"
                            />
                        </button>
                    </li>
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block "
                            href="#"
                            onClick={handleCartShow}
                        >
                            <img
                                src={ShoppingCart}
                                width="24"
                                height="24"
                                alt="Cart"
                                className="relative"
                            />
                            {state.cartData.length > 0 && (
                                <span className="rounded-full p-[2px] w-[32px] absolute -top-3 -right-6 bg-primary text-white text-center">
                                    {state.cartData.length}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
