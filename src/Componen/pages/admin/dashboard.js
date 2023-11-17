
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteQuestions, getQuestions } from "../../../services/service";

function Dashboard() {
  const refreshs = () => window.location.reload(true);

  const [questions, setQuestions] = useState([]);


  
  const getQuestion = async () => {
    try {
      const response = await getQuestions();
      console.log(response.data);
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQeustion = (id) => {
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
        await deleteQuestions(id)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        refreshs();
      }
    });
  };

  useEffect(() => {
    getQuestion();
  }, []);
  return (
    <div className="flex">
      <div>
        <Link to="/result">
          <button to className="button">
            To Result
          </button>
        </Link>
      </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>
              <Link to="/input">
                <AiOutlinePlusSquare className="add" size={30} />
              </Link>
            </th>
            <th>Judul</th>
            <th>Kategori</th>
            <th></th>
          </tr>
        </thead>
        {questions.map((items) => (
          <tbody>
            <tr>
              <td></td>
              <td>{items.judul}</td>
              <td>{items.kategori}</td>
              <td>
                <Link to={`/edit/${items._id}`} className="link text-size">
                  <button to className="button3">
                    Edit
                  </button>
                </Link>

                <button
                  to
                  className="button3"
                  onClick={() => {
                    deleteQeustion(items._id);
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
}

export default Dashboard;
