// Assume you have an API endpoint for fetching issue history and issue requests
const API_BASE_URL = 'https://your-api-base-url.com';

const fetchAllBooks = async () => {
    try {
      const response = await fetch(`/books/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  };

const fetchBook = async (id) => {
    try {
      const response = await fetch(`/books/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching book details:', error);
      return null;
    }
  };


// Function to fetch all issue history from the API
const fetchIssueHistory = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/issues`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching issue history:', error);
    return []; 
  }
};

// Function to fetch all issue requests from the API
const fetchIssueRequests = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/requests`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching issue requests:', error);
    return []; 
  }
};

const fetchIssueHistorySingleBook = async (bookId) => {
    try {
      // Replace 'your-api-base-url' with the actual base URL of your API
      const response = await fetch(`/issues?bookId=${bookId}`);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching issue history:', error);
      return [];
    }
};
  