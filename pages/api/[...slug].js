import config from "../../config";

var request = require("request");
 
export default function handler(req, res) {
  let blog = `https://${config.BLOG_URL}/`;
  let url = `${blog}${req.query.slug.join("/")}`;
  request.get(url).pipe(res);
}
