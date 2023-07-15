import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/', async (req, res) => {
    const data = await fetch('http://localhost:3001/tasks');
    const tasks = await data.json();
    res.send(tasks);
})

const startServer = () => {
    try {
        app.listen(8080, () => {
            console.log("Server started...")
        })
    } catch (error) {
        console.log(error)
    }
} 

startServer();