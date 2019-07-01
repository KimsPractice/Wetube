export const locals = (req, res, next) => {
  res.locals.siteTitle = "Wetube";
  next();
};
