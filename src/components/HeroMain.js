import ArticlesCarousel from './ArticlesCarousel'
import Trending from './Trending';
import TopArticles from './TopArticles';

export default function HeroMain() {
    return (
        <div id="heroMain">
            <div className = "heroMainHeader">
                <ArticlesCarousel />
                <Trending />
            </div>

            <div className="articles">
                <TopArticles />
            </div>
        </div>
    );
}