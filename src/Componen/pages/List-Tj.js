import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoryById } from "../../services/category";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../services/service";

function ListTj() {
  const [kat, setKat] = useState({});
  const [questions, setQuestions] = useState([]);

  const { id } = useParams();


  
console.log(kat.kategori)
  const getQuestion = async () => {
    try {
      const response = await getQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestion();

    const getCategoryId = async () => {
      try {
        const response = await getCategoryById(id);
        console.log(response.data);
        setKat(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryId();
  }, [id]);

  return (
    <div className="width">
      <div className="flex">
        <div>
          <div className="text">
            <h1>Daftar Survey Kami :</h1>
            <div>
              <Link to="/">
                <button to className="button2">
                  back
                </button>
              </Link>
            </div>
          </div>

          <div className="">
            {questions.map((item) =>
              item.kategori === kat.kategori ? (
                <ul className="text-padding">
                  <Link
                    to={
                      item.kategori === "Yes or No"
                        ? `/yn/${item._id}`
                        : item.kategori === "Tanya Jawab"
                        ? `/tj/${item._id}`
                        : null
                    }
                    className="link text-size"
                  >
                    <li>{item.judul}</li>
                  </Link>
                </ul>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTj;
