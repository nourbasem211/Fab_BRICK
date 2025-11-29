// src/pages/Shop.jsx
import shop1 from '../assets/image/shop1.jpg';
import shop2 from '../assets/image/shop2.jpg';
import shop3 from '../assets/image/shop3.jpg';
import yellowChair from '../assets/image/yellow-chair.jpg';

export default function Shop() {
  const shopImages = [shop1, shop2, shop3, yellowChair];

  return (
    <div className="w-full flex flex-col items-center pt-20 pb-16">
      {/* top text */}
      <div className="text-center px-4">
        <p className="text-[22px] font-semibold mb-2">
          <span className="font-extrabold">Wall covering:</span>{' '}
          <span className="font-normal">sales are made by order only.</span>
        </p>
        <p className="text-[16px] text-gray-600">
          Please contact us at{' '}
          <a
            href="mailto:contact@fabbrick.fr"
            className="underline text-gray-800"
          >
            contact@fabbrick.fr
          </a>
        </p>
      </div>

      {/* Our store is coming soon */}
      <div className="mt-16 mb-10 text-center px-4">
        <h2 className="text-[28px] md:text-[30px] font-extrabold tracking-wide">
          Our store is coming soon …
        </h2>
      </div>

      {/* shop images */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shopImages.map((src, idx) => (
            <div
              key={idx}
              className="w-full h-[260px] md:h-[280px] overflow-hidden"
            >
              <img
                src={src}
                alt={`shop-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
