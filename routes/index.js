
module.exports.loginProcess = loginProcess;
exports.index = function index(req, res){
    res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies)});
   };
exports.login = function chat(req, res){
    res.render('login', {title: 'Login'});
   };
exports.chat = function chat(req, res){
    res.render('chat', {title: 'Chat'});
   };
function loginProcess(req, res){
 res.redirect('/');
};
