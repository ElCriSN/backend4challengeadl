const { getPosts, addPosts, modPosts, deletePosts } = require('./likeme');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.listen(3000, console.log("TURN ON SERVEEEEEEER =DDD!"));

app.get("/posts", async (req, res) => {
    const posts = await getPosts()
    res.json(posts);
})

app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    await addPosts(titulo, img, descripcion, likes);
    res.send("Postt adeeeeeed =)!!");
})

app.put("/posts/like/:id", async (req, res) => {
    try {
        const { id } = req.params
        await modPosts(id);
        res.send("Post modeeed =)!!!")
    }

    catch (error) {
        res.status(500).send(error);
    }

})

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params
    await deletePosts(id);
    res.send("Post delteeeeed =)!!!")
})
