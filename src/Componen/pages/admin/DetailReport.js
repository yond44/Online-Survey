import React, { useEffect } from "react";
import { useState } from "react";
import { getQuestions } from "../../../services/service";
import { Link } from "react-router-dom";
import { getAnswersById,  } from "../../../services/answer";
import { useParams } from "react-router-dom";

function Detail() {
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState({});
  const { id } = useParams();






    const getQuestion = async () => {

        const response = await getQuestions();
        console.log(response.data);
        setQuestions(response.data);

    };

  useEffect(() => {
    const getAnsById = async () => {
        const response = await getAnswersById(id);
        setData(response.data);

      
    };
    getAnsById();
    getQuestion();
  }, [id]);






  return (
    <div className="flex text">
      {questions.map((items) =>
        items._id === data.id ? (
          <div>
            <div>
              <h1>Jawaban Survey {data.nama}</h1>
            </div>
            <div className="error">
            </div>
            <div>
              <label htmlFor="judul">
                <h3 className="padding">Judul</h3>
              </label>
              <div>
                <h5>{data.judul}</h5>
              </div>
              <br />
              <label htmlFor="pertanyaan_1">
                <h3>{items.pertanyaan_1}</h3>
              </label>
              <div>
                <h5>Jawaban :</h5>
                <p>{data.Q1}</p>
              </div>
              <br />
              <label htmlFor="pertanyaan_2">
                <h3>{items.pertanyaan_2}</h3>
              </label>
              <div>
                <h5>Jawaban :</h5>
                <p>{data.Q2}</p>
              </div>
              <br />
              <label htmlFor="pertanyaan_3">
                <h3>{items.pertanyaan_3}</h3>
              </label>
              <div>
                <h5>Jawaban :</h5>
                <p>{data.Q3}</p>
              </div>
              <br />
              <label htmlFor="pertanyaan_4">
                <h3>{items.pertanyaan_4}</h3>
              </label>
              <div>
                <h5>Jawaban :</h5>
                <p>{data.Q4}</p>
              </div>
              <br />
              <label htmlFor="pertanyaan_5">
                <h3>{items.pertanyaan_5}</h3>
              </label>
              <div>
                <h5>Jawaban :</h5>
                <p>{data.Q5}</p>
              </div>

              <div>
                <Link to="/result">
                  <button to className="button">
                    back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Detail;
