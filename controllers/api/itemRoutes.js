const router = require('express').Router();
const Item = require('../../models/Item');

router.post('/', async (req, res) => {
  try {
    const itemData = await Item.create({
      item_color: req.body.item_color,
      item_size: req.body.item_size,
      item_brand: req.body.item_brand,
      is_leather: req.body.is_leather,
      is_linen: req.body.is_linen,
    });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const item = await Item.update(
      {
        item_color: req.body.dish_name,
        item_size: req.body.item_size,
        item_brand: req.body.item_brand,
        is_leather: req.body.is_leather,
        is_linen: req.body.is.linen,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
   
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
