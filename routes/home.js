const express = require("express");
const router = express.Router();
const club = require("../models/club");
// router.get("/", (req, res) => {
//   res.send("route is working");
// });
router.get("/", (_req, res, _next) => {
  club
    .find()
    .then((d) => {
      res.render("home", { clubs: d });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/edit/:id", (req, res, next) => {
  club
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((e) => {
      res.render("edit", { club: e });
    })
    .catch((e) => {
      console.log(e.message);
      next(err);
    });
});

router.post("/edit/:id", (req, res, next) => {
  club
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((e) => {
      res.redirect("/");
    })
    .catch((e) => {
      console.log(e.message);
      next(err);
    });
});

router.get("/delete/:id", (req, res, next) => {
  club
    .findByIdAndDelete({ _id: req.params.id })
    .then((e) => {
      console.log("deleted successfully");
      res.redirect("/");
    })
    .catch((d) => {
      console.log(d.message);
      next(d);
    });
});

router.post("/add", (req, res, _next) => {
  const name = req.body.cname;
  const players = req.body.players;
  const coach = req.body.coach;
  const ucl = new club({
    cname: name,
    players: players,
    coach: coach,
  });
  console.log(ucl);
  ucl
    .save()
    .then((d) => {
      console.log(d);
      res.redirect("/");
    })
    .catch((e) => {
      console.log(e.message);
    });
});

module.exports = router;
