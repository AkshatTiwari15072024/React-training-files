import React, { useState } from "react";

const EditRecord = ( { book, editBooks, onCancel } ) => {
    const [bookId, setBookId] = useState(book.bookId);
    const [author, setAuthor] = useState(book.author);
    const [issuingPerson, setIssuingPerson] = useState(book.issuingPerson);
    const [issueDate, setIssuingDate] = useState(book.issueDate);
    const [submissionDate, setSubmissionDate] = useState(book.submissionDate);
  
    function handleIDChange(e) {
        setBookId(e.target.value);
      }
    
    function handleauthorChange(e) {
        setAuthor(e.target.value);
      }
    
    function handleissuingPersonChange(e) {
        setIssuingPerson(e.target.value);
      }
    
    function handleissuingDateChange(e) {
        setIssuingDate(e.target.value);
      }
    
    function handlesubmissionDateChange(e) {
        setSubmissionDate(e.target.value);
      }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecord = {
        bookId,
        author,
        issuingPerson,
        issueDate,
        submissionDate,
    };
    editBooks(updatedRecord);
  };

  return (
    <div>
      <h2>Edit Book Details</h2>
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
            onChange={handleauthorChange}
          />
        </div>
        <div>
          <label htmlFor="issuingPerson">Issuing Person</label>
          <input
            type="text"
            id="issuingPerson"
            value={issuingPerson}
            onChange={handleissuingPersonChange}
          />
        </div>
        <div>
          <label htmlFor="issuingDate">Issuing Date</label>
          <input
            type="text"
            id="issuingDate"
            value={issueDate}
            onChange={handleissuingDateChange}
          />
        </div>
        <div>
          <label htmlFor="submissionDate">Submission Date</label>
          <input
            type="text"
            id="submissionDate"
            value={submissionDate}
            onChange={handlesubmissionDateChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecord;