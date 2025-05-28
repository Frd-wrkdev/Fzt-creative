const headersMiddleware = () => {
  return (req, res, next) => {
    // Remove the meta tag from the HTML and set it as a header instead
    res.setHeader('X-Frame-Options', 'DENY');
    next();
  };
};

export default headersMiddleware;
