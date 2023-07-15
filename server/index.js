import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/', async (req, res) => {
    res.send("hiii from the server...")
    try {
        const data = await fetch('http://localhost:3030/tasks');
        const tasks = await data.json();
        console.log(tasks);
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