import axios from "axios";

export const fetchArticles = (topic) => {
  console.log(topic); // football / coding
  // const lcTopic = topic.toLowerCase();
  return axios
    .get("https://stephanies-news.herokuapp.com/api/articles", {
      // ?topic=football
      params: {
        topic,
      },
    })
    .then(({ data: { articles } }) => {
      console.log(articles);
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://stephanies-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      console.log(topics);
      return topics;
    });
};

export const fetchComments = (articleId) => {
  return axios
    .get(
      `https://stephanies-news.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(({ data: { comments } }) => {
      console.dir(comments);
      return comments;
    });
};

export const addArticleComment = (articleId, comment) => {
  console.log(articleId);
  return axios
    .post(
      `https://stephanies-news.herokuapp.com/api/articles/${articleId}/comments`,
      comment
    )
    .then(({ data: { comment } }) => {
      console.log(comment);
      return comment;
    });
};
