import React from "react";

const BookList = ({ book, onDelete, onEdit, onAdd, setMode}) => {

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th> BookID </th>
            <th> Author </th>
            <th> Book Before 1947 </th>
            <th> Issuing Person  </th>
            <th>  Issuing Date  </th>
            <th>  Submission Date </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {book.map((books) => (
            <tr key={books.bookId}>
              <td>{books.bookId}</td>
              <td>{books.author}</td>
              <td>{books.check}</td>
              <td>{books.issuingPerson}</td>
              <td>{books.issueDate}</td>
              <td>{books.submissionDate}</td>
              <td>
                <button onClick={() => {
                  onEdit(books.bookId);
                  setMode("edit");
                }}>Edit</button>
                <button onClick={() => onDelete(books.bookId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={()=>{
        onAdd();
        setMode("add");
      }}>Add New Entry</button>
    </div>
  );
};

export default BookList;
