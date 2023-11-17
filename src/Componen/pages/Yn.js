import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsById } from "../../services/service";
import { useNavigate } from "react-router-dom";
import { inputAnswer } from "../../services/answer";

function Yn() {
  const [data, setData] = useState({});
  const judul = data.judul;
  const kategori = data.kategori;
  const [namas, setNamas] = useState("");
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

   const capitalize = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1);
   };

   const nama = capitalize(namas);


  const inputAns = async (e) => {
    e.preventDefault();
    try {
      await inputAnswer(id, judul, nama, kategori, Q1, Q2, Q3, Q4, Q5);
      navigate("/thanks");
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
    <div>
      <div className="flex text">
        <div>
          <h1>{data.judul}</h1>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div>
          <form>
            <label className="text-size right"> Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              onChange={(e) => setNamas(e.target.value)}
            ></input>
            <div className="padding">
              <fieldset className="padding">
                <legend>{data.pertanyaan_1}</legend>
                <input
                  type="radio"
                  id="Q1"
                  name="Q1"
                  onChange={(e) => setQ1(e.target.value)}
                  value="yes"
                />
                <label htmlFor="agree-yes">Yes</label>

                <input
                  type="radio"
                  id="Q1"
                  name="Q1"
                  onChange={(e) => setQ1(e.target.value)}
                  value="no"
                />
                <label htmlFor="agree-no">No</label>
              </fieldset>
            </div>
            <div className="padding">
              <fieldset className="padding">
                <legend>{data.pertanyaan_2}</legend>
                <input
                  type="radio"
                  id="Q2"
                  name="Q2"
                  onChange={(e) => setQ2(e.target.value)}
                  value="yes"
                />
                <label htmlFor="agree-yes">Yes</label>

                <input
                  type="radio"
                  id="Q2"
                  name="Q2"
                  onChange={(e) => setQ2(e.target.value)}
                  value="no"
                />
                <label htmlFor="agree-no">No</label>
              </fieldset>
              <div className="padding">
                <fieldset className="padding">
                  <legend>{data.pertanyaan_3}</legend>
                  <input
                    type="radio"
                    id="Q3"
                    name="Q3"
                    onChange={(e) => setQ3(e.target.value)}
                    value="yes"
                  />
                  <label htmlFor="agree-yes">Yes</label>

                  <input
                    type="radio"
                    id="Q3"
                    name="Q3"
                    onChange={(e) => setQ3(e.target.value)}
                    value="no"
                  />
                  <label htmlFor="agree-no">No</label>
                </fieldset>
              </div>
              <div className="padding">
                <fieldset className="padding">
                  <legend>{data.pertanyaan_4}</legend>
                  <input
                    type="radio"
                    id="Q4"
                    name="Q4"
                    onChange={(e) => setQ4(e.target.value)}
                    value="yes"
                  />
                  <label htmlFor="agree-yes">Yes</label>

                  <input
                    type="radio"
                    id="Q4"
                    name="Q4"
                    onChange={(e) => setQ4(e.target.value)}
                    value="no"
                  />
                  <label htmlFor="agree-no">No</label>
                </fieldset>
              </div>
              <div className="padding">
                <fieldset className="padding">
                  <legend>{data.pertanyaan_5}</legend>
                  <input
                    type="radio"
                    id="Q5"
                    name="Q5"
                    onChange={(e) => setQ5(e.target.value)}
                    value="yes"
                  />
                  <label htmlFor="agree-yes">Yes</label>

                  <input
                    type="radio"
                    id="Q5"
                    name="Q5"
                    onChange={(e) => setQ5(e.target.value)}
                    value="no"
                  />
                  <label htmlFor="agree-no">No</label>
                </fieldset>
              </div>
            </div>
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
    </div>
  );
}

export default Yn;
