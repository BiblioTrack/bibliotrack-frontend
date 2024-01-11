import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col, FormControl } from 'react-bootstrap';

const EditBookModal = ({ show, onHide, bookId, bookData }) => {

  const [title, setTitle] = useState(bookData.title);
  const [author, setAuthor] = useState(bookData.author);

  const [isbn, setIsbn] = useState(bookData.isbn);
  const [category, setCategory] = useState(bookData.category);

  const [edition, setEdition] = useState(bookData.edition);
  const [publishYear, setPublishYear] = useState(bookData.publishYear);

  const [editor, setEditor] = useState(bookData.edition);
  const [publisher, setPublisher] = useState(bookData.publisher);


  const [copies, setCopies] = useState(bookData.copies);
  const [pageCount, setPageCount] = useState(bookData.pageCount);

  const [shelf, setShelf] = useState(bookData.shelf);
  const [floor, setFloor] = useState(bookData.floor);

  const [description, setDescription] = useState(bookData.description);

  // const [formData, setFormData] = useState({
  //   title: '',
  //   author: '',
  // });

  // useEffect(() => {
  //   // Set the form data to default values when the modal opens
  //   setFormData({
  //     title: bookData.title || '',
  //     author: bookData.author || '',
  //   });
  // }, [bookData]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSave = () => {
  //   // Call the onSave function with the updated form data
  //   onSave(formData);
  //   onHide(); // Close the modal after saving
  // };

  const handleBookEdit = () => {

    //   TODO: validate that Title is not emplty and CopyNumber aren't empty

    //   Validate return date and issue date
    //   if (!dueDate || !issueDate) {
    //     alert('Issue and due date cannot be empty');
    //     return;
    //   }
    //   else if (new Date(dueDate) < new Date(issueDate)) {
    //     alert('Due date must be after issue date');
    //     return;
    //   }

    // TODO: EditBook API Call
    const bookData = {
      bookId,
      title,
      isbn,
      category,
      edition,
      publishYear,
      editor,
      publisher,
      copies,
      pageCount,
      shelf,
      floor,
      description,
    };

    console.log(`Editing book copy: ${JSON.stringify(bookData)}`);

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <FormControl
                  type="text"
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
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Page Count</Form.Label>
                <FormControl
                  type="int"
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
        <Button variant="info" onClick={handleBookEdit}>
          Edit Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBookModal;
