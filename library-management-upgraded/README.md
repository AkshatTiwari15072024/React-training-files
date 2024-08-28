

-------------------------------------------------------------


To merge `AddBook` and `EditRecord` into a single, reusable component, you need to account for their similarities and differences. Both components share similar forms and input handling logic but differ in how they initialize state and what actions they perform.

Here's a consolidated component named `BookForm` that can handle both adding and editing a book. This component uses props to distinguish between adding and editing modes.

### Consolidated `BookForm` Component

```javascript
import React, { useState, useEffect } from 'react';

// Common component for adding and editing books
const BookForm = ({ book, onSave, onCancel, mode }) => {
  // State for form fields
  const [bookId, setBookId] = useState('');
  const [author, setAuthor] = useState('');
  const [issuingPerson, setIssuingPerson] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');

  // Initialize form fields if in edit mode
  useEffect(() => {
    if (mode === 'edit' && book) {
      setBookId(book.bookId);
      setAuthor(book.author);
      setIssuingPerson(book.issuingPerson);
      setIssueDate(book.issueDate);
      setSubmissionDate(book.submissionDate);
    }
  }, [book, mode]);

  // Handle form field changes
  const handleIDChange = (e) => setBookId(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleIssuingPersonChange = (e) => setIssuingPerson(e.target.value);
  const handleIssueDateChange = (e) => setIssueDate(e.target.value);
  const handleSubmissionDateChange = (e) => setSubmissionDate(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      bookId,
      author,
      issuingPerson,
      issueDate,
      submissionDate,
    };
    onSave(bookData);
    // Clear fields only if adding a new book
    if (mode === 'add') {
      setBookId('');
      setAuthor('');
      setIssuingPerson('');
      setIssueDate('');
      setSubmissionDate('');
    }
  };

  return (
    <div>
      <h2>{mode === 'edit' ? 'Edit Book Details' : 'Add Record'}</h2>
      <form>
        <div>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={bookId}
            onChange={handleIDChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <label htmlFor="issuingPerson">Issuing Person:</label>
          <input
            type="text"
            id="issuingPerson"
            value={issuingPerson}
            onChange={handleIssuingPersonChange}
          />
        </div>
        <div>
          <label htmlFor="issueDate">Issuing Date:</label>
          <input
            type="text"
            id="issueDate"
            value={issueDate}
            onChange={handleIssueDateChange}
          />
        </div>
        <div>
          <label htmlFor="submissionDate">Submission Date:</label>
          <input
            type="text"
            id="submissionDate"
            value={submissionDate}
            onChange={handleSubmissionDateChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            {mode === 'edit' ? 'Save' : 'Add'}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
```

### Explanation

1. **Props**:
   - `book`: Used to populate the form fields when editing an existing book.
   - `onSave`: Callback function to handle the save action, which could be adding a new book or updating an existing one.
   - `onCancel`: Callback function to handle the cancel action.
   - `mode`: Determines whether the form is in 'add' or 'edit' mode.

2. **State Initialization**:
   - The `useEffect` hook initializes form fields with existing book data if the mode is 'edit'.

3. **Form Handling**:
   - The form submission logic and input change handlers are consolidated.

4. **Form Rendering**:
   - The heading and button labels change based on the mode.

### Usage

You can now use `BookForm` in your application like this:

```javascript
import React, { useState } from 'react';
import BookForm from './BookForm';

// Example component using BookForm
const ExampleComponent = () => {
  const [mode, setMode] = useState('add'); // 'add' or 'edit'
  const [book, setBook] = useState(null); // Book data for editing

  const handleSave = (bookData) => {
    if (mode === 'add') {
      // Add book logic
    } else {
      // Edit book logic
    }
    setMode('add'); // Reset mode after saving
  };

  const handleCancel = () => {
    setMode('add');
    setBook(null);
  };

  return (
    <div>
      <BookForm
        book={book}
        onSave={handleSave}
        onCancel={handleCancel}
        mode={mode}
      />
    </div>
  );
};

export default ExampleComponent;
```

This approach maintains the existing functionality of both `AddBook` and `EditRecord` while consolidating them into a single, reusable component.