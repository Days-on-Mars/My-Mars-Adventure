const router = require("express").Router();
const axios = require('axios');
const User = require('../models/User')
const UserInput = require('../models/UserInput')

//no need to render or redirect any pages, this is done in front-end


//creating user entries
router.post('/mars-journal', (req, res, next) => {
	// console.log(req.body);
	const { paragrah, oneToDo, oneStatus, twoToDo, twoStatus, threeToDo, threeStatus, fourToDo, fourStatus, fiveToDo, fiveStatus, sixToDo, sixStatus, sevenToDo, sevenStatus, eightToDo, eightStatus, nineToDo, nineStatus, tenToDo, tenStatus } = req.body;
	const loggedInUser = req.user;
	console.log("1st creating user journal and to-do list entry");
	console.log("2nd checking user ID:", loggedInUser._id);
	//here use user.findbyId so we know which user is adding the journal
	UserInput.create({ paragrah, oneToDo, oneStatus, twoToDo, twoStatus, threeToDo, threeStatus, fourToDo, fourStatus, fiveToDo, fiveStatus, sixToDo, sixStatus, sevenToDo, sevenStatus, eightToDo, eightStatus, nineToDo, nineStatus, tenToDo, tenStatus })
	.then(createdJournal => {
		User.findByIdAndUpdate(loggedInUser._id, {"$push": {"journaladded": createdJournal}}, {new: true})
		.then(userFound => {
		console.log(`This journal has just been added: ${createdJournal}`);
		console.log(`/UserInput/${createdJournal._id}`);
		console.log(`Checking if we find a user: ${userFound}`);
		res.status(201).json(createdJournal)
	})
	//is this actually needed?
})
});


router.post('/mars-journal/:id', (req, res, next) => {
	console.log('test if this is running');
	const { paragrah, oneToDo, oneStatus, twoToDo, twoStatus, threeToDo, threeStatus, fourToDo, fourStatus, fiveToDo, fiveStatus, sixToDo, sixStatus, sevenToDo, sevenStatus, eightToDo, eightStatus, nineToDo, nineStatus, tenToDo, tenStatus } = req.body;
	const loggedInUser = req.user;
	UserInput.findByIdAndUpdate(req.params.id, { paragrah, oneToDo, oneStatus, twoToDo, twoStatus, threeToDo, threeStatus, fourToDo, fourStatus, fiveToDo, fiveStatus, sixToDo, sixStatus, sevenToDo, sevenStatus, eightToDo, eightStatus, nineToDo, nineStatus, tenToDo, tenStatus }, { new: true })
	  .then(updatedJournal => {
		res.status(200).json(updatedJournal);
	  })
	  .catch(err => {
		next(err);
	  })
  });

  router.delete('/mars-journal/:id', (req, res, next) => {
	UserInput.findByIdAndDelete(req.params.id)
	  .then(() => {
		res.status(200).json({ message: 'journal deleted' });
	  })
	  .catch(err => {
		next(err);
	  })
  });
  

//get relevent user entries from the database, this is user-specific
router.get('/dashboard', (req, res, next) => {
    const loggedInUser = req.user;
	console.log("checking if receiving user info:", loggedInUser._id);
    User.findById(loggedInUser._id)
        .then(userFromDB =>
		//	userFromDB => {
		//	console.log("checking info from DB:", userFromDB)
        //   res.render('Dashboard', { user: userFromDB });
		res.status(200).json(userFromDB)
        )
        .catch(err => {
			console.log(err);
		})
  });

module.exports = router;
