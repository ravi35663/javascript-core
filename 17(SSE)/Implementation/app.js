const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.get('/sse',(req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendSSE = (data)=>{
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }
    let count = 1;
    // Send data to the client every 2 seconds (for demonstration purposes)
    const interval = setInterval(() => {
      sendSSE({ message: 'Hello from the server'+count });
      count+=2;
    }, 2000);
  
    // Close the connection if the client disconnects
    req.on('close', () => {
        console.log("Browser is closed");
      clearInterval(interval);
      res.end();
    });
    
})


const PORT = 3000
app.listen(PORT,(err)=>{
    if(!err){
        console.log("Server is running on port",PORT);
    }
})

  