const router = require('express').Router();
const Items_tb = require('../../models/Items_tb');

const withAuth = require('../../utils/auth');

router.post('/item', async (req, res) => {
  try {
    const itemData = await Items_tb.create({
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
    const item = await Items_tb.update(
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




// User Selection



router.post('/:id', withAuth, async (req, res) => {
  console.log('req.body',req.body)
  try {
    const newItem = await Items_tb.create({ ...req.body, user_id: req.session.user_id });
    res.json(newItem);
  } catch (err) {
    res.status(500).json(err);
  }
});














// router.post('/:id', (req, res) => {
  
//   Items_tb.bulkCreate(
   
//     const itemtype = () => {
//       let userChoice;
  
//       if(userChoice === 'shirt'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('shirt')"
//       }
//       else if (userChoice === 'Pants'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Pants')"
//       }
//       else if (userChoice === 'Pants'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Pants')"
//       }
//       else if (userChoice === 'Skirt'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Skirt')"
//       }
//       else if (userChoice === 'Blazer'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Blazer')"
//       }
//       else if (userChoice === 'Coat'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Coat')"
//       }
//       else if (userChoice === 'Sweater'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Sweater')"
//       }
//       else if (userChoice === 'Dress'){
//         "INSERT INTO hamperdc_db (items_tb) VALUES ('Dress');"
// //       }
// //   );
//     .then(() => {
//       res.send('items_tb seeded!');
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });


















// const itemtone = () => {
//   let userChoice;
//   if(userChoice === 'Dark'){

//   }
//   else if (userChoice === 'Light'){

//   }
//   else if (userChoice === 'White'){
    
//   }
//   else{
//     alert(``)
//   }
// }

// router.get('/:id', (req, res) => {

//   const itemtype = () => {
//     let userChoice;

//     if(userChoice === 'shirt'){
//       var sql = "INSERT INTO hamperdc_db (items_tb) VALUES ('shirt')"
//     }
//     else if (userChoice === 'Pants'){

//     }
//     else if (userChoice === 'Blouse'){
      
//     }
// //     else if (userChoice === 'Skirt'){
      
// //     }
// //     else if (userChoice === 'Blazer'){
      
//     }
//     else if (userChoice === 'Coat'){
      
//     }
//     else if (userChoice === 'Sweater'){
      
//     }
//     else if (userChoice === 'Dress'){
      
//     }
//   }
// })







module.exports = router;
