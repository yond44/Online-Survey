import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsById } from "../../services/service";
import { useNavigate } from "react-router-dom";
import { inputAnswer } from "../../services/answer";





function TJ() {
  const [data, setData] = useState({});
  const judul = data.judul
  const kategori = data.kategori
  const [namas, setNamas] = useState("")
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

 const capitalize =(string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

 const nama = capitalize(namas)



  const inputAns = async (e) => {
    e.preventDefault();
    try {
      await inputAnswer(id, judul, nama, kategori, Q1, Q2, Q3, Q4, Q5);
      navigate('/thanks');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    const getQuestionId = async () => {
      try {
        const response = await getQuestionsById(id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestionId();
  }, [id]);



  return (
    <div className="flex text">
      <div>
        <h1>{data.judul}</h1>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
      <div>
        <form>
          <label>
            <h3>Nama</h3>{" "}
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            onChange={(e) => setNamas(e.target.value)}
          ></input>
          {data.pertanyaan_3 === "" ? null : (
            <div>
              <label>
                <h3>{data.pertanyaan_1}</h3>
              </label>
              <br />
              <textarea
                className="answer-box"
                id="Q1"
                name="Q1"
                onChange={(e) => setQ1(e.target.value)}
                maxlength="300"
                size="60"
              />
            </div>
          )}

          <br />
          {data.pertanyaan_3 === "" ? null : (
            <div>
              <label>
                <h3>{data.pertanyaan_2}</h3>
              </label>
              <br />
              <textarea
                className="answer-box"
                id="Q2"
                name="Q2"
                onChange={(e) => setQ2(e.target.value)}
                maxlength="300"
                size="60"
              />
            </div>
          )}

          <br />
          {data.pertanyaan_3 === "" ? null : (
            <div>
              <label>
                <h3>{data.pertanyaan_3}</h3>
              </label>
              <br />
              <textarea
                className="answer-box"
                id="Q3"
                name="Q3"
                onChange={(e) => setQ3(e.target.value)}
                maxlength="300"
                size="60"
              />
            </div>
          )}

          <br />
          {data.pertanyaan_4 === "" ? null : (
            <div>
              <label>
                <h3>{data.pertanyaan_4}</h3>
              </label>
              <br />
              <textarea
                className="answer-box"
                id="Q4"
                name="Q4"
                onChange={(e) => setQ4(e.target.value)}
                maxlength="300"
                size="60"
              />
            </div>
          )}

          <br />
          {data.pertanyaan_5 === "" ? null : (
            <div>
              <label>
                <h3>{data.pertanyaan_5}</h3>
              </label>
              <br />
              <textarea
                className="answer-box"
                id="Q4"
                name="Q4"
                onChange={(e) => setQ5(e.target.value)}
                maxlength="300"
                size="60"
              />
            </div>
          )}

          <br />
          <div className="error">
            <p>{error}</p>
          </div>
          <button className="button" onClick={inputAns}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TJ;
