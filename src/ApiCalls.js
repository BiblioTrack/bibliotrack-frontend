// Assume you have an API endpoint for fetching issue history and issue requests

export const API_BASE_URL = 'http://localhost:8080/api';

export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBook = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}`);
    const data = await response.json();
    return data;

  } catch (error) {

    console.error('Error fetching book details:', error);
    return null;
  }
};


// Function to fetch all issue history from the API
export const fetchIssueHistory = async (user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/issues`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

export const fetchIssueHistorySingleUser = async (user) => {

  const userId = user.userinfo._id;
  const token = user.token;

  try {
    const response = await fetch(`${API_BASE_URL}/issues?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

export const fetchIssueHistorySingleBook = async (bookId, user) => {
  try {
    // Replace 'your-api-base-url' with the actual base URL of your API
    const response = await fetch(`${API_BASE_URL}/issues?bookId=${bookId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

// Function to fetch all issue requests from the API
export const fetchIssueRequests = async (user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookRequests`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue requests:', error);
    return [];
  }
};

// Function to fetch all issue requests from the API
export const fetchIssueRequestsSingleUser = async (user) => {
  const userId = user.userinfo._id;
  const token = user.token;
  try {
    const response = await fetch(`${API_BASE_URL}/bookRequests?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue requests:', error);
    return [];
  }
};

export const addNewBook = async (bookData, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error('Failed to add book');
    }

    // Handle successful response (e.g., show success message, reset form, etc.)
    console.log('Book added successfully');
  } catch (error) {
    // Handle errors (e.g., show error message)
    console.error('Error adding book:', error.message);
  }
};

export const deleteBook = async (bookId, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete book');
    }

    // Handle successful response (e.g., show success message, update UI, etc.)
    console.log('Book deleted successfully');
  } catch (error) {
    // Handle errors (e.g., show error message)
    console.error('Error deleting book:', error.message);
  }
};


export const editBookData = async (bookId, bookData, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books?_id=${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit book');
    }

    // Handle successful response (e.g., show success message, navigate to book details, etc.)
    console.log('Book edited successfully');
  } catch (error) {
    // Handle errors (e.g., show error message)
    console.error('Error editing book:', error.message);
  }
};


export const createBookRequest = async (issueData, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookRequests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(issueData),
    });
    // console.log(response)
    if (!response.ok) {
      throw new Error('Failed to request copy');
    }

    console.log('Copy requested successfully');

  } catch (error) {
    console.error('Error requesting copy:', error.message);
    alert('Failed to request copy. Please try again.');
  }

}


export const approveBookRequest = async (requestId, updateData, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookRequests/${requestId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error('Failed to approve book request');
    }

    console.log('Book request approved successfully');

  } catch (error) {
    console.error('Error approving book request:', error.message);
    alert('Failed to approve book request. Please try again.');
  }
};


// export const fetchUserById = async (userId) => {
//   // Implement the logic to fetch user details by userId from your API
//   
// };

export const createIssueCopy = async (issueData, user) => {

  // createBookRequest(issueData, user)

  try {
    const response = await fetch(`${API_BASE_URL}/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    });

    if (!response.ok) {
      throw new Error('Failed to issue copy');
    }

    console.log('Copy issued successfully');
  } catch (error) {
    console.error('Error issuing copy:', error.message);
    alert('Failed to issue copy. Please try again.');
  }
}