import axios from "axios";

export default class SearchController {
  static async search(req, res) {
    const searchTerm = req.query.searchTerm;

    if (!searchTerm) {
      return res.status(400).json({ error: "searchTerm is required" });
    }
    const { data } = await axios.get("https://www.mediawiki.org/w/api.php", {
      params: {
        srsearch: searchTerm,
        format: "json",
        list: "search",
        action: "query",
      },
    });

    res.json({ data, error: null });
  }
}
