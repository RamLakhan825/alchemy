import a1 from "../images/25.png";
import a2 from "../images/26.png";

export default function Z() {
  return (
    <div className="z-container">
      {/* Left Side with image a1 and overlay text */}
      <div className="z-left">
        <img src={a1} alt="Left" className="z-img z-img-left" />
        <div className="z-text">
          <h1>BRAND SLOGAN</h1>
          <h2>
            Contact us to immediately receive a detailed quote and advice from
            our engineers.
          </h2>
          <button>View Our Product</button>
        </div>
      </div>

      {/* Right Side with image a2 */}
      <div className="z-right">
        <img src={a2} alt="Right" className="z-img" />
      </div>

      <style jsx>{`
        .z-container {
          background-color: #ee741d;
          display: flex;
          flex-wrap: wrap;
          min-height: 300px;
        }

        .z-left,
        .z-right {
          flex: 1 1 50%;
          position: relative;
          overflow: hidden;
        }

        .z-left {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 40px;
        }

        .z-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .z-img-left {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          filter: brightness(0.6);
        }

        .z-text {
          position: relative;
          color: white;
          text-align: left;
          padding: 20px;
          z-index: 1;
          max-width: 500px;
        }

        .z-text h1 {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .z-text h2 {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .z-text button {
          padding: 10px 20px;
          border: 2px solid white;
          background-color: transparent;
          color: white;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        /* Responsive changes for tablets and smaller screens */
        @media (max-width: 991px) {
          .z-container {
            flex-direction: column;
          }

          .z-left,
          .z-right {
            flex: 1 1 100%;
            height: 300px;
          }

          .z-left {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
