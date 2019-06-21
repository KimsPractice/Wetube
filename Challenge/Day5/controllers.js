/*
/
/join
/login
/confirm-account
/courses,
/courses/new,
/courses/mine
/api/documentation
/api/v1/buy
/api/v1/refund
/api/v2/remove
/api/v2/edit
*/

//globalControllers
export const home = (req, res) => res.send("Home");
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const confirmAccount = (req, res) => res.send("Confirm Account");

//coursesControllers
export const courses = (req, res) => res.send("Courses");
export const courses_new = (req, res) => res.send("Courses New");
export const courses_mine = (req, res) => res.send("Courses Mine");

//apiControllers
export const api = (req, res) => res.send("API");
export const api_documentaion = (req, res) => res.send("API Docoument");

//apiV1Controllers
export const api_v1 = (req, res) => res.send("API V1");
export const api_v1_buy = (req, res) => res.send("API V1 Buy");
export const api_v1_refund = (req, res) => res.send("API V1 Refund");

//apiV2Controllers
export const api_v2 = (req, res) => res.send("API V2");
export const api_v2_edit = (req, res) => res.send("API V2 Edit");
export const api_v2_remove = (req, res) => res.send("API V2 Remove");
