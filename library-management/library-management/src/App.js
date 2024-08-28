import React, { useState } from "react";
import BookList from "./components/Booklist";
import AddBook from "./components/Addbook";
import EditRecord from "./components/EditRecord";
import DeleteRecord from "./components/DeleteRecord";
import data from "./data/Library.json";
import "./App.css"



function App() {
  const [library, setLibrary] = useState(data.library);
  const [currentbooks, setCurrentbooks] = useState(null);
  const [showEditbooks, setShowEditbooks] = useState(false);
  const [showAddbooks, setShowAddbooks] = useState(false);
  const [showDeletebooks, setShowDeletebooks] = useState(false);
  const [booksToDelete, setBooksToDelete] = useState(null);
  



  const handleDelete = (bookId) => {
    setBooksToDelete(library.find((book) => book.bookId === bookId));
    setShowDeletebooks(true);
  };

  const deleteRecord = (bookId) => {
    const updatedbooks = library.filter((book) => book.bookId !== bookId);
    setLibrary(updatedbooks);
    setShowDeletebooks(false);
  };

  const handleCancelDelete = () => {
    setShowDeletebooks(false);
  };

  const handleEdit = (bookId) => {
    const books = library.find((book) => book.bookId === bookId);
    setCurrentbooks(books);
    setShowEditbooks(true);
  };

  const editRecord = (updatedRecord) => {
    const updatedbook = library.map((book) =>
      book.bookId === updatedRecord.bookId ? updatedRecord : book
    );
    setLibrary(updatedbook);
    setCurrentbooks(null);
    setShowEditbooks(false);
  };


  const handleCancelEdit = () => {
    setCurrentbooks(null);
    setShowEditbooks(false);
  };

  const handleAddbooks = () => {
    setShowAddbooks(true);
  };

  const addbooks = (books) => {
    const newbooks = {
    bookId: books.bookId,
    author: books.author,
    issuingPerson: books.issuingPerson,
    issueDate: books.issueDate,
    submissionDate: books.submissionDate,
    };
    const updatedbook = [...library, newbooks];
    setLibrary(updatedbook);
    setShowAddbooks(false);
  };

  const handleCancelAdd = () => {
    setShowAddbooks(false);
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      {showDeletebooks ? (
        <DeleteRecord
          book={booksToDelete}
          deleteRecord={deleteRecord}
          onCancel={handleCancelDelete}
        />
      ) : showEditbooks ? (
        <EditRecord
          book={currentbooks}
          editBooks={editRecord}
          onCancel={handleCancelEdit}
        />
      ) : showAddbooks ? (
        <AddBook 
         addBook={addbooks}
         onCancel={handleCancelAdd} 
         />
      ) : (
        <BookList
          book={library}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddbooks}
        />
      )}
    </div>
  );
}

export default App;
