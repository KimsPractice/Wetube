//Each of these routes should render a template.
//The title of the page should come from the controller.
//The title of the page should come from the controller.

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const potos = (req, res) => {
  res.render("potos", { pageTitle: "Potos" });
};

export const profile = (req, res) => {
  res.render("profile", { pageTitle: "Profile" });
};
