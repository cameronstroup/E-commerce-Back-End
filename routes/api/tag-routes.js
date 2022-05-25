const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      // including its associated Product data
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (allTags) {
      res.status(200).json(allTags);
    } else {
      res.status(400).json({ message: "No tag found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      // including its associated Product data
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (tag) {
      res.status(200).json(tag);
    } else {
      res.status(400).json({ message: "No tag found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// Create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If no data returned
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Delete tag based on its id
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    // If no data returned
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
