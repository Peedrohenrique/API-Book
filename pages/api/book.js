import book from "../dados/book.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(book);
}
