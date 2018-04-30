var db = require("../models");

module.exports = function(app) {
  app.get("/api/meetups", function(req, res) {
    db.Mixer.findAll({}).then(function(dbMixer) {
      res.json(dbMixer);
    });
  });

  app.get("/api/meetups/:id", function(req, res) {
    db.Mixer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMixer) {
      res.json(dbMixer);
    });
  });

  app.post("/api/meetups", function(req, res) {
    db.Mixer.create(req.body).then(function(dbMixer) {
      res.json(dbMixer);
    });
  });

  app.delete("/api/meetups/:id", function(req, res) {
    db.Mixer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMixer) {
      res.json(dbMixer);
    });
  });

};
