import { Link, Outlet } from "react-router-dom";
import { recipes } from "../data/recipes";

const SiteLayout = () => {
    const detailLink = recipes.length > 0 ? `/recipe/${recipes[0].id}` : "/";
    const quickLinks = [
        { path: "/", label: "Home" },
        { path: detailLink, label: "Recipe Detail" },
        { path: "/request", label: "Request" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <div className="site-shell">
            <header className="site-header">
                <div className="site-brand">
                    <Link to="/" className="site-logo">
                        AI Recipe Studio
                    </Link>
                    <p>AI発案レシピの実験室から、毎日の食卓へ。</p>
                </div>
                <nav className="quick-links" aria-label="Quick Links">
                    <ul>
                        {quickLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="site-header__cta">
                    <Link to="/request" className="primary-link">
                        レシピを依頼
                    </Link>
                    <Link to="/contact" className="ghost-link">
                        問い合わせ
                    </Link>
                </div>
            </header>

            <main className="site-main">
                <Outlet />
            </main>

            <footer className="site-footer">
                <div className="footer-cta">
                    <h2>リクエストやお問い合わせをいつでも歓迎しています</h2>
                    <p>使い切りたい食材やアレルギー対応など、フォームから気軽にお知らせください。AIシェフが次のレシピ案を考えます。</p>
                    <div className="footer-cta__actions">
                        <Link to="/request" className="primary-link">
                            リクエストフォームへ
                        </Link>
                        <Link to="/contact" className="ghost-link">
                            お問い合わせへ
                        </Link>
                    </div>
                </div>
                <p className="footer-note">© {new Date().getFullYear()} AI Recipe Studio</p>
            </footer>
        </div>
    );
};

export default SiteLayout;
