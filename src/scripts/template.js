export default class Template {

    sources(sources) {
        return sources
            .map(source => `<li data-id=${source.id} class="source_item">${source.name}</li>`)
            .join('');
    }

    news(articles) {
        return articles
            .map(article => `
                <div class="article news-container_article">
                    <div class="article_photo"></div>
                    <div class="article_description">
                        <h3 class="article_title">${article.title}</h3>
                        <p class="article_content">${article.description}</p>
                        <div class="article_author author">
                            <span class="author_name">${article.author}</span>
                        </div>
                    </div>
                </div>`)
            .join('');
    }
}