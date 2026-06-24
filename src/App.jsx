import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        switch (page) {
            case "home":
                return <Home goToPage={setPage} />;
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            default:
                return <Home goToPage={setPage} />;
        }
    };

    return (
        <div id="app-shell">
            <nav className="app-nav">
                <div className="nav-brand">
                    <span>Portofolio</span>
                </div>
                <div className="nav-actions">
                    <button
                        className={page === "home" ? "active" : ""}
                        onClick={() => setPage("home")}
                        type="button"
                    >
                        Beranda
                    </button>
                    <button
                        className={page === "about" ? "active" : ""}
                        onClick={() => setPage("about")}
                        type="button"
                    >
                        Tentang
                    </button>
                    <button
                        className={page === "projects" ? "active" : ""}
                        onClick={() => setPage("projects")}
                        type="button"
                    >
                        Proyek
                    </button>
                    <button
                        className={page === "contact" ? "active" : ""}
                        onClick={() => setPage("contact")}
                        type="button"
                    >
                        Kontak
                    </button>
                </div>
            </nav>
            <main>{renderPage()}</main>
        </div>
    );
};

export default App;
