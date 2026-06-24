import React from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Mesin Antrean PA Tanjungpinang",
            desc: "Sistem antrean digital untuk Pengadilan Agama Tanjungpinang, dilengkapi tampilan nomor antrean, informasi layanan, dan monitoring real-time.",
            tags: ["Sistem Antrean", "PA Tanjungpinang", "Dashboard"],
            images: ["/images/pa1.png", "/images/pa2.png", "/images/pa3.png"],
        },
        {
            id: 2,
            title: "Otak-Otak Factory",
            desc: "Platform manajemen produksi dan penjualan untuk pabrik otak-otak, mencakup katalog produk, pemesanan, dan laporan harian.",
            tags: ["UMKM", "UI/UX", "E-commerce"],
            images: [
                "/images/otak1.png",
                "/images/otak2.png",
                "/images/otak3.png",
            ],
        },
        {
            id: 3,
            title: "UI/UX Design Showcase",
            desc: "Desain antarmuka untuk aplikasi mobile dan web, dengan fokus pada pengalaman pengguna yang intuitif dan visual modern.",
            tags: ["Figma", "Prototyping", "Design"],
            images: [
                "/images/uiux1.png",
                "/images/uiux2.png",
                "/images/uiux3.png",
            ],
        },
    ];

    return (
        <section className="page-section" id="projects">
            <div className="section-header">
                <span className="eyebrow">Proyek Terbaru</span>
                <h2>Solusi nyata yang dirancang untuk pertumbuhan.</h2>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                        <div className="project-card-header">
                            <div>
                                <span className="project-label">
                                    Proyek #{project.id}
                                </span>
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                        <p>{project.desc}</p>

                        <div className="project-gallery">
                            {project.images.map((image, index) => (
                                <div key={index} className="project-image-card">
                                    <img
                                        src={image}
                                        alt={`${project.title} ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="tag-list">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
