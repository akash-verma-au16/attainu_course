document.querySelector('#update-btn').addEventListener('click', async (e) => {
  const country = document.querySelector('#countryInput').value;
  const id = document.querySelector('#idInput').value;
  const data = {
    country,
    id,
  };
  const response = await axios.put(`/country`, data);
  e.preventDefault();
});
