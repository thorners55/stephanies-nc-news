import axios from "axios";

export const fetchArticles = (topic, author) => {
  // football / coding
  // const lcTopic = topic.toLowerCase();
  return axios
    .get("https://stephanies-news.herokuapp.com/api/articles", {
      // ?topic=football
      params: {
        topic,
        author,
      },
    })
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
