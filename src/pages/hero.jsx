import a1 from "../images/4.png";
import a2 from "../images/5.png";
import a3 from "../images/6.png";
import a4 from "../images/7.png";
import a5 from "../images/8.png";
import a6 from "../images/9.png";

export default function Hero() {
    return (
        <>
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center text-center px-4"
            style={{ backgroundImage: `url(${a1})` }}
        >
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-6xl">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    POWERING PROGRESS WITH <br /> EVERY TON.
                </h1>

                <button className="text-white border-2 border-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition-all duration-300">
                    EXPLORE MORE
                </button>

                {/* Responsive blurred image */}
                <div className="backdrop-blur-md bg-white/10 rounded-lg p-2 w-72 md:w-[600px] mt-6 md:mt-20">
                    <img
                        src={a2}
                        alt="blurred visual"
                        className="w-full h-auto rounded"
                    />
                </div>
            </div>
        </div>
        
        {/* <div className="bg-orange-500 px-8 h-[400px]">
  <div className="max-w-7xl mx-auto flex flex-wrap items-stretch justify-between gap-10 h-full">

    <div className="flex-1 min-w-[700px] relative flex h-full">
      <img
        src={a5}
        alt="Brand visual"
        className="h-full w-auto object-cover relative z-10"
      />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-sm z-20">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          BRAND SLOGAN
        </h3>
        <p className="mb-6 text-base md:text-lg leading-relaxed max-w-xs">
          Contact us immediately to receive a detailed quote and advice from our engineers.
        </p>
        <button className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-orange-500 transition">
          View Our Product
        </button>
      </div>
    </div>

    <div className="flex flex-1 min-w-[280px] justify-end items-stretch relative gap-4 h-full">
      <img
        src={a4}
        alt="Product 4"
        className="h-full w-auto object-cover"
      />

      <div className="relative h-full w-24 md:w-32">
        <img
          src={a3}
          alt="Product 3"
          className="h-full w-full object-cover relative z-10"
        />
        <img
          src={a6}
          alt="Product 6"
          className="h-full w-auto object-cover absolute top-0 left-0 z-20"
        />
      </div>
    </div>
  </div>
</div> */}

        </>
    );
}
