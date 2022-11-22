
module.exports.loginProcess = loginProcess;
exports.index = function index(req, res){
    res.cookie('IndexCookie', 'This was set from Index');
    res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies), session: JSON.stringify(req.session)});
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
