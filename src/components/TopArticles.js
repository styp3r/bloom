import TopArticlesList from './topArticlesList'
import TopArticlesBox from './TopArticlesBox';

export default function TopArticles(props){

    function dispArt(e){
        return <TopArticlesBox key={e.id} title={e.title} author={e.author} date={e.date}/>
    }

    return(
        <div id="topArticles">
            {TopArticlesList.map(dispArt)}
        </div>
    );
}