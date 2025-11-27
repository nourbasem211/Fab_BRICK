import img5 from '../assets/image/REVETEMENT SMALL.jpg';


export default function Home() {
  return (
    <div className="flex h-screen">

      <div className="w-1/2 flex flex-col justify-center pl-[90px]">
        <h1 className="text-[84px] font-bold text-[#beb1a3] leading-none mb-2">Fab__<span className="text-[#978b7a]">BRICK</span></h1>

        <div className="mb-5">
          <div className="italic text-lg text-[#978b7a] mb-1">From Textile to Design.</div>
          <div className="text-[#978b7a] text-[16px] max-w-[450px]">
            "A unique material, combining innovation and craftsmanship, to enhance your spaces.”
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8 w-[340px]">
          <button className="rounded-full border border-[#ded8cf] bg-white text-[#b0aba1] py-3 text-lg font-bold shadow-sm hover:bg-[#eceae6] transition">WALL COVERING</button>
          <button className="rounded-full border border-[#ded8cf] bg-white text-[#b0aba1] py-3 text-lg font-bold shadow-sm hover:bg-[#eceae6] transition">INTERIOR DESIGN</button>
          <button className="rounded-full border border-[#ded8cf] bg-white text-[#b0aba1] py-3 text-lg font-bold shadow-sm hover:bg-[#eceae6] transition">UNIQUE PIECES</button>
        </div>
      </div>

      <div className="w-1/2">
        <img src={img5} alt="wall" className="w-full" />
      </div>
    </div>
  );
}