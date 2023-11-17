import React, { useEffect } from "react";
import { useState } from "react";
import { editQuestions } from "../../../services/service";
import { Link } from "react-router-dom";
import { getQuestionsById } from "../../../services/service";
import { useParams } from "react-router-dom";

function Edit() {
  const refresh = () => window.location.reload(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  const [judul, setJudul] = useState('');
  const [pertanyaan_1, setPertanyaan_1] = useState('');
  const [pertanyaan_2, setPertanyaan_2] = useState("");
  const [pertanyaan_3, setPertanyaan_3] = useState("");
  const [pertanyaan_4, setPertanyaan_4] = useState("");
  const [pertanyaan_5, setPertanyaan_5] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const getQuestionId = async () => {
      try {
        const response = await getQuestionsById(id);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestionId();
  }, [id]);

  const editQ = async (e) => {
    e.preventDefault();
    try {
      await editQuestions(
       
        judul,
        pertanyaan_1,
        pertanyaan_2,
        pertanyaan_3,
        pertanyaan_4,
        pertanyaan_5,
         id
      );

    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };
  console.log(judul)
  console.log(pertanyaan_5)
  return (
    <div className="flex text">
      <div>
        <h1>EDIT PERTANYAAN</h1>
      </div>
      <div>
        <p className="error ">Perhatian: Jika ingin mengedit pertanyaan, jangan lupa mengisi semua kolom dengan copy dan paste ke pertanyaan yang tidak ingin di edit, karena jika tidak. akan menghapus pertanyaan tersebut</p>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
      <div>
        <form>
          <label htmlFor="judul">
            <h3 className="padding">Judul</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.judul}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="judul"
            name="judul"
            onChange={(e) => setJudul(e.target.value)}
            maxlength="300"
            size="60"
            value={judul}
            required
          />
          <label htmlFor="pertanyaan_1">
            <h3>Pertanyaan 1</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.pertanyaan_1}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="pertanyaan_1"
            name="pertanyaan_1"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_1(e.target.value)}
            value={pertanyaan_1}
            required
          />
          <br />
          <label htmlFor="pertanyaan_2">
            <h3>Pertanyaan 2</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.pertanyaan_2}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="pertanyaan_2"
            name="pertanyaan_2"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_2(e.target.value)}
            value={pertanyaan_2}
            required
          />
          <br />
          <label htmlFor="pertanyaan_3">
            <h3>Pertanyaan 3</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.pertanyaan_3}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="pertanyaan_3"
            name="pertanyaan_3"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_3(e.target.value)}
            value={pertanyaan_3}
            required
          />
          <br />
          <label htmlFor="pertanyaan_4">
            <h3>Pertanyaan 4</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.pertanyaan_4}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="pertanyaan_4"
            name="pertanyaan_4"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_4(e.target.value)}
            value={pertanyaan_4}
            required
          />
          <br />
          <label htmlFor="pertanyaan_5">
            <h3>Pertanyaan 5</h3>
          </label>
          <div>
            <h5>Sebelum :</h5>
            <p>{data.pertanyaan_5}</p>
          </div>
          <br />
          <textarea
            className="input"
            id="pertanyaan_5"
            name="pertanyaan_5"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_5(e.target.value)}
            value={pertanyaan_5}
            required
          />
          <br />
          <button className="button" onClick={editQ}>
            Submit
          </button>
        </form>
        <div>
          <Link to="/admin">
            <button to className="button">
              back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Edit;
