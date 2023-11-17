import axios from 'axios'




export const getQuestions = async() => {

    return await axios.get(
      "https://online-survey-api-production.up.railway.app/API/questions"
    );
}

export const getQuestionsById = async (id) => {
    return await axios.get(
      `https://online-survey-api-production.up.railway.app/API/questions/${id}`
    );
}


export const inputQuestions = async(judul, kategori, pertanyaan_1, pertanyaan_2, pertanyaan_3, pertanyaan_4, pertanyaan_5) => {
    return await axios.post(
      "https://online-survey-api-production.up.railway.app/API/questions",
      {
        judul: judul,
        kategori: kategori,
        pertanyaan_1: pertanyaan_1,
        pertanyaan_2: pertanyaan_2,
        pertanyaan_3: pertanyaan_3,
        pertanyaan_4: pertanyaan_4,
        pertanyaan_5: pertanyaan_5,
      }
    );
}

export const deleteQuestions = async(id) =>{
    return await axios.delete(
      `https://online-survey-api-production.up.railway.app/API/questions/${id}`
    );
}



export const editQuestions = async (

  judul,
  pertanyaan_1,
  pertanyaan_2,
  pertanyaan_3,
  pertanyaan_4,
  pertanyaan_5,
  id
) => {
  return await axios.put(
    `https://online-survey-api-production.up.railway.app/API/questions/${id}`,
    {
      judul: judul,
      pertanyaan_1: pertanyaan_1,
      pertanyaan_2: pertanyaan_2,
      pertanyaan_3: pertanyaan_3,
      pertanyaan_4: pertanyaan_4,
      pertanyaan_5: pertanyaan_5,
    }
  );
};
