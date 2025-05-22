import a1 from "../images/10.png";
import a2 from "../images/11.png";
import a3 from "../images/12.png";
import a4 from "../images/13.png";
import a5 from "../images/14.png";
import a6 from "../images/15.png";
import { ArrowRight } from "lucide-react"; // make sure this is installed or replace with ➔

export default function Hero2() {
  return (
    <>
      {/* Top Section */}
      <div className="bg-white">
        {/* Top Banner Image */}
        <img src={a1} alt="Banner" className="w-full object-cover" />

        {/* Main Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left Half: Text */}
          <div className="flex-1 text-left">
            <h3 className="text-orange-500 text-lg font-semibold mb-2">
              About Us
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HOW WE STARTED
            </h1>
            <h3 className="text-gray-700 text-lg font-medium mb-2">
              Lorem ipsum
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </p>
          </div>

          {/* Right Half: Images */}
          <div className="flex-1 flex gap-6 justify-center items-stretch">
            <img
              src={a2}
              alt="Visual 1"
              className="h-[350px] w-auto object-cover rounded shadow"
            />
            <img
              src={a3}
              alt="Visual 2"
              className="h-[350px] w-auto object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Footer Image */}
        <img src={a4} alt="Footer" className="w-full object-cover" />
      </div>

      {/* Business Section with Background & Button */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${a5})` }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content over blur */}
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 flex flex-col items-center justify-center text-center md:text-left overflow-hidden">
          {/* Title at top-left */}
          <h3 className="absolute top-8 left-8 text-4xl font-bold z-20">
            <span className="text-white">Business </span>
            <span className="text-orange-500">Solutions</span>
          </h3>

          {/* Enlarged and cropped image */}
          <div className="relative h-[380px] md:h-[420px] overflow-hidden mt-12">
            <img
              src={a6}
              alt="Business"
              className="w-[850px] object-cover object-top"
              style={{ transform: "translateY(150px)" }} // crop from bottom
            />
          </div>

          {/* Explore Button */}
          <button className="mt-6 flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-medium z-20">
            Explore All <ArrowRight size={20} />
          </button>
        </div>
    
      </div>
    </>
  );
}
