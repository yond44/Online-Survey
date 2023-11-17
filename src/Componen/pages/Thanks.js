import React from "react";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="middle-content">
      <div>
        <h1>TERIMA KASIH TELAH MENGISI SURVEY KAMI</h1>
        <Link to='/' >
          <h2 className="text-center">Klik Disini Untuk Kembali</h2>
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
