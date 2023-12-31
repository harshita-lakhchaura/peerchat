const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { connect } = require("http2");

const io = require("socket.io")(server, {
    cors: {
        origin: '*',
        methoods: ['GET', 'POST']
    }
});

app.use(cors());

const PORT=process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send('Server is running.');
});

io.on('connection',(socket)=>{
    // console.log(socket,'c');

    socket.emit('me',socket.id);

    socket.on('disconnect',()=>{
        socket.broadcast.emit('callEnded');
    })

    socket.on('callUser',({userToCall, signal, from, name})=>{
        // console.log(userToCall, signal, from, name,'c');
        io.to(userToCall).emit('callUser',{signal:signal, from, name});
    })

    socket.on('answerCall',(data)=>{
        io.to(data).emit('callAccepted',data.signal);
    })
})

server.listen(PORT,()=> console.log(`Server listening on port ${PORT}`));