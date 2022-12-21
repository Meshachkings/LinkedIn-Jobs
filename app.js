require('dotenv').config();
const       express = require('express')

// -------------------------------------------//
const getter = require('./routes/linkedIn')

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------------------------------//
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// -------------------------------------------//

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/result', (req, res) => {
    
    res.render('result', {now});
})

app.use('/find-jobs', getter)



app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`)
})