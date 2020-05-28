import axios from "axios";

export const fetchArticle = (articleId) => {
  console.log("inside fetchArticle");
  return axios
    .get(`https://stephanies-news.herokuapp.com/api/articles/${articleId}`)
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticles = (topic, author) => {
  return axios
    .get("https://stephanies-news.herokuapp.com/api/articles", {
      params: {
        topic,
        author,
        /*sort_by,
        order,*/
      },
    })
    .then(({ data: { articles } }) => {
      console.dir(articles);
      return articles;
    });
};

export const fetchArticlesByQuery = (sort_by, order) => {
  console.log(sort_by);
  return axios
    .get(
      `https://stephanies-news.herokuapp.com/api/articles?author&sort_by=${sort_by}&order=${order}`
    )
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://stephanies-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const fetchComments = (articleId) => {
  return axios
    .get(
      `https://stephanies-news.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const addArticleComment = (articleId, comment) => {
  return axios
    .post(
      `https://stephanies-news.herokuapp.com/api/articles/${articleId}/comments`,
      comment
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getUser = (username) => {
  return axios
    .get(`https://stephanies-news.herokuapp.com/api/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
    });
};

export const deleteComment = (commentId) => {
  return axios.delete(
    `https://stephanies-news.herokuapp.com/api/comments/${commentId}`
  );
};

export const patchVote = (id, path, vote) => {
  console.log(vote);
  return axios
    .patch(`https://stephanies-news.herokuapp.com/api/${path}/${id}`, {
      inc_votes: vote,
    })
    .then(({ data }) => {
      return data;
    });
};
