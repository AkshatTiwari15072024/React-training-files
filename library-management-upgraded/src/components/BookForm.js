import React, { useState, useEffect } from 'react';

const BookForm = ({ book, onSave, onCancel, mode}) => {
  const [bookId, setBookId] = useState('');
  const [author, setAuthor] = useState('');
  const [check, setCheck] = useState('');
  const [issuingPerson, setIssuingPerson] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');

  const authors = ['J.K. Rowling','George Orwell', 'J.R.R. Tolkien', 'Jane Austen', 'Agatha Christie','Stephen King','Mark Twain','F. Scott Fitzgerald'];


  useEffect(() => {
    if (mode === 'edit' && book) {
      setBookId(book.bookId);
      setAuthor(book.author);
      setCheck(book.check);
      setIssuingPerson(book.issuingPerson);
      setIssueDate(book.issueDate);
      setSubmissionDate(book.submissionDate);
    }
  }, [book, mode]);

  const handleIDChange = (e) => setBookId(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleCheckChange = (e) => setCheck(e.target.value);
  const handleIssuingPersonChange = (e) => setIssuingPerson(e.target.value);
  const handleIssueDateChange = (e) => setIssueDate(e.target.value);
  const handleSubmissionDateChange = (e) => setSubmissionDate(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      bookId,
      author,
      check,
      issuingPerson,
      issueDate,
      submissionDate,
    };
    onSave(bookData);
    if (mode === 'add') {
      setBookId('');
      setAuthor('');
      setCheck('');
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
          <select
            id="author"
            value={author}
            onChange={handleAuthorChange}
          >
            <option value="" disabled>Select an author</option>
            {authors.map((authorName, index) => (
              <option key={index} value={authorName}>
                {authorName}
              </option>
            ))}
          </select>
          {/* <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          /> */}
        </div>
        <div>
          <label>Book Before 1947?</label>
          <div>
            <label>
              <input
                type="radio"
                name="check"
                value="true"
                checked={check === 'true'}
                onChange={handleCheckChange}
              />
              true
            </label>
            <label>
              <input
                type="radio"
                name="check"
                value="false"
                checked={check === 'false'}
                onChange={handleCheckChange}
              />
              false
            </label>
          </div>
        </div>
        {/* <div>
          <label htmlFor="check">Book Before 1947?</label>
          <input
            type="text"
            id="check"
            value={check}
            onChange={handleCheckChange}
          />
        </div> */}
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
