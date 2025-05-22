import a1 from "../images/19.png";
import a2 from "../images/20.png";
import a3 from "../images/21.png";
import a4 from "../images/22.png";
import a5 from "../images/23.png";

export default function Contact() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(230, 222, 222, 0.4), rgba(17, 12, 12, 0.4)), url(${a1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "40px 20px",
                color: "#222",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "30px",
            }}
        >
            {/* Left Section */}
            <div style={{ flex: "1 1 500px", maxWidth: "600px", marginTop: "60px" }}>
                <h4 className="text-orange-600" style={{ fontSize: "16px", marginBottom: "20px" }}>
                    <b>&gt;&gt;&gt; CONTACT</b>
                </h4>

                <h4 style={{ marginTop: "300px", fontSize: "25px", color: "black" }}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "40px" }}>
                    {/* Row 1: New York + Phone */}
                    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                        <InfoRow icon={a2} title="New York" text="42 Mamnoun Street, Saba Carpet and Antiques Store, UK" />
                        <InfoRow icon={a3} title="Phone Number" text="+97551579261 | +971555961659" />
                    </div>

                    {/* Row 2: Email + Opening Hour */}
                    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                        <InfoRow icon={a4} title="Email Address" text="Interested in working with us? support.industrie@gmail.com" />
                        <InfoRow icon={a5} title="Opening Hour" text="Mon - Fri: 09am - 07pm" />
                    </div>
                </div>
            </div>

            {/* Right Section (Form) */}
            <div
                style={{
                    flex: "1 1 500px",
                    maxWidth: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "60px",
                    marginRight: "60px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "#F48120",
                        position: "relative",
                        padding: "30px 20px",
                        overflow: "hidden",
                    }}
                >
                    {/* Triangle corner */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "100px",
                            height: "100px",
                            backgroundImage: `linear-gradient(rgba(128,128,128,0.4), rgba(128,128,128,0.4)), url(${a1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                        }}
                    />

                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            color: "white",
                            padding: "30px",
                            zIndex: 1,
                            position: "relative",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                        }}
                    >
                        <h1 style={{ color: "white", fontSize: "22px" }}>Get in Touch</h1>
                        <h3 style={{ color: "white", fontSize: "14px" }}>
                            The point of using Lorem Ipsum is that it has more-or-less normal
                        </h3>

                        <input type="text" placeholder="Full Name" style={inputStyle} />
                        <input type="text" placeholder="Email Address" style={inputStyle} />
                        <input type="text" placeholder="Your Inquiry" style={inputStyle} />
                        <textarea rows="4" placeholder="Write Your Message" style={{ ...inputStyle, resize: "none" }}></textarea>

                        <button
                            type="submit"
                            style={{
                                padding: "10px",
                                backgroundColor: "black",
                                color: "white",
                                cursor: "pointer",
                                borderRadius: "5px",
                                fontWeight: "bold",
                                border: "none",
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "10px",
    border: "1px solid white",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    borderRadius: "5px",
};

function InfoRow({ icon, title, text }) {
    return (
        <div style={{ display: "flex", gap: "15px", alignItems: "center", flex: "1 1 250px" }}>
            <img src={icon} alt={title} style={{ width: "60px", height: "60px" }} />
            <div>
                <h2 style={{ color: "black", fontSize: "20px" }}><b>{title}</b></h2>
                <h3 style={{ color: "black" }}>{text}</h3>
            </div>
        </div>
    );
}
