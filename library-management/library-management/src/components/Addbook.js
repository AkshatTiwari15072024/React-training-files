import { useState } from "react";

function AddBook({ addBook, onCancel }) {
  const [bookId, setBookId] = useState("");
  const [author, setAuthor] = useState("");
  const [issuingPerson, setIssuingPerson] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");

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
    setIssueDate(e.target.value);
  }

  function handlesubmissionDateChange(e) {
    setSubmissionDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBook({
      bookId,
      author,
      issuingPerson,
      issueDate,
      submissionDate,
    });
    setBookId("");
    setAuthor("");
    setIssuingPerson("");
    setIssueDate("");
    setSubmissionDate("");
  }

  return (
    <div>
      <h2>Add Record</h2>
      <form>
      <div>
          <label>Book ID:</label>
          <input type="text" value={bookId} onChange={handleIDChange} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={handleauthorChange} />
        </div>
        <div>
          <label>Issuing Person:</label>
          <input type="text" value={issuingPerson} onChange={handleissuingPersonChange} />
        </div>
        <div>
          <label>Issuing Date:</label>
          <input
            type="text"
            value={issueDate}
            onChange={handleissuingDateChange}
          />
        </div>
        <div>
          <label>submission Date:</label>
          <input type="text" value={submissionDate} onChange={handlesubmissionDateChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddBook;
 