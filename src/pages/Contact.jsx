// src/pages/Contact.jsx
import insta1 from '../assets/image/green-sample.jpg';
import insta2 from '../assets/image/yellow-chair.jpg';
import insta3 from '../assets/image/s5.jpg';
import insta4 from '../assets/image/insta4.jpg';
import insta5 from '../assets/image/hall2.jpg';
import insta6 from '../assets/image/green-board.jpg';
import insta7 from '../assets/image/paint.jpg';
import insta8 from '../assets/image/table.jpg';
import insta9 from '../assets/image/pink-wall.jpg';

const instaImages = [
  insta1, insta2, insta3,
  insta4, insta5, insta6,
  insta7, insta8, insta9,
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
          {/* left half – CONTACT */}
      <section className="flex-1 bg-black text-white px-8 md:px-20 lg:px-28 py-16 md:py-20 flex flex-col">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.18em] mb-3">
            CONTACT
          </h1>
          <div className="w-16 h-1 bg-white mx-auto md:mx-0 mb-12" />
        </div>

        <form className="max-w-xl text-[15px] mx-auto md:mx-0">
          {/* First / Last */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            <div className="flex-1 mb-6 md:mb-0">
              <label className="block mb-2 italic">Firstname *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white text-white outline-none pb-1"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 italic">Lastname *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white text-white outline-none pb-1"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-8">
            <label className="block mb-2 italic">E-mail *</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white text-white outline-none pb-1"
            />
          </div>

          {/* Subject */}
          <div className="mb-8">
            <label className="block mb-2 italic">Subject *</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white text-white outline-none pb-1"
            />
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block mb-2 italic">Your message *</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white text-white outline-none pb-1 resize-none"
            />
          </div>

          {/* Send */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-transparent border-none text-white italic text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </section>


      {/* right half – INSTAGRAM */}
      <section className="flex-1 bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.18em] mb-3">
            INSTAGRAM
          </h1>
          <div className="w-16 h-1 bg-black mx-auto mb-10" />
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-2">
          {instaImages.map((img, idx) => (
            <div key={idx} className="w-full aspect-square overflow-hidden">
              <img
                src={img}
                alt={`insta-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
