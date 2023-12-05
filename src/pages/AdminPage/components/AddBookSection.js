import React, { useState } from 'react';
import { Form, FormControl, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import AdminSection from './AdminSection';


const AddBookSection = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [isbn, setIsbn] = useState('');
  const [category, setCategory] = useState('');

  const [edition, setEdition] = useState('');
  const [publishYear, setPublishYear] = useState('');

  const [editor, setEditor] = useState('');
  const [publisher, setPublisher] = useState('');


  const [copies, setCopies] = useState('');
  const [pageCount, setPageCount] = useState('');

  const [shelf, setShelf] = useState('');
  const [floor, setFloor] = useState('');

  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new book addition logic here
  };

  return (

    <AdminSection title="Add New Book to the System" description="">
      <Form className="mt-5" onSubmit={handleSubmit} title="Add New Book to the System" align="left">

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <FormControl
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <FormControl
                type="text"
                placeholder="Author"
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
                placeholder="ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <FormControl
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                placeholder="Edition"
                value={edition}
                onChange={(e) => setEdition(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="publishYear">
              <Form.Label>Publish Year</Form.Label>
              <FormControl
                type="text"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="editor">
              <Form.Label>Editor</Form.Label>
              <FormControl
                type="text"
                placeholder="editor"
                value={editor}
                onChange={(e) => setEditor(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="publisher">
              <Form.Label>Publisher</Form.Label>
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
                placeholder="Copies"
                value={copies}
                onChange={(e) => setCopies(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="pageCount">
              <Form.Label>Page Count</Form.Label>
              <FormControl
                type="int"
                placeholder="Page Count"
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
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
                placeholder="Shelf"
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
                placeholder="Floor"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <FormControl
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div align='center'>
          <Button type="submit" variant="info" className="mb-3 admin-button"> Add </Button>
        </div>

      </Form>
    </AdminSection >
  );
};

export default AddBookSection;

