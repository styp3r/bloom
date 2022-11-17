export default function TopArticlesBox(props){
    return(
        <div id="top-articles-box">
            <p className="article-title">{props.title}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    );
}