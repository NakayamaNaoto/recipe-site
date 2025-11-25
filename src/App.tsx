import "./App.css";
import { recipes } from "./data/recipes";

function App() {
    const allTags = Array.from(new Set(recipes.flatMap((recipe) => recipe.tags ?? []).filter((tag) => tag && tag.trim().length > 0)));

    return (
        <div className="page">
            <header className="hero">
                <p className="eyebrow">AI Recipe Studio</p>
                <h1>
                    AIでアイデアを集めた
                    <br />
                    レシピギャラリー
                </h1>
                <div className="hero-actions">
                    <a className="primary" href="#recipes">
                        レシピを見る
                    </a>
                    <a className="ghost" href="/request">
                        リクエストする
                    </a>
                </div>
                <dl className="hero-stats">
                    <div>
                        <dt>掲載レシピ</dt>
                        <dd>{recipes.length}品</dd>
                    </div>
                    <div>
                        <dt>平均調理時間</dt>
                        <dd>
                            {Math.round(
                                recipes.reduce((total, recipe) => {
                                    const minutes = parseInt(recipe.time, 10);
                                    return total + (isNaN(minutes) ? 0 : minutes);
                                }, 0) / recipes.length
                            )}
                            分
                        </dd>
                    </div>
                    <div>
                        <dt>提案タグ</dt>
                        <dd>{allTags.length}テーマ</dd>
                    </div>
                </dl>
            </header>

            <section className="tags-panel" aria-label="レシピタグ">
                <h2>人気タグ</h2>
                <p>気分にあわせてタグから絞り込むヒントをチェック。</p>
                <div className="tag-list">
                    {allTags.map((tag) => (
                        <span key={tag} className="tag-chip">
                            #{tag}
                        </span>
                    ))}
                </div>
            </section>

            <section id="recipes" className="recipe-grid" aria-label="レシピ一覧">
                {recipes.map((recipe) => (
                    <article key={recipe.id} className="recipe-card">
                        <div className="recipe-card__meta">
                            <span>{recipe.time}</span>
                            <span>{recipe.difficulty}</span>
                        </div>
                        <h3>{recipe.title}</h3>
                        <p className="recipe-card__description">{recipe.description}</p>
                        <div className="recipe-card__ingredients">
                            <p>主な材料</p>
                            <ul>
                                {recipe.ingredients.slice(0, 4).map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                                {recipe.ingredients.length > 4 ? <li>…ほか</li> : null}
                            </ul>
                        </div>
                        <div className="recipe-card__actions">
                            <a href={`/recipe/${recipe.id}`}>詳細を見る</a>
                            <button type="button">作ってみる</button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default App;
