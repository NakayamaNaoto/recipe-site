const AboutPage = () => (
    <div className="page">
        <div className="static-page">
            <header className="section-card">
                <p className="eyebrow">About</p>
                <h1>AI Recipe Static Siteとは</h1>
                <p className="section-lead">このサイトは、AIが提案したレシピを通じて、学習とプロトタイピングを楽しく進めるためのデモSPAです。データベースは使わず、静的な配列からページを生成しています。</p>
            </header>

            <section className="section-card">
                <h2>目的</h2>
                <p>ReactとTypeScript、Viteでシンプルなレシピサイトを構築しながら、イベント計測やページ遷移の学習素材として利用することを目指しています。</p>
                <ul className="detail-list">
                    <li>静的データでSPAを組み立てる手順を理解する</li>
                    <li>ページ遷移とコンポーネント設計のベストプラクティスを体験する</li>
                    <li>UIコンポーネントを再利用しやすい形で分解する</li>
                </ul>
            </section>

            <section className="section-card">
                <h2>技術スタック</h2>
                <ul className="detail-list">
                    <li>React 18 + TypeScript</li>
                    <li>Viteによる開発・ビルド</li>
                    <li>React Router v6+によるルーティング</li>
                </ul>
            </section>
        </div>
    </div>
);

export default AboutPage;
