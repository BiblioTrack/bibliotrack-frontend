import React, { useState } from 'react';
import { Form, FormControl, Row, Col, Button } from 'react-bootstrap';
import MainSection from '../../../components/MainSection';
import { postBookData } from '../../../ApiCalls'

const AddBookSection = () => {

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const [isbn, setIsbn] = useState('');
  const [genres, setGenres] = useState('');

  const [edition, setEdition] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const [editor, setEditor] = useState('');
  const [publisher, setPublisher] = useState('');


  const [copies, setCopies] = useState('');
  const [pages, setPages] = useState('');

  const [shelf, setShelf] = useState('');
  const [floor, setFloor] = useState('');

  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new book form validation
    if (!name || !author || !isbn || !genres) {
      // Handle validation error, e.g., show an alert
      alert('Please fill in all required fields.');
      return;
    }

    // TODO: Add new book addition logic here
    const newBook = {
      name,
      author,
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

    console.log(newBook);

    addNewBook(newBook);

  };

  return (

    <MainSection title="Add New Book" mdBreakpoint={10}>
      <Form className="mt-5" onSubmit={handleSubmit} title="Add New Book" align="left">

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title *</Form.Label>
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
              <Form.Label>Author *</Form.Label>
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
              <Form.Label>ISBN *</Form.Label>
              <FormControl
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="genres">
              <Form.Label>Genres *</Form.Label>
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

        <div align='center'>
          <Button type="submit" variant="info" className="mb-3 wide-button"> Submit </Button>
        </div>

      </Form>
    </MainSection >
  );
};

export default AddBookSection;

