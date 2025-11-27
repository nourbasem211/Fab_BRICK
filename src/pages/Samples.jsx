// src/pages/SamplesStrip.jsx
import "./SamplesStrip.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../store/cartSlice";

import s1 from "../assets/image/s1.jpg";
import s2 from "../assets/image/s2.jpg";
import s3 from "../assets/image/s3.jpg";
import s4 from "../assets/image/s4.jpg";
import s5 from "../assets/image/s5.jpg";
import s6 from "../assets/image/light.jpg";
import s7 from "../assets/image/pink-wall.jpg";

import box1a from "../assets/image/box1_front.jpg";
import box1b from "../assets/image/box1_back.jpg";
import box2a from "../assets/image/box2_front.jpg";
import box2b from "../assets/image/box2_back.jpg";

import opt2_1 from "../assets/image/15.jpg";
import opt2_2 from "../assets/image/13.jpg";
import opt2_3 from "../assets/image/16.jpg";
import opt2_4 from "../assets/image/7.jpg";
import opt2_5 from "../assets/image/24.jpg";
import opt2_6 from "../assets/image/11.jpg";
import opt2_7 from "../assets/image/8.jpg";
import opt2_8 from "../assets/image/5.jpg";
import opt2_9 from "../assets/image/10.jpg";
import opt2_10 from "../assets/image/2.jpg";
import opt2_11 from "../assets/image/3.jpg";
import opt2_12 from "../assets/image/12.jpg";
import opt2_13 from "../assets/image/14.jpg";
import opt2_14 from "../assets/image/3.jpg";
import opt2_15 from "../assets/image/9.jpg";
import opt2_16 from "../assets/image/25.jpg";
import opt2_17 from "../assets/image/6.jpg";

// OPTION 2 products (image + name + price + slug)
export const option2Products = [
  { img: opt2_1,  name: "WHITE_PLAIN",         price: "€9.00", slug: "white-plain" },
  { img: opt2_2,  name: "POLYCHROMA_PLAIN",    price: "€9.00", slug: "polychroma-plain" },
  { img: opt2_3,  name: "POLYCHROMA_TERRAZZO", price: "€9.00", slug: "polychroma-terrazzo" },
  { img: opt2_4,  name: "FLAMINGO_PLAIN",      price: "€9.00", slug: "flamingo-plain" },
  { img: opt2_5,  name: "FLAMINGO_TERRAZZO",   price: "€9.00", slug: "flamingo-terrazzo" },
  { img: opt2_6,  name: "TERRACOTTA_PLAIN",    price: "€9.00", slug: "terracotta-plain" },
  { img: opt2_7,  name: "TERRACOTTA_TERRAZZO", price: "€9.00", slug: "terracotta-terrazzo" },
  { img: opt2_8,  name: "JUNGLE_TERRAZZO",     price: "€9.00", slug: "jungle-terrazzo" },
  { img: opt2_9,  name: "JUNGLE_PLAIN",        price: "€9.00", slug: "jungle-plain" },
  { img: opt2_10, name: "AZUR_PLAIN",          price: "€9.00", slug: "azur-plain" },
  { img: opt2_11, name: "AZUR_TERRAZZO",       price: "€9.00", slug: "azur-terrazzo" },
  { img: opt2_12, name: "BLUEJEAN_PLAIN",      price: "€9.00", slug: "bluejean-plain" },
  { img: opt2_13, name: "STONE_PLAIN",         price: "€9.00", slug: "stone-plain" },
  { img: opt2_14, name: "BLUEJEAN_TERRAZZO",   price: "€9.00", slug: "bluejean-terrazzo" },
  { img: opt2_15, name: "STONE_TERRAZZO",      price: "€9.00", slug: "stone-terrazzo" },
  { img: opt2_16, name: "BLACK_PLAIN",         price: "€9.00", slug: "black-plain" },
  { img: opt2_17, name: "BLACK_TERRAZZO",      price: "€9.00", slug: "black-terrazzo" },
];

// OPTION 1 boxes
const option1Products = [
  {
    slug: "box-terrazzo",
    img: box1a,
    hoverImg: box1b,
    name: "FULL sample BOX_ TERRAZZO",
    price: "€39.00",
  },
  {
    slug: "box-plain",
    img: box2a,
    hoverImg: box2b,
    name: "FULL samples BOX_ PLAIN",
    price: "€39.00",
  },
];

const images = [s1, s2, s3, s4, s5, s6, s7];

export default function Samples() {
  const loopImages = [...images, ...images];
  const dispatch = useDispatch();

  return (
    <>
      {/* سكشن السلايدر */}
      <section className="samples-section">
        <h2 className="samples-title">Receive our samples directly at home</h2>
        <p className="samples-subtitle">to help you bring your ideas to life</p>
        <p className="samples-desc">
          FabBRICK provides direct sales of its artistic cladding material.
          Contact us by email:{" "}
          <a href="mailto:contact@fabbrick.fr">contact@fabbrick.fr</a>
        </p>

        <div className="samples-strip-wrapper">
          <div className="samples-strip">
            {loopImages.map((img, idx) => (
              <div className="samples-item" key={idx}>
                <img src={img} alt={`sample-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTION 1 */}
      <section className="option1-section">
        <p className="option1-label">
          • <span className="option1-bold">OPTION 1</span> – Order our complete
          boxes with the pattern of your choice
        </p>
        <div className="option1-line" />

        <div className="option1-grid">
          {option1Products.map((item) => (
            <Link
              to={`/samples/${item.slug}`}
              className="option1-card"
              key={item.slug}
            >
              <div className="option1-img-wrap">
                <img src={item.img} alt={item.name} className="img-base" />
                <img src={item.hoverImg} alt={item.name} className="img-hover" />
              </div>
              <div className="option1-name">{item.name}</div>
              <div className="option1-price">{item.price}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* OPTION 2 */}
      <section className="option2-section">
        <p className="option2-label">
          • <span className="option2-bold">OPTION 2</span> – Create your own box
          according to your wishes
        </p>
        <div className="option2-line" />

        <div className="option2-grid">
          {option2Products.map((item) => (
            <div key={item.slug} className="option2-card">
              <Link to={`/samples/option2/${item.slug}`}>
                <div className="option2-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
              </Link>
              <div className="option2-name">{item.name}</div>
              <div className="option2-price">{item.price}</div>

              <button
                className="option2-btn"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: item.slug,
                      name: item.name,
                      price: item.price,
                      img: item.img,
                    })
                  );
                  dispatch(openCart());
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
