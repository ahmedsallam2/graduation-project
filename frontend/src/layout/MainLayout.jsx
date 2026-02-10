// src/layouts/MainLayout.jsx
import Header from "./../components/Header.jsx";

export default function MainLayout({ children }) {
    return (
        <div className="app-layout">
            <Header />
            <main className="page-content">
                {children}
            </main>
        </div>
    );
}
