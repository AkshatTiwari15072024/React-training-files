import React, {useState} from "react";
import BookList from "./components/Booklist";
import BookForm from "./components/BookForm";
import data from "./data/Library.json";
import "./App.css";


function App() {
  const [library, setLibrary] = useState(data.library);
  const [currentbooks, setCurrentbooks] = useState(null);
  const [mode, setMode] = useState(null);

  const handleDelete = (bookId) => {
    const updatedbooks = library.filter((book) => book.bookId !== bookId);
    if (
      window.confirm(
        `Are you sure you want to delete Book with BookID ${bookId}`
      )
    ) {
      setLibrary(updatedbooks);
    }
  };


  const handleEdit = (bookId) => {
    const books = library.find((book) => book.bookId === bookId);
    setCurrentbooks(books);
    setMode("edit");
  };

  const handleAddbooks = () => {
    setMode("add");
  };

  const handleCancel = () => {
    setMode(null);
    setCurrentbooks(null);
  }

  const handleSave = (books) => {
    if (mode==='add'){
      const newbooks = {
        bookId: books.bookId,
        author: books.author,
        check : books.check,
        issuingPerson: books.issuingPerson,
        issueDate: books.issueDate,
        submissionDate: books.submissionDate,
      };
      const updatedbook = [...library, newbooks];
      setLibrary(updatedbook);
      setMode(null);

    }else{
      const updatedbook = library.map((book) =>
        book.bookId === books.bookId ? books : book
      );
      setLibrary(updatedbook);
      setCurrentbooks(null);
      setMode(null);
    }
  }

  return (
    <div className="App">
      <h1>Library Management System</h1>
      {mode ? (
        <BookForm
        book={currentbooks}
        onSave={handleSave}
        onCancel={handleCancel}
        mode={mode}
        />
          ) : (
        <BookList
          book={library}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddbooks}
          setMode={setMode}
        />
      )}
    </div>
  );
}

export default App;
