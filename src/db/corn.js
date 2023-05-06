const mongoose = require("mongoosh");

mongoose.connect("",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB');
}).catch((e) => {
    console.log(e);
})