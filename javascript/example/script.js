let mahasiswa = document.getElementById("mahasiswa");

fetch(
  "https://belajar-rest-api-mongodb-deploy-production.up.railway.app/mahasiswa"
)
  .then((response) => response.json())
  .then((data) => {
    data.mahasiswa.forEach(getall);
  });

const getall = (value, index) => {
  mahasiswa.innerHTML = `<h1>${value.nama}</h1>`;
};
