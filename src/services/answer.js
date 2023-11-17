import axios from "axios";

export const getAnswers = async () => {
  return await axios.get(
    "https://online-survey-api-production.up.railway.app/API/answer"
  );
};

export const getAnswersById = async (id) => {
  return await axios.get(
    `https://online-survey-api-production.up.railway.app/API/answer/${id}`
  );
};


export const inputAnswer = async (
  id,
  judul,
  nama,
  kategori,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5
) => {
  return await axios.post(
    "https://online-survey-api-production.up.railway.app/API/answer",
    {
      id: id,
      judul: judul,
      nama: nama,
      kategori: kategori,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Q4: Q4,
      Q5: Q5,
    }
  );
};

export const deleteAnswers = async (id) => {
  return await axios.delete(
    `https://online-survey-api-production.up.railway.app/API/answer/${id}`
  );
};

