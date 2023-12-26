// BookImageAndButtons.js
import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import IssueCopyModal from '../components/IssueCopyModal.js';

const BookImageAndButtons = ({ isAdmin , book }) => {
  const [showIssueCopyModal, setShowIssueCopyModal] = useState(false);

  const handleShowIssueCopyModal = () => {
    setShowIssueCopyModal(true);
  };

  const handleHideIssueCopyModal = () => {
    setShowIssueCopyModal(false);
  };

  return (
        <>
          <Image src={book.coverImage} alt="Image Unavailable" fluid className="bookcover-image" />
          {!isAdmin &&
            <Button variant="outline-dark" className="wide-button mt-3">
              Request Copy
            </Button>
          }
          {isAdmin &&
            <>
            <Button variant="outline-dark" className="wide-button mt-3">
              Edit Book
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
