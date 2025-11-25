const ContactPage = () => (
    <div className="page">
        <div className="static-page">
            <header className="section-card">
                <p className="eyebrow">Contact</p>
                <h1>お問い合わせ</h1>
                <p className="section-lead">サイトに関するご意見や改善提案など、お気軽にお知らせください。</p>
            </header>

            <section className="section-card">
                <h2>フォーム</h2>
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
                        <span>お問い合わせ内容</span>
                        <textarea name="message" rows={5} placeholder="ご質問・ご感想などをご記入ください" />
                    </label>
                    <div className="form-actions">
                        <button type="submit">送信する</button>
                    </div>
                </form>
            </section>

            <section className="section-card">
                <h2>その他の連絡手段</h2>
                <ul className="detail-list">
                    <li>メール: info@example.com</li>
                    <li>SNS: @ai_recipe_lab</li>
                </ul>
            </section>
        </div>
    </div>
);

export default ContactPage;
