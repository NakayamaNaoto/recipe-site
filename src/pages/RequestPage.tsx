const RequestPage = () => (
    <div className="page">
        <div className="static-page">
            <header className="section-card">
                <p className="eyebrow">Request</p>
                <h1>レシピのリクエスト</h1>
                <p className="section-lead">こんな料理がほしい、食材を使い切りたい、などリクエストをお寄せください。AIが新しいレシピ案を考えます。</p>
            </header>

            <section className="section-card">
                <h2>リクエストフォーム</h2>
                <form className="form-grid">
                    <label className="form-field">
                        <span>お名前</span>
                        <input type="text" name="name" placeholder="例: 山田 太郎" />
                    </label>
                    <label className="form-field">
                        <span>メールアドレス</span>
                        <input type="email" name="email" placeholder="example@mail.com" />
                    </label>
                    <label className="form-field form-field--full">
                        <span>希望するレシピのイメージ</span>
                        <textarea name="request" rows={5} placeholder="食材、味の方向性、時間、難易度など自由にお書きください" />
                    </label>
                    <div className="form-actions">
                        <button type="submit">送信する</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
);

export default RequestPage;
