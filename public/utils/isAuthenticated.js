const isAuthenticated = (req, res, next) => {
    // Check if the user is logged in
    if (req.isAuthenticated()) {
        // User is authenticated, allow access to the route
        return next();
    }

    // User is not authenticated, redirect to login page or send an error response
    res.redirect('/login'); // Replace '/login' with the appropriate login route

    // Alternatively, you can send an error response
     res.status(401).json({ error: 'Unauthorized' });
};

module.exports = isAuthenticated;