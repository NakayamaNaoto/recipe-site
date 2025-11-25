import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

const HomePage = () => {
    const allTags = Array.from(new Set(recipes.flatMap((recipe) => recipe.tags ?? []).filter((tag) => tag && tag.trim().length > 0)));
    const averageTime = recipes.length
        ? Math.round(
              recipes.reduce((total, recipe) => {
                  const minutes = parseInt(recipe.time.replace(/[^0-9]/g, ""), 10);
                  return total + (Number.isNaN(minutes) ? 0 : minutes);
              }, 0) / recipes.length,
          )
        : 0;

    return (
        <div className="page">
            <header className="hero">
                <p className="eyebrow">AI Recipe Studio</p>
                <h1>
                    AIが描く、すこし先の食卓へ
                    <br />
                    シンプルで作りやすいレシピ集
                </h1>
                <p className="hero-copy">季節の素材を手軽に使えるAI発案レシピをそろえました。30分以内で作れるものを中心に、忙しい日でも気分を変えたいときに役立ちます。</p>
                <div className="hero-actions">
                    <a className="primary" href="#recipes">
                        レシピを見る
                    </a>
                    <a className="ghost" href="/request">
                        リクエストを送る
                    </a>
                </div>
                <dl className="hero-stats">
                    <div>
                        <dt>掲載レシピ</dt>
                        <dd>{recipes.length}品</dd>
                    </div>
                    <div>
                        <dt>平均調理時間</dt>
                        <dd>{averageTime}分</dd>
                    </div>
                    <div>
                        <dt>タグ</dt>
                        <dd>{allTags.length}種類</dd>
                    </div>
                </dl>
            </header>

            <section className="tags-panel" aria-label="レシピのタグ一覧">
                <h2>キーワードで探す</h2>
                <p>気分やシーンに合わせてタグを選べます。得意な味や調理方法を見つけてください。</p>
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
                            <Link to={`/recipe/${recipe.id}`}>詳しく見る</Link>
                            <button type="button">作ってみる</button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default HomePage;
