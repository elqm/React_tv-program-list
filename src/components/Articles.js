import Sort from './Article.module.css';
import ArticleImage from './ArticleImage';
import ArticleInfo from './ArticleInfo';

function Articles() {

    return (
        <div className={ Sort.sort }>
            <ArticleImage/>
            <ArticleInfo/>
        </div>
    );
}

export default Articles;