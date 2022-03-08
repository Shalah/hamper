const router = require('express').Router();
const Items_tb = require('../../models/Items_tb');

// router.post('/Items_tb', async (req, res) => {
//   try {
//     const itemData = await Item.create({
//       item_type: req.body.item_type,
//       item_tone: req.body.item_tone,
//       item_size: req.body.item_size,
//       item_brand: req.body.item_brand,
//       is_cotton: req.body.is_cotton,
//       is_leather: req.body.is_leather,
//       is_linen: req.body.is_linen,
//     });
//     res.status(200).json(itemData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   console.log(itemData);
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const item = await Item.update(
//       {
//         item_type: req.body.item_type,
//         item_tone: req.body.item_tone,
//         item_size: req.body.item_size,
//         item_brand: req.body.item_brand,
//         is_cotton: req.body.is_cotton,
//         is_leather: req.body.is_leather,
//         is_linen: req.body.is.linen,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );

//     res.status(200).json(item);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/add-item', async(req, res) => {
  console.log(`Trying new route`, req.body);
  try{
    const userItem = await Items_tb.create({
      ...req.body
      });
      res.status(200).json(userItem);
      
    }

    // if(!userItem){
    //   console.log(userItem, `L 57`)
    //   res.status(400).json({message: `Cannot send data`})
    //   return;
    // }
  //}
  catch(err){
    res.status(400).json({message: `Cannot send data`})
  }
});


// How to update

// Adding a delete 
router.delete('/', async (req, res) => {
  try {
    const userItem = await Items_tb.destroy({
      where: {
        email: req.params.email,
        //id: req.session.id,
      },
    });

    if (!userItem) {
      res.status(404).json({ message: 'No account found!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

