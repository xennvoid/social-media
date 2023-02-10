const express = require('express');
const morgan = require('morgan');
const dotenv = require("dotenv");
const cors = require('cors');

/* Routes */
const userRoutes = require('./routes/users.js')
const authRoutes = require('./routes/auth.js');
const postsRoutes = require('./routes/posts.js')
const commentsRoutes = require('./routes/comments.js')

const cookieParser = require('cookie-parser');

const app = express();

/* Bodyparser Middleware */
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
});

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
}
app.use(cors(corsOptions));

app.use(cookieParser(process.env.SECRET_KEY));

/* Load env */
dotenv.config({ path: "./config.env" });

//* Log rout actions
if (process.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

//* Using Routes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Server started on port ${port}`));
