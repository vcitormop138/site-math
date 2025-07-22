const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
router.post('/', isAdmin, upload.single('file'), async (req, res) => {
  // Sauvegarde le fichier et retourne l’URL
  res.json({ url: `/uploads/${req.file.filename}` });
});