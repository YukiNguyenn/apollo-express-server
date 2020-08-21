import Articles from '../../data/query-data-article.js';
import Comments from '../../data/query-data-comment.js';

const Query = {
  getArticles(root, { page, limit }, context) {
    return Articles.getArticles(page, limit);
  },
  getDetailArticle(root, { articleId }, context) {
    return Articles.getDetailArticle(articleId)
  },
  getCommentsOfArticle(root, { articleId }, context) {
    return Comments.getCommentsOfArticle(articleId)
  }
}

export default Query