import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());


app.get('/list', async (req, resp) => {

    try {
    let pessoas = await db.rec_infod40.findAll({ order:[['id']]})
    resp.send(pessoas);
    } catch (e) {
    resp.send({erro: e.toString()})
    }
})

app.post('/list', async (req, resp) => {
    try{
        let {id_nome} = req.body;
        let r = await db.rec_infod40.create({
            id_nome: id_nome
        })
     resp.send(r);
    }catch (e) {
     resp.send({erro: e.toString()})
    }
})

app.listen(process.env.PORT,

x => console.log(`subiu bebe ${process.env.PORT}`))