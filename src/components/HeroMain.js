import ArticlesCarousel from './ArticlesCarousel'
import Trending from './Trending';
import TrendingArticles from './TrendingArticles';

export default function HeroMain() {
    return (
        <div id="heroMain">
            <div className = "heroMainHeader">
                <ArticlesCarousel />
                <Trending />
            </div>

            <div className="articles">
                <TrendingArticles />
            </div>
        </div>
    );
}