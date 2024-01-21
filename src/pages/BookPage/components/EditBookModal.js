import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, FormControl } from 'react-bootstrap';
import { editBookData } from '../../../ApiCalls'


const EditBookModal = ({ show, onHide, bookId, bookData, onSubmit }) => {

  const [name, setName] = useState(bookData.name);
  const [author, setAuthor] = useState(bookData.author);

  const [isbn, setIsbn] = useState(bookData.isbn);
  const [genres, setGenres] = useState(bookData.genres);

  const [edition, setEdition] = useState(bookData.edition);
  const [publicationDate, setPublicationDate] = useState(bookData.publicationDate);

  const [editor, setEditor] = useState(bookData.edition);
  const [publisher, setPublisher] = useState(bookData.publisher);


  const [copies, setCopies] = useState(bookData.copies);
  const [pages, setPages] = useState(bookData.pages);

  const [shelf, setShelf] = useState(bookData.shelf);
  const [floor, setFloor] = useState(bookData.floor);

  const [imageUrl, setImageUrl] = useState(bookData.imageUrl);
  const [description, setDescription] = useState(bookData.description);


  const handleBookEdit = () => {

    //   TODO: validate that Title is not emplty and CopyNumber aren't empty


    // TODO: EditBook API Call
    const bookData = {
      bookId,
      name,
      isbn,
      genres,
      edition,
      publicationDate,
      editor,
      publisher,
      copies,
      pages,
      shelf,
      floor,
      imageUrl,
      description,

    };

    console.log(`Editing book copy: ${JSON.stringify(bookData)}`);
    editBookData(bookId, bookData);

    onHide();

  };



  return (
    <Modal show={show} onHide={onHide} onSubmit={handleBookEdit} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Title</Form.Label>
                <FormControl
                  type="text"
                  value={name}
                  data-testid='bookNameTest'
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <FormControl
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="isbn">
                <Form.Label>ISBN</Form.Label>
                <FormControl
                  type="text"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="genres">
                <Form.Label>Genres</Form.Label>
                <FormControl
                  type="text"
                  value={genres}
                  onChange={(e) => setGenres(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="edition">
                <Form.Label>Edition</Form.Label>
                <FormControl
                  type="int"
                  value={edition}
                  onChange={(e) => setEdition(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="publicationDate">
                <Form.Label>Publish Year</Form.Label>
                <FormControl
                  type="text"
                  value={publicationDate}
                  onChange={(e) => setPublicationDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="editor">
                <Form.Label>Editor Name</Form.Label>
                <FormControl
                  type="text"
                  value={editor}
                  onChange={(e) => setEditor(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="publisher">
                <Form.Label>Publisher Name</Form.Label>
                <FormControl
                  type="text"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="copies">
                <Form.Label>Copies</Form.Label>
                <FormControl
                  type="text"
                  value={copies}
                  onChange={(e) => setCopies(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="pages">
                <Form.Label>Page Count</Form.Label>
                <FormControl
                  type="int"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="shelf">
                <Form.Label>Shelf</Form.Label>
                <FormControl
                  type="int"
                  value={shelf}
                  onChange={(e) => setShelf(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="floor">
                <Form.Label>Floor</Form.Label>
                <FormControl
                  type="int"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Book Cover Link</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>


        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="info" type="submit" onClick={handleBookEdit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBookModal;
