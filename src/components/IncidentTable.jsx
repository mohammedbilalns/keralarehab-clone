import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const JsonTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const repoOwner = "keralarehab";
    const filePath = "incidents/wayanad-landslide-2024/data/promise.json";
    const branch = "initial_template";
    const url = `https://raw.githubusercontent.com/${repoOwner}/keralarehab.github.io/${branch}/${filePath}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    const result = data.filter(
      (item) =>
        item.promisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.promise.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
    setCurrentPage(1);
  }, [searchTerm, data]); //search term storing

  const handleSearch = () => {
    const result = data.filter(
      (item) =>
        item.promisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.promise.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
    setCurrentPage(1);
  }; // search result

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <header className="bg-primary text-white text-center py-3">
        <h3>Wayanad Landslide 2024</h3>
      </header>
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            className="form-control w-75"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <h4 className="mb-3">
          Donation Offers curated till date are as follows:
        </h4>
        <table className="table table-responsive table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Sl No</th>
              <th>Promisor</th>
              <th>Promise</th>
              <th>Date of Promise</th>
              <th>Offer Details</th>
              <th>Progress Details</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.promisor}</td>
                <td>{item.promise}</td>
                <td>{item.date_of_promise || "N/A"}</td>
                <td>
                  {item.offers.map((offerItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        to="/details"
                        state={offerItem.offer}
                        className="btn btn-outline-primary btn-hover-white"
                      >
                        Details
                      </Link>
                    </div>
                  ))}
                </td>
                <td>
                  {item.offers.map((offerItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        to="/details"
                        state={offerItem.progress}
                        className="btn btn-outline-primary btn-hover-white"
                      >
                        Progress
                      </Link>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination justify-content-end">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p>
            You can also contribute by using{" "}
            <Link to="/submissions">submission</Link> Page
          </p>
        </div>
      </div>
    </>
  );
};

export default JsonTable;
