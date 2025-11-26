import { useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";
import { tagSynonyms } from "../data/tagSynonyms";

const normalizeKeyword = (value: string) => value.trim().toLowerCase();

const HomePage = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [tagQuery, setTagQuery] = useState("");
    const navigate = useNavigate();

    const allTags = useMemo(() => Array.from(new Set(recipes.flatMap((recipe) => recipe.tags ?? []).filter((tag) => tag && tag.trim().length > 0))), []);
    const tagKeywords = useMemo(() => {
        const map = new Map<string, string[]>();
        allTags.forEach((tag) => {
            const synonyms = tagSynonyms[tag] ?? [];
            map.set(tag, [tag, ...synonyms]);
        });
        return map;
    }, [allTags]);
    const visibleTags = useMemo(() => {
        const query = normalizeKeyword(tagQuery);
        if (!query) {
            return allTags;
        }
        return allTags.filter((tag) => {
            const keywords = tagKeywords.get(tag) ?? [tag];
            return keywords.some((keyword) => normalizeKeyword(keyword).includes(query));
        });
    }, [allTags, tagKeywords, tagQuery]);

    const filteredRecipes = useMemo(() => (selectedTag ? recipes.filter((recipe) => (recipe.tags ?? []).includes(selectedTag)) : recipes), [selectedTag]);

    const handleCardClick = (recipeId: string) => {
        navigate(`/recipe/${recipeId}`);
    };

    const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, recipeId: string) => {
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            navigate(`/recipe/${recipeId}`);
        }
    };

    const averageTime = recipes.length ? Math.round(recipes.reduce((total, recipe) => total + recipe.time, 0) / recipes.length) : 0;

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
                <p>気分やシーンに合わせてタグを選べます。得意な味や調理法を見つけてください。</p>
                <div className="tag-search">
                    <input type="search" value={tagQuery} onChange={(event) => setTagQuery(event.target.value)} placeholder="タグを検索..." aria-label="タグを検索" />
                </div>
                <div className="tag-list">
                    <button type="button" className={`tag-chip ${selectedTag === null ? "is-selected" : ""}`} aria-pressed={selectedTag === null} onClick={() => setSelectedTag(null)}>
                        すべて
                    </button>
                    {visibleTags.map((tag) => {
                        const isSelected = selectedTag === tag;
                        return (
                            <button key={tag} type="button" className={`tag-chip ${isSelected ? "is-selected" : ""}`} aria-pressed={isSelected} onClick={() => setSelectedTag(isSelected ? null : tag)}>
                                #{tag}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section id="recipes" className="recipe-grid" aria-label="レシピ一覧">
                {filteredRecipes.length === 0 ? (
                    <p className="recipe-empty">該当するレシピが見つかりませんでした。</p>
                ) : (
                    filteredRecipes.map((recipe) => (
                        <article key={recipe.id} className="recipe-card" role="link" tabIndex={0} onClick={() => handleCardClick(recipe.id)} onKeyDown={(event) => handleCardKeyDown(event, recipe.id)}>
                            <div className="recipe-card__meta">
                                <span className="meta-pill meta-pill--time">
                                    <span aria-hidden="true">⏱</span>
                                    <span>{recipe.time}分</span>
                                </span>
                                <span className="meta-pill meta-pill--difficulty">
                                    <span aria-hidden="true">★</span>
                                    <span>{recipe.difficulty}</span>
                                </span>
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
                                <Link to={`/recipe/${recipe.id}`} onClick={(event) => event.stopPropagation()}>
                                    詳しく見る
                                </Link>
                            </div>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
};

export default HomePage;
