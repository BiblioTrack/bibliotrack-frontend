// BookImageAndButtons.js
import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import IssueCopyModal from './IssueCopyModal.js';
import RequestCopyModal from './RequestCopyModal.js';
import EditBookModal from './EditBookModal.js';


const BookImageAndButtons = ({ isAdmin, book }) => {
  /*For Admin Issue Copy*/
  const [showIssueCopyModal, setShowIssueCopyModal] = useState(false);
  const handleShowIssueCopyModal = () => {
    setShowIssueCopyModal(true);
  };
  const handleHideIssueCopyModal = () => {
    setShowIssueCopyModal(false);
  };

  /*For User Request Copy*/
  const [showRequestCopyModal, setRequestCopyModal] = useState(false);
  const handleShowRequestCopyModal = () => {
    setRequestCopyModal(true);
  };
  const handleHideRequestCopyModal = () => {
    setRequestCopyModal(false);
  };

  /*For Admin Edit Book*/
  const [showEditBookModal, setEditBookModal] = useState(false);
  const handleEditBookModal = () => {
    setEditBookModal(true);
  };
  const handleHideEditBookModal = () => {
    setEditBookModal(false);
  };

  return (
    <>
      <Image src={book.coverImage} alt="Image Unavailable" fluid className="bookcover-image" />
      {!isAdmin &&
        <>
          <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowRequestCopyModal}>
            Request Copy
          </Button>
          <RequestCopyModal
            show={showRequestCopyModal}
            onHide={handleHideRequestCopyModal}
            bookId={book._id}
          />
        </>

      }
      {isAdmin &&
        <>
          <Button variant="outline-dark" className="wide-button mt-3" onClick={handleEditBookModal}>
            Edit Book
          </Button>
          <EditBookModal
            show={showEditBookModal}
            onHide={handleHideEditBookModal}
            bookId={book._id}
            bookData={book}
          />
          <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowIssueCopyModal}>
            Issue Copy
          </Button>
          <IssueCopyModal
            show={showIssueCopyModal}
            onHide={handleHideIssueCopyModal}
            bookId={book._id}
          />

        </>
      }
    </>
  );
};

export default BookImageAndButtons;
