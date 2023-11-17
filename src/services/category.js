import axios from "axios";


export const getCategory = async() => {
    return await axios.get(
      "https://online-survey-api-production-69a1.up.railway.app/api/category/"
    );
}


export const getCategoryById = async (id) => {
  return await axios.get(
    `https://online-survey-api-production-69a1.up.railway.app/API/category/${id}`
  );
};



export const inputQuestions = async (
  judul,
  nama,
  kategori,
  pertanyaan_1,
  pertanyaan_2,
  pertanyaan_3,
  pertanyaan_4,
  pertanyaan_5
) => {
  return await axios.post(
    "https://online-survey-api-production-69a1.up.railway.app/API/questions",
    {
      judul: judul,
      nama: nama,
      kategori: kategori,
      pertanyaan_1: pertanyaan_1,
      pertanyaan_2: pertanyaan_2,
      pertanyaan_3: pertanyaan_3,
      pertanyaan_4: pertanyaan_4,
      pertanyaan_5: pertanyaan_5,
    }
  );
};