import React, { useState, useRef, useEffect } from "react";

const Home = ({ goToPage }) => {
    const fullName = "Danish Arya";
    const [isHovering, setIsHovering] = useState(false);
    const [typedName, setTypedName] = useState("");
    const profileRef = useRef(null);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            index += 1;
            setTypedName(fullName.slice(0, index));
            if (index >= fullName.length) {
                clearInterval(timer);
            }
        }, 120);
        return () => clearInterval(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            {/* Background animated elements */}
            <div className="hero-bg-decoration">
                <div className="decoration-orb decoration-orb-1"></div>
                <div className="decoration-orb decoration-orb-2"></div>
                <div className="decoration-orb decoration-orb-3"></div>
                <div className="animated-grid"></div>
                <div className="floating-elements">
                    <div className="float-element float-1"></div>
                    <div className="float-element float-2"></div>
                    <div className="float-element float-3"></div>
                </div>
            </div>

            <section className="hero-section-v3">
                <div className="hero-left-v3">
                    <div className="hero-headline-v3">
                        <p className="hero-eyebrow-v3">Halo</p>
                        <h1 className="hero-title-v3">
                            <span className="title-word-v3">Saya</span>
                            <span className="gradient-text-v3 typing-text-v3">
                                {typedName}
                            </span>
                        </h1>
                        <h2 className="hero-subtitle-v3">
                            Crafting Digital Experiences
                        </h2>
                    </div>

                    <p className="hero-tagline-v3">
                        Halo, saya Danish Arya, seorang mahasiswa Teknik
                        Informatika yang memiliki minat dalam pengembangan
                        perangkat lunak, analisis sistem, dan teknologi
                        informasi. Saya senang mempelajari teknologi baru serta
                        menerapkannya dalam berbagai proyek untuk menciptakan
                        solusi yang bermanfaat dan inovatif.
                    </p>

                    <div className="hero-cta-group-v3">
                        <button
                            className="cta-button-v3 cta-primary-v3"
                            onClick={() => goToPage("projects")}
                        >
                            Lihat Proyek
                        </button>
                        <button
                            className="cta-button-v3 cta-secondary-v3"
                            onClick={() => goToPage("contact")}
                        >
                            Hubungi Saya
                        </button>
                    </div>

                    <div className="hero-tech-stack-v3">
                        <div className="tech-item-v3">Web Designer</div>
                        <div className="tech-item-v3">Web Developer</div>
                        <div className="tech-item-v3">UI/UX Design</div>
                    </div>
                </div>

                <div className="hero-right-v3">
                    <div
                        className="profile-wrapper"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="profile-container"
                            ref={profileRef}
                            style={{
                                boxShadow: isHovering
                                    ? "0 0 60px rgba(56, 189, 248, 0.6), inset 0 0 60px rgba(22, 211, 238, 0.3)"
                                    : "0 0 40px rgba(56, 189, 248, 0.3), inset 0 0 60px rgba(22, 211, 238, 0.15)",
                            }}
                        >
                            <div className="profile-image-v3">
                                <img
                                    src="/images/profile.jpg"
                                    alt="Danish Arya Yudhistira"
                                />
                            </div>
                            <div className="profile-glow"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
