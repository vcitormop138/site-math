router.post("/", isAuth, isAdmin, controller.createCourse);
router.put("/:id", isAuth, isAdmin, controller.updateCourse);