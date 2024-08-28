import React from "react";

const DeleteRecord = ({ book, deleteRecord, onCancel }) => {
//   const handleDelete = () => {
//  deleteRecord(book.bookId); 
// };

console.log(book)
  return (
    <div>
      <h2>Delete Record</h2>
      <p>Are you sure you want to delete BookID {book.bookId} with author name {book.author}?</p>
      <button onClick={() => deleteRecord(book.bookId)}>Delete</button>

      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteRecord;
