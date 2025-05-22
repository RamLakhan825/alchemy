import a1 from "../images/16.png";
import a2 from "../images/17.png";
import a3 from "../images/18.png";

export default function Hero3() {
  return (
    <>
      {/* Full-width top banner image */}
      <div>
        <img src={a1} alt="Top Banner" className="w-full object-cover" />
      </div>

      {/* Main section full width, no horizontal margins */}
      <div className="flex flex-col md:flex-row items-stretch min-h-[450px] w-full">
        
        {/* Left half: image with overlay text, flush left */}
        <div className="relative md:w-1/2 h-[400px] md:h-auto">
          <img
            src={a2}
            alt="Community"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black/40 text-center px-8 leading-snug">
            Building Communities,<br /> Empowering Lives
          </p>
        </div>

        {/* Right half: gray background with text content, flush right */}
        <div className="hidden md:flex md:flex-col md:w-1/2 bg-gray-200 p-16 gap-8">
          <h3 className="text-2xl font-semibold m-0">
            Corporate Social <br /> Responsibility
          </h3>
          <h1 className="text-5xl font-bold m-0 leading-tight">
            Building Communities,<br /> Empowering Lives
          </h1>

          {/* Stats section */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-orange-500 text-3xl font-extrabold m-0">100+</h4>
              <p className="m-0 text-lg font-medium">Schools Supported</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-3xl font-extrabold m-0">20+</h4>
              <p className="m-0 text-lg font-medium">Communities Reached</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-3xl font-extrabold m-0">10,000+</h4>
              <p className="m-0 text-lg font-medium">Lives Impacted</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-600 transition w-max">
            Learn More About Our Impact
          </button>
        </div>
      </div>
      <div className="w-full">
  <img
    src={a3}
    alt="Bottom Banner"
    className="w-full h-auto object-cover"
  />
</div>
    </>
  );
}
