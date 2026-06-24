import React from "react";

const About = () => {
    return (
        <section className="page-section" id="about">
            <div className="section-header">
                <span className="eyebrow">Tentang Saya</span>
                <h2>Selamat datang di portofolio saya.</h2>
            </div>
            <div className="about-grid">
                <div className="about-copy">
                    <p>
                        Saya adalah mahasiswa Teknik Informatika yang antusias
                        dalam bidang pengembangan web dan teknologi informasi.
                        Melalui berbagai proyek yang saya kerjakan, saya terus
                        belajar, berinovasi, dan mengembangkan kemampuan untuk
                        menciptakan solusi digital yang efektif dan bermanfaat.
                    </p>
                    <p>
                        Saya memiliki pengalaman dalam membangun website
                        menggunakan PHP, HTML, CSS, JavaScript, serta mengelola
                        database menggunakan MySQL. Selain itu, saya juga
                        memiliki kemampuan dalam analisis dan perancangan
                        sistem, manajemen proyek perangkat lunak, pemodelan UML,
                        serta konfigurasi jaringan komputer menggunakan Cisco
                        Packet Tracer dan GNS3. Selama perkuliahan, saya telah
                        mengerjakan berbagai proyek, mulai dari pengembangan
                        website e-commerce, sistem informasi berbasis web,
                        penelitian usability website, hingga simulasi dan
                        perancangan jaringan komputer. Saya juga memiliki
                        ketertarikan pada bidang Machine Learning, Pengolahan
                        Citra Digital, dan Keamanan Jaringan. Dengan semangat
                        belajar yang tinggi, saya terus mengembangkan
                        keterampilan teknis maupun kemampuan bekerja dalam tim
                        untuk menciptakan solusi teknologi yang inovatif dan
                        bermanfaat.
                    </p>
                </div>
                <div className="about-details">
                    <div className="detail-card">
                        <h3>Keahlian Utama</h3>
                        <ul>
                            <li>Laravel</li>
                            <li>PHP</li>
                            <li>C++</li>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div className="detail-card">
                        <h3>Biodata</h3>
                        <ul>
                            <li>Kepulauan Riau, Tanjungpinang</li>
                            <li>7 September 2003</li>
                            <li>
                                Student in Universitas Maritim Raja Ali Haji
                                (UMRAH)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="organization-section">
                <h3>Organisasi</h3>
                <div className="organization-grid">
                    <div className="organization-card">
                        <div className="org-image">
                            <img
                                src="/images/organisasi.jpg"
                                alt="Organisasi 1"
                            />
                        </div>
                        <h4>Badan Eksekutif Mahasiswa Periode 2025</h4>
                        <p>
                            Selama menjadi bagian dari Kabinet Ekapraya BEM
                            Fakultas Teknik, saya aktif di Departemen Sumber
                            Daya Manusia (SDM) Divisi Pengembangan. Dalam peran
                            ini, saya terlibat dalam perencanaan, pelaksanaan,
                            dan evaluasi berbagai program kerja yang berfokus
                            pada pengembangan kualitas mahasiswa serta penguatan
                            kapasitas organisasi. Saya turut berkontribusi dalam
                            penyelenggaraan PKKMB 2025, Engineering Festival
                            (E-Fest) 2025, serta berbagai kegiatan dan program
                            kerja lainnya. Melalui pengalaman tersebut, saya
                            mengembangkan kemampuan dalam manajemen acara,
                            koordinasi tim, komunikasi organisasi, pemecahan
                            masalah, dan kepemimpinan, yang mendukung saya dalam
                            bekerja secara efektif baik di lingkungan akademik
                            maupun organisasi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
