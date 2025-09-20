const API_BASE_URL = 'https://crudcrud.com/api/34f12e6c788f449b88495cd9b55e29b9';
const RESOURCE = 'books';

export const getAllBookData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/${RESOURCE}`);
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${RESOURCE}/${id}`);
    const res = await response.json();
    console.log('get by id', res);
    return res
  } catch (error) {
    console.error('Error fetching book:', error);
  }
};

export const postBookData = async (bookData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${RESOURCE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error creating book:', error);
  }
};

export const updateBookData = async (id, bookData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${RESOURCE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

export const deleteBookData = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${RESOURCE}/${id}`, {
      method: 'DELETE',
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error deleting book:', error);
  }
};