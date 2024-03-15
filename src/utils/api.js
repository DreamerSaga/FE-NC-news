import axios from "axios"

const beNcNews = axios.create({baseURL: 'https://nc-news-n626.onrender.com/api/'})


export const getArticles = (
    topic,
    page = 1,
    limit = 9,
    sortBy = 'created_at',
    order = 'asc'
  ) => {
    return beNcNews
      .get('/articles/', {
        params: {
          topic: topic,
          p: page,
          limit: limit,
          sort_by: sortBy,
          order: order,
        },
      })
      .then((res) => {
        return res.data.articles;
      });
  };
  
  export const getSingleArticle = (articleId) => {
    return beNcNews.get(`/articles/${articleId}`).then((res) => {
        return res.data.article;
    });
  };
  
  export const updateArticle = (articleId, update) => {
    return beNcNews
      .patch(`/articles/${articleId}`, { inc_votes: update })
      .then((res) => {
        return res.data;
      });
  };

  export const getComments = (articleId) => {
    return beNcNews.get(`/articles/${articleId}/comments`).then((res) => {
      return res.data.comments;
    });
  };
  
  export const postComment = (articleId, comment) => {
    return beNcNews
      .post(`/articles/${articleId}/comments/`, comment)
      .then((res) => {
        return res;
      });
  };
  
  export const deleteComment = (commentId) => {
    return beNcNews.delete(`/comments/${commentId}`)
    .then((res) => {
      return res;
    });
  };
  
  export const getTopics = () => {
    return beNcNews.get('/topics/').then((res) => {
      return res.data.topics;
    });
  };
  
  // export const getUser = (username) => {
  //   return beNcNews.get('/users/' + username).then((res) => {
  //     return res.data;
  //   });
  // };