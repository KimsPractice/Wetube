export const localMiddleware = (req, res, next) => {
  //The title of the website should not come from the controller, it should come from the locals
  res.locals.siteName = "Wetube";
  next();
};
