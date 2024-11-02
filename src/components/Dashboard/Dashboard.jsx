import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetStories } from '../API/Api';
import './Dashboard.css';
const Dashboard = () => {
  const navigate=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [stories,setstories]=useState([]);
  const booksPerPage = 8;

  useEffect(()=>{
    const FetchStories=async()=>{
      try{
        const res=await GetStories();
         setstories(res.data);
        console.log(res.data);
      }
      catch(err)
      {console.log("Error Loading Stories")}
    }
    FetchStories();
  });

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Filter books based on search term
  const filteredBooks =stories.filter(book =>
    book.title.toLowerCase().includes(searchTerm)
  );

  // Pagination logic for filtered books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Handle next page click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <input  type="text"  className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
        <h1 className='dashboard-header'>Big Books & Story Books</h1>
        <div className="filters">
          <button>Name</button>
          <button>Date</button>
        </div>
      </div>

      <div className="bookshelf">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => (
            <div key={book.storyId} className="book-card" onClick={()=>{
              localStorage.setItem('$toryId',book.storyId);
              localStorage.setItem('storyTitle',book.title);
              localStorage.setItem('storyimg',book.img);
              navigate('/story-page');
            }}>
              <img src={book.img} alt={book.title} />
              <p className="book-title">{book.title}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>

      {filteredBooks.length > booksPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt; Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;