import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../services/category";

function Home() {
  const [kategori, setKategori] = useState([]);
  const getC = async () => {
    const response = await getCategory();
    console.log(response.data);
    setKategori(response.data);
  };

  useEffect(() => {
    getC();
  }, []);

  return (
    <div className="flex justify">
      <div className="text">
        <h1>SELAMAT DATANG DI SURVEY KAMI</h1>
        <p> Silahkan pilih tipe survey yang ingin kamu isi :</p>
      </div>

      {kategori.map((data) => (
        <div>
          <Link
            to={`/list/${data._id}`}
          >
            <button to className="button">
              {" "}
              {data.kategori}
            </button>
          </Link>
        </div>
      ))}

      <br />
    </div>
  );
}

export default Home;
