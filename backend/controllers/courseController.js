exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, content, isFree } = req.body;
  const course = await Course.findByPk(id);
  if (course) {
    course.title = title;
    course.content = content;
    course.isFree = isFree;
    await course.save();
    res.json(course);
  } else {
    res.status(404).json({ message: "Cours non trouvé" });
  }
};