const express = require("express");
const router = express.Router();
const Tache = require("../schemas/tache");


router.post("/", async (req, res) => {
    const tache = new Tache({
        name: req.body.name,
        matricule: req.body.matricule,
        Score: req.body.Score,
        Status: req.body.Status,
        Email_User: req.body.Email_User,
    });
    try {
        const savedTache = await tache.save();
        res.json(savedTache);
    } catch (err) {
        res.json({ message: err });
    }
});


router.get("/", async (req, res) => {
    try {
        const taches = await Tache.find();
        res.json(taches);
    } catch (err) {
        res.json({ message: err });
    }
});


router.get("/:tacheId", async (req, res) => {
    try {
        const tache = await Tache.findById(req.params.tacheId);
        res.json(tache);
    } catch (err) {
        res.json({ message: err });
    }
});


router.patch("/:tacheId", async (req, res) => {
    try {
        const updatedTache = await Tache.updateOne(
            { _id: req.params.tacheId },
            {
                $set: {
                    name: req.body.name,
                    matricule: req.body.matricule,
                    Score: req.body.Score,
                    Status: req.body.Status,
                    Email_User: req.body.Email_User,
                },
            }
        );
        res.json(updatedTache);
    } catch (err) {
        res.json({ message: err });
    }
});


router.delete("/:tacheId", async (req, res) => {
    try {
        const removedTache = await Tache.remove({ _id: req.params.tacheId });
        res.json(removedTache);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/matricule/:matricule", async (req, res) => {
    try {
        const tache = await Tache.find({ matricule: req.params.matricule });
        res.json(tache);
    } catch (err) {
        res.json({ message: err });
    }
});




module.exports = router;