import React from "react";

const Projects = () => {
    const projects = [
        { id: 1, title: "Project 1", desc: "Deskripsi project 1" },
        { id: 2, title: "Project 2", desc: "Deskripsi project 2" },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>Proyek Saya</h2>
            {projects.map((p) => (
                <div
                    key={p.id}
                    style={{
                        border: "1px solid #ccc",
                        margin: "10px",
                        padding: "10px",
                    }}
                >
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
