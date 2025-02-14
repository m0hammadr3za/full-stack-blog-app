import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StandardCard from "../components/StandardCard";
import Wallpaper from "../components/Wallpaper";
import "../styles/Article.scss";

export default function Article({ article, getArticle }) {
  const { articleId } = useParams();

  useEffect(() => {
    if (articleId) getArticle(articleId);
    else getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleId]);

  if (!article) return null;

  return (
    <>
      <header>
        <Navbar />
        <Wallpaper title={article.title} image={article.imageURL} />
      </header>

      <main className="container">
        <section
          className="article-description"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />

        <section className="related-articles">
          <div className="related-articles__title">
            <h1>Related Articles</h1>
            <hr className="related-articles__separator" />
          </div>
          <div className="related-articles__cards">
            {article.relatedArticles.map((relatedArticle) => {
              return (
                <Link to={`/${relatedArticle._id}`} key={relatedArticle._id}>
                  <StandardCard data={relatedArticle} />
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="container">
        <div className="copyright">
          <p className="copyright__text">
            Designed and developed by m0hammadr3za
          </p>
          <a
            className="copyright__link"
            href="https://github.com/m0hammadr3za"
            target="_blank"
            rel="noreferrer"
          >
            Github Page
          </a>
        </div>
      </footer>
    </>
  );
}
