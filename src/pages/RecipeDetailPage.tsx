import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

const RecipeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const recipe = recipes.find((item) => item.id === id);

    if (!recipe) {
        return (
            <div className="page detail-page">
                <div className="detail-content">
                    <div className="breadcrumb">
                        <Link to="/">← レシピ一覧へ戻る</Link>
                    </div>
                    <article className="detail-card">
                        <h1>該当するレシピが見つかりません</h1>
                        <p>URLが正しいかご確認のうえ、もう一度お試しください。</p>
                        <Link className="detail-button detail-button--primary" to="/">
                            一覧に戻る
                        </Link>
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="page detail-page">
            <div className="detail-content">
                <div className="breadcrumb">
                    <Link to="/">← レシピ一覧へ戻る</Link>
                </div>
                <header className="detail-hero">
                    <div>
                        <h1>{recipe.title}</h1>
                        <p className="detail-description">{recipe.description}</p>
                        <div className="detail-meta">
                            <span className="pill">{recipe.time}分</span>
                            <span className="pill">{recipe.difficulty}</span>
                            {recipe.tags?.map((tag) => (
                                <span key={tag} className="pill pill--muted">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>
                <section className="detail-sections">
                    <article className="detail-card">
                        <h2>材料</h2>
                        <ul className="detail-list">
                            {recipe.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </article>
                    <article className="detail-card" id="steps">
                        <h2>作り方</h2>
                        <ol className="detail-steps">
                            {recipe.steps.map((step, index) => (
                                <li key={step}>
                                    <span className="step-number">{index + 1}</span>
                                    <p>{step}</p>
                                </li>
                            ))}
                        </ol>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default RecipeDetailPage;
