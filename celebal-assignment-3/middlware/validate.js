const validateUser = (req, res, next) => {
    const userId = req.params.id;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }
    next();
};

module.exports = validateUser;