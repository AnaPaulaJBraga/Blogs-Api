const postService = require('../services/post');

const validatePost = (req, _res, next) => {
    const { title, content, categoryIds } = req.body;
    const validation = postService.validatePost({ title, content, categoryIds });

    if (validation.error) return next(validation.error);

    next();
}; 

const create = async (req, res, next) => {
    const { userId } = req;
    const { title, content, categoryIds } = req.body;
    const post = await postService.create({ title, content, categoryIds, userId });

    if (post.error) return next(post.error);

    res.status(201).json(post);
   };

const getAll = async (_req, res) => {
    const posts = await postService.getAll();
    
    res.status(200).json(posts);
};

module.exports = {
    create,
    validatePost,
    getAll,
  };