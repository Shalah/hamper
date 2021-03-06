const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/homepage', async (req, res) => {
  res.render('homepage');
});

router.get('/item', async (req, res) => {
  res.render('item');
});

router.get('/settings', async (req, res) => {
  res.render('settings');
});

router.get('/myhamper', async (req, res) => {
  res.render('myhamper');
});

// router.get('/myhamper', async (req, res) => {
//   const data = [
//     {
//       type: 'Shirt',
//       size: 'L',
//       tone: 'Light',
//       material: 'Cotton',
//       brand: 'Gucci',
//     },
//     {
//       type: 'Pants',
//       size: 'XL',
//       tone: 'Dark',
//       material: 'Leather',
//       brand: 'XXX',
//     },
//   ];
//   res.render('myhamper', {
//     items: data,
//   });
// });

module.exports = router;
