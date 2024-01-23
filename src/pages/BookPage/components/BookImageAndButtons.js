// BookImageAndButtons.js
import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
// import IssueCopyModal from './IssueCopyModal.js';
import RequestCopyModal from './RequestCopyModal.js';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useNavigate } from 'react-router-dom';
import EditBookModal from './EditBookModal.js';
import { deleteBook } from '../../../ApiCalls.js';
import { useAuth } from '../../AuthPages/AuthContext.js';

const BookImageAndButtons = ({ isAdmin, book }) => {
  const navigate = useNavigate();
  const user = useAuth();

  // /*For Admin Issue Copy*/
  // const [showIssueCopyModal, setShowIssueCopyModal] = useState(false);
  // const handleShowIssueCopyModal = () => {
  //   setShowIssueCopyModal(true);
  // };
  // const handleHideIssueCopyModal = () => {
  //   setShowIssueCopyModal(false);
  // };

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

  const handleConfirmDelete = async () => {
    try {
      // console.log('user token', user.user)
      // TODO: Perform the actual delete operation
      await deleteBook(book._id, user.user);

      // Navigate or update UI as needed
      navigate('/');
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error deleting book:', error.message);
    } finally {
      // Close the modal
      setShowDeleteModal(false);
    }
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
            bookId={book._id}
          />
        </>

      }
      {isAdmin &&
        <>
          <Button onClick={handleEditBookModal} variant="outline-dark" className="wide-button mt-3">
            Edit Book
          </Button>
          <Button onClick={handleDeleteClick} variant="outline-dark" className="wide-button mt-3">
            Delete Book
          </Button>
          {/* <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowIssueCopyModal}>
            Issue Copy
          </Button>

          <IssueCopyModal
            show={showIssueCopyModal}
            onHide={handleHideIssueCopyModal}
            bookId={book._id}
          /> */}

          <ConfirmDeleteModal
            show={showDeleteModal}
            onHide={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />

          <EditBookModal
            show={showEditBookModal}
            onHide={handleHideEditBookModal}
            bookId={book._id}
            bookData={book}
          />

        </>
      }
    </>
  );
};

export default BookImageAndButtons;
