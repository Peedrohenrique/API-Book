import book from "../../dados/02-negocios.json";

export default function handlerBooks(req, res) {
  res.status(200).json(book);
}
