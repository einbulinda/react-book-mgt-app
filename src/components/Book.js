import { Button, Card } from "react-bootstrap";

const Book = ({
  id,
  bookName,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookName}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity}</div>
          <div>Price: {price}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
