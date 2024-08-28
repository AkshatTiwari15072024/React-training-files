import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import data from "./Library.json";
import { useState } from "react";

function Table() {
  const [Data, setLibrary] = useState([...data.library]);
  const [formInputs,setformInputs] = useState({
    BookId : "",
    Author : "",
    IssuingPerson : "",
    IssueDate : "",
    SubmissionDate : ""
  });

  const handleDelete = (rowIndex) => {
    setLibrary((prevData) =>
      prevData.filter((item, index) => index !== rowIndex)
    );
    console.log(Data);
  };

  function handleCellValueChanged(event) {
    //console.log(event);
    const updatedData = Data.map((row) => row.bookId === event.data.bookId
      ? { ...row, [event.colDef.field]: event.newValue }
      : row
    );
    setLibrary(updatedData);
  }

  const column = [
    { headerName: "Book ID", field: "bookId", checkboxSelection: true },
    { headerName: "Author", field: "author" },
    { headerName: "Issuing Person", field: "issuingPerson" },
    { headerName: "Issue Date", field: "issueDate"  },
    { headerName: "Submission Date", field: "submissionDate"},
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <button onClick={() => handleDelete(params.node.rowIndex)}>
          Delete
        </button>
      ),
    },
  ];


  function createEntry(e) {
    if (
      formInputs.BookId == "" ||
      formInputs.Author == "" ||
      formInputs.IssuingPerson == "" ||
      formInputs.IssueDate == "" ||
      formInputs.SubmissionDate == "" 
    ) {
      alert("Please enter all fields");
      return;
    } else {
      const newEntry = {
        bookId: formInputs.BookId,
        author: formInputs.Author,
        issuingPerson: formInputs.IssuingPerson,
        issueDate: formInputs.IssueDate,
        submissionDate: formInputs.SubmissionDate
      };

      setLibrary([...Data, newEntry]);
      setInputStatesToEmpty();
      console.log(Data);
    }
  }

  function setInputStatesToEmpty() {
    setformInputs({
      BookId : "",
      Author : "",
      IssuingPerson : "",
      IssueDate : "",
      SubmissionDate : ""
    });
  }

  function updateFormStateBasedOnInputs(e) {
    const { name, value } = e.target;
    console.log("name - " + name + "value - " + value);

    setformInputs({ ...formInputs, [name]: value });

    console.log(formInputs);
  }

  const defaultcolumndef = {
    editable: true,
    filter: true,
    floatingFilter: true,
    sortable: true,
    
  };

  return (
    <>
      <div>
        <form>
          <label htmlFor="">BookID</label>
          <input
            type="text"
            name="BookId"
            id=""
            value={formInputs.BookId}
            onChange={(e) => updateFormStateBasedOnInputs(e)}
          />

          <label htmlFor="">Author</label>
          <input
            type="text"
            name="Author"
            id=""
            value={formInputs.Author}
            onChange={(e) => updateFormStateBasedOnInputs(e)}
          />

          <label htmlFor="">Issuing Person</label>
          <input
            type="text"
            name="IssuingPerson"
            id=""
            value={formInputs.IssuingPerson}
            onChange={(e) => updateFormStateBasedOnInputs(e)}
          />

          <label htmlFor="">Issue Date</label>
          <input
            type="date"
            name="IssueDate"
            id=""
            value={formInputs.IssueDate}
            onChange={(e) => updateFormStateBasedOnInputs(e)}
          />
          <label htmlFor="">Submission Date</label>
          <input
            type="date"
            name="SubmissionDate"
            id=""
            value={formInputs.SubmissionDate}
            onChange={(e) => updateFormStateBasedOnInputs(e)}
          />

          <button type="button" onClick={createEntry}>
            Create entry
          </button>
        </form>
      </div>
      <div className="ag-theme-quartz" style={{ height: 500, width: 1200 }}>
        <AgGridReact
          rowData={Data}
          columnDefs={column}
          defaultColDef={defaultcolumndef}
          onCellValueChanged={handleCellValueChanged}
        />
      </div>
    </>
  );
}

export default Table;
