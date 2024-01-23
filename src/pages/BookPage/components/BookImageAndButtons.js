// BookImageAndButtons.js
import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import IssueCopyModal from './IssueCopyModal.js';
import RequestCopyModal from './RequestCopyModal.js';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useNavigate } from 'react-router-dom'; import EditBookModal from './EditBookModal.js';


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
  /*For Delete Book*/
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Perform the actual delete operation
    console.log(book.id);
    navigate('/');

    // Close the modal
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    // Close the modal without performing any action
    setShowDeleteModal(false);
  };

  return (
    <>
      <Image src={book.imageUrl} alt="Image Unavailable" fluid className="bookcover-image" />
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
          <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowIssueCopyModal}>
            Issue Copy
          </Button>

          <IssueCopyModal
            show={showIssueCopyModal}
            onHide={handleHideIssueCopyModal}
            bookId={book.id}
          />

          <ConfirmDeleteModal
            show={showDeleteModal}
            onHide={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />

        </>
      }
    </>
  );
};

export default BookImageAndButtons;
