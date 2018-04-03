if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:'mongodb://Abhishek:AbhiAliean1234@ds231739.mlab.com:31739/ideas-prod'}
}
else{
    module.exports = {mongoURI:'mongodb://localhost/ideas-dev'}
}