import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAnswers, deleteAnswers } from "../../../services/answer";
import useSortableData from "../../../contex/sort";
import { useMemo } from "react";
import { AiFillClockCircle } from "react-icons/ai";




const Result = (props) => {

    const [isActive, setIsActive] = useState(false);

  const refreshs = () => window.location.reload(true);
  const [answer, setAnswer] = useState([])
  const { items, requestSort, sortConfig } = useSortableData(answer);
  const [selectedCategory, setSelectedCategory] = useState();



////sorting

   const getClassNamesFor = (name) => {
     if (!sortConfig) {
       return;
     }
     return sortConfig.key === name ? sortConfig.direction : undefined;
   };


///filtering   

  function getFilteredList() {

    if (!selectedCategory) {
      return items;
    }
    return items.filter((item) => item.kategori === selectedCategory);
  }


  var filteredList = useMemo(getFilteredList, [selectedCategory, items]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute:'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
///fetching


  const getAns = async () => {
    try {
      const response = await getAnswers();
      console.log(response.data);
      setAnswer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAns = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteAnswers(id)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        refreshs();
      }
    });
  };



  useEffect(() => {
    getAns();
  }, []);





  return (
    <div className="flex">
      <div>
        <Link to="/Admin">
          <button to className="button margin-bt">
            Back
          </button>
        </Link>
      </div>

      <div className="filter-container">
        <div>Filter by Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Tanya Jawab">Tanya Jawab</option>
            <option value="Yes or No">Yes or No</option>
          </select>
        </div>
        <div>Sort by Name:</div>
        <div>
          {isActive ? (
            <button
              onClick={() => {
                requestSort("nama");
                setIsActive(!isActive);
              }}
              className={getClassNamesFor("nama")}
            >
              Z-A
            </button>
          ) : (
            <button
              onClick={() => {
                requestSort("nama");
                setIsActive(!isActive);
              }}
              className={getClassNamesFor("nama")}
            >
              A-Z
            </button>
          )}
        </div>
        <div>Sort by Date:</div>
        <div>
            <button
              onClick={() => {
                requestSort("createdAt");
              }}
              className={getClassNamesFor("createdAt")}
            >
              <AiFillClockCircle />
            </button>
        </div>
      </div>

      <table class="styled-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Judul</th>
            <th>Waktu</th>
            <th>Action</th>
          </tr>
        </thead>
        {filteredList.map((items) => (
          <tbody>
            <tr>
              <Link to={`/result/${items._id}`} className="link">
                <td>{items.nama}</td>
              </Link>
              <td>{items.kategori}</td>
              <td>{items.judul}</td>
              <td>{formatDate(items.createdAt)}</td>
              <td>
                <button
                  to
                  className="button3"
                  onClick={() => {
                    deleteAns(items._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Result;
