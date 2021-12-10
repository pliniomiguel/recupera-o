import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/list', async (req, resp) => {
    try {
        let mensagens = await db.rec_infod40.findAll();
        resp.send(mensagens);
    } catch (e) {
        resp.send(e.toString())
    }
})

app.post('/insert', async (req, resp) => {
    try {
        let {id_nome} = req.body;

        let f = await db.rec_infod40.create({
            id_nome: id_nome
        })
        resp.send(f);
    } catch (e) {
        resp.send(e.toString())
    }
});

app.listen(process.env.PORT, x => console.log(`Subiu bebebzin`))