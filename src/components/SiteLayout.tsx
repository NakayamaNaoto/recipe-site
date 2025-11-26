import { Link, Outlet, useLocation } from "react-router-dom";

const SiteLayout = () => {
    const location = useLocation();
    const shouldShowFooter = location.pathname !== "/";

    return (
        <div className="site-shell">
            <header className="site-header">
                <div className="site-brand">
                    <Link to="/" className="site-logo">
                        AI Recipe Studio
                    </Link>
                    <p>AI発案レシピの実験室から、毎日の食卓へ。</p>
                </div>
                <div className="site-header__cta">
                    <Link to="/request" className="primary-link">
                        レシピを依頼
                    </Link>
                    <Link to="/contact" className="ghost-link">
                        お問い合わせ
                    </Link>
                </div>
            </header>

            <main className="site-main">
                <Outlet />
            </main>

            {shouldShowFooter ? (
                <footer className="site-footer">
                    <div className="footer-cta">
                        <h2>リクエストやお問い合わせをいつでも歓迎しています</h2>
                        <p>使ってみたい素材やアレルギー対応など、フォームから気軽にお知らせください。AIシェフが次のレシピ案を考えます。</p>
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
            ) : null}
        </div>
    );
};

export default SiteLayout;
