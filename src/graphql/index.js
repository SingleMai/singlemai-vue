// const outsideArticle = require('./outsideArticle');
import outsideArticle from './outsideArticle';
import blogArticle from './blogArticle';
import articleTag from './articleTag';
import tagCategory from './tagCategory';
import user from './user';

export default Object.assign(
  {},
  {
    ...outsideArticle,
    ...blogArticle,
    ...articleTag,
    ...tagCategory,
    ...user
  }
);
