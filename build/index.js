"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./transation/routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/healthcheck', function (req, res) {
    res.send('everything ok');
});
// mongoose.connect('mongodb+srv://leandronovaes:53Gst52nybl0qhHy@cluster0.xj0qd.mongodb.net/financial-control?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
var PORT = 3333;
app.listen(PORT || process.env.PORT, function () { return console.log("App listening on PORT ".concat(PORT)); });
