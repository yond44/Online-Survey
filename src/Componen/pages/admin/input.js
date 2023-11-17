import React from "react";
import { useState } from "react";
import { inputQuestions } from "../../../services/service";
import { Link, useNavigate } from "react-router-dom";

function Input() {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [pertanyaan_1, setPertanyaan_1] = useState("");
  const [pertanyaan_2, setPertanyaan_2] = useState("");
  const [pertanyaan_3, setPertanyaan_3] = useState("");
  const [pertanyaan_4, setPertanyaan_4] = useState("");
  const [pertanyaan_5, setPertanyaan_5] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const inputQ = async (e) => {
    e.preventDefault();
    try {
      await inputQuestions(
        judul,
        kategori,
        pertanyaan_1,
        pertanyaan_2,
        pertanyaan_3,
        pertanyaan_4,
        pertanyaan_5
      );
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };

  return (
    <div className="flex text">
      <div>
        <h1>SILAHKAH ISI KOLOM DIBAWAH INI</h1>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
      <div className="padding">
        <form>
          <label htmlFor="kategori">Kategori: </label>
          <select
            name="kategori"
            id="kategori"
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="" disabled selected hidden required>
              Pilih Kategori
            </option>
            <option value="Tanya Jawab">Tanya Jawab</option>
            <option value="Yes or No">Yes or No</option>
          </select>
          <br />
          <label htmlFor="judul">
            <h3 className="padding">Judul</h3>
          </label>
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
          <br />
          <textarea
            className="input"
            id="pertanyaan_1"
            name="pertanyaan_1"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_1(e.target.value)}
            value={pertanyaan_1}
          />
          <br />
          <label htmlFor="pertanyaan_2">
            <h3>Pertanyaan 2</h3>
          </label>
          <br />
          <textarea
            className="input"
            id="pertanyaan_2"
            name="pertanyaan_2"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_2(e.target.value)}
            value={pertanyaan_2}
          />
          <br />
          <label htmlFor="pertanyaan_3">
            <h3>Pertanyaan 3</h3>
          </label>
          <br />
          <textarea
            className="input"
            id="pertanyaan_3"
            name="pertanyaan_3"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_3(e.target.value)}
            value={pertanyaan_3}
          />
          <br />
          <label htmlFor="pertanyaan_4">
            <h3>Pertanyaan 4</h3>
          </label>
          <br />
          <textarea
            className="input"
            id="pertanyaan_4"
            name="pertanyaan_4"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_4(e.target.value)}
            value={pertanyaan_4}
          />
          <br />
          <label htmlFor="pertanyaan_5">
            <h3>Pertanyaan 5</h3>
          </label>
          <br />
          <textarea
            className="input"
            id="pertanyaan_5"
            name="pertanyaan_5"
            maxlength="300"
            size="60"
            onChange={(e) => setPertanyaan_5(e.target.value)}
            value={pertanyaan_5}
          />
          <br />
          <div className="error">
            <p>{error}</p>
          </div>
          <button className="button" onClick={inputQ}>
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

export default Input;
