import book from "../../dados/romance.json";

export default function handlerBooks(req, res) {
  res.status(200).json(book);
}
