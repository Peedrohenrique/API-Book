import book from "../../dados/03-romance.json";

export default function handlerBooks(req, res) {
  res.status(200).json(book);
}
