const BASE_URL = process.env.WHATSAPP_URL;
const TOKEN = process.env.WHATSAPP_SECRET_TOKEN;
const PHONE_ID = process.env.WHATSAPP_PHONE_ID

export const fetchData = (init = {}) => {
  const URL = `${BASE_URL}/${PHONE_ID}/messages`
  return fetch(URL, {
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json"
    },
    ...init
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) throw response;
      return response.json();
    })
    .catch((error) =>
      Promise.reject({ type: 'error', message: error.message })
    );
};
