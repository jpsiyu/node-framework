import ArticleHemingway from './writings/article-hemingway'
import ArticleWelcome from './writings/article-welcome'

const cfgMainIndex = [
    { id: 1, name: 'Blockchain' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Wallet' },
]

const cfgSecondIndex = [
    { id: 1, mainIndex: 1, name: 'Web3js' },
    { id: 2, mainIndex: 2, name: 'POW' },
    { id: 3, mainIndex: 3, name: 'POS' },
]

const cfgArticles = [
    { id: 1, secondIndex: 1, name: 'Welcome', article: ArticleWelcome },
    { id: 2, secondIndex: 1, name: 'Hemingway', article: ArticleHemingway },
    { id: 3, secondIndex: 2, name: 'Hally Potter', article: ArticleHemingway },
]

const getSecondIndex = (mainIndex) => {
    const seconds = []
    cfgSecondIndex.forEach(cfg => {
        if (cfg.mainIndex == mainIndex)
            seconds.push(cfg)
    })
    return seconds
}

const getArticlesBySecondIndex = (secondIndex) => {
    const articles = []
    cfgArticles.forEach(cfg => {
        if (cfg.secondIndex == secondIndex)
            articles.push(cfg)
    })
    return articles
}

const getFirstArticle = () => {
    return cfgArticles[0]
}

export {
    cfgMainIndex,
    cfgSecondIndex,
    cfgArticles,
    getSecondIndex,
    getArticlesBySecondIndex,
    getFirstArticle,
}