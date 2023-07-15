import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/', async (req, res) => {
    try {
        const data = await fetch('http://localhost:3030/tasks');
        const tasks = await data.json();
        res.send(tasks);
    } catch (error) {
        console.log(error);
    }
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