const router = require('express').Router();
const Item = require('../../models/item');

router.post('/item', async (req, res) => {
  try {
    const itemData = await Item.create({
      item_type: req.body.item_type,
      item_tone: req.body.item_tone,
      item_size: req.body.item_size,
      item_brand: req.body.item_brand,
      is_cotton: req.body.is_cotton,
      is_leather: req.body.is_leather,
      is_linen: req.body.is_linen,
    });
    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
  console.log(itemData);
});

router.put('/:id', async (req, res) => {
  try {
    const item = await Item.update(
      {
        item_type: req.body.item_type,
        item_tone: req.body.item_tone,
        item_size: req.body.item_size,
        item_brand: req.body.item_brand,
        is_cotton: req.body.is_cotton,
        is_leather: req.body.is_leather,
        is_linen: req.body.is.linen,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
