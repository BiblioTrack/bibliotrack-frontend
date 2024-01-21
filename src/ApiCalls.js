// Assume you have an API endpoint for fetching issue history and issue requests
const API_BASE_URL = 'http://localhost:8080/api';

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
export const fetchIssueHistory = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/issues`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

export const fetchIssueHistorySingleUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/issues?userId=${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

export const fetchIssueHistorySingleBook = async (bookId) => {
  try {
    // Replace 'your-api-base-url' with the actual base URL of your API
    const response = await fetch(`${API_BASE_URL}/issues?bookId=${bookId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return [];
  }
};

// Function to fetch all issue requests from the API
export const fetchIssueRequests = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/requests`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue requests:', error);
    return [];
  }
};

// Function to fetch all issue requests from the API
export const fetchIssueRequestsSingleUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/requests?userId=${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issue requests:', error);
    return [];
  }
};

export const postBookData = async (bookData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
