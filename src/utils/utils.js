export const formatTopics = (topics) => {
  return topics.map(({ slug }) => {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  });
};

export const formatArticles = (body) => {
  const preview = body.split(" ");
  return preview.slice(0, 30).join(" ");
};
