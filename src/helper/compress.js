const {createGzip,createDeflate} = require('zlib');

module.exports = ((rs, req, res)=>{
   const acceptRncoding = req.headers['accept-encoding'];
   if (!acceptRncoding || acceptRncoding.match(/\b(gzip|deflate)/)){
       return rs;
   }else if(acceptRncoding.match(/\bgzip\b /)){
       res.setHeader('Content-Encoding','gzip');
       return rs.pipe(createGzip());
   }else if(acceptRncoding.match(/\bdeflate\b /)){
       res.setHeader('Content-Encoding','deflate');
       return rs.pipe(createGzip());
   }
});