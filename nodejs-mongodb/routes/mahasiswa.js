// (5) Buat router Mahasiswa
const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");

// Read Get(ambil seluruh data dari mahasiswa)
router.get("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

// Create
router.post("/", async (req, res) => {
  // tampung input mahasiswa
  const mahasiswaPost = new Mahasiswa({
    nama: req.body.nama,
    alamat: req.body.alamat,
  });

  try {
    // simpan data
    const mahasiswa = await mahasiswaPost.save();
    // response
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

// // update
// router.put("/:mahasiswaId", async (req, res) => {
//   // kita tampung request dari si user
//   const data = {
//     nama: req.body.nama,
//     alamat: req.body.alamat,
//   };

//   // kita jalankan perintah untuk update
//   try {
//     const mahasiswa = await Mahasiswa.updateOne(
//       { _id: req.params.mahasiswaId },
//       data
//     );
//     res.json(mahasiswa);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // delete
// router.delete("/:mahasiswaId", async (req, res) => {
//   try {
//     const mahasiswa = await Mahasiswa.deleteOne({
//       _id: req.params.mahasiswaId,
//     });
//     res.json(mahasiswa);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

module.exports = router;
