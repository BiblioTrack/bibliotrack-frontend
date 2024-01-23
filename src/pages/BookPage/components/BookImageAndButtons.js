// BookImageAndButtons.js
import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import IssueCopyModal from './IssueCopyModal.js';
import RequestCopyModal from './RequestCopyModal.js';




const BookImageAndButtons = ({ isAdmin, book }) => {
  const navigate = useNavigate();

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
            bookId={book.id}
          />
        </>

      }
      {isAdmin &&
        <>
          <Button variant="outline-dark" className="wide-button mt-3">
            Edit Book
          </Button>
          <Button onClick={handleDeleteClick} variant="outline-dark" className="wide-button mt-3">
            Delete Book
          </Button>
          <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowIssueCopyModal}>
            Issue Copy
          </Button>

          <IssueCopyModal
            show={showIssueCopyModal}
            onHide={handleHideIssueCopyModal}
            bookId={book.id}
          />

        </>
      }
    </>
  );
};

export default BookImageAndButtons;
