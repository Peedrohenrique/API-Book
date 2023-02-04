import book from "../../dados/02-negocios.json";

export default function handlerBook(req, res) {
  const { id } = req.query;

  const filtered = book.filter((p) => p.id === parseInt(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Livro com id: ${id} não encontrado.` });
}
