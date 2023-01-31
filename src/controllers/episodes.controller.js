import Episode from "../models/episode.js";

const season = async (req,res) => {
    try{
        const season_id = req.params.season
        const episodes = await Episode.find({
            season_id,
        })
        res.json(episodes)

    }catch (err) {
    res.status(500).send(err.message);
    }
}

export default season;