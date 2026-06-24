import React from "react";

const Contact = () => {
    return (
        <section className="page-section contact-section" id="contact">
            <div className="section-header">
                <span className="eyebrow">Kontak</span>
                <h2>Siap bekerja sama untuk proyek yang berdampak.</h2>
            </div>
            <div className="contact-card">
                <p>
                    Jika kamu ingin membangun website profesional, membuat
                    aplikasi yang responsif, atau mendesain pengalaman yang
                    mudah dipahami, saya siap membantu.
                </p>
                <div className="contact-grid">
                    <div>
                        <strong>Email</strong>
                        <p>
                            <a href="mailto:danisharya443@gmail.com">
                                danisharya443@gmail.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong>Telepon</strong>
                        <p>
                            <a href="tel:+6281266807601">+62 812 6680 7601</a>
                        </p>
                    </div>
                    <div>
                        <strong>GitHub</strong>
                        <p>
                            <a
                                href="https://github.com/danisharya443"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                danisharya443
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong>Instagram</strong>
                        <p>
                            <a
                                href="https://instagram.com/_denishdr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @_denishdr
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong>YouTube</strong>
                        <p>
                            <a
                                href="https://www.youtube.com/@danisharya7392"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                danisharya7392
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong>Threads</strong>
                        <p>
                            <a
                                href="https://www.threads.net/@_denishdr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @_denishdr
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
