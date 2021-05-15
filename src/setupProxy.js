const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
      proxy("/precio", {
        target: "https://www.komparing.com/es/gasolina/include/process-xml_maxLat-43.35420606979338_minLat-43.144027589216655_maxLong--1.8814086914062502_minLong--2.1615600585937504_zoomMapa-11_order-gsAs_gsA",
        secure: false,
        changeOrigin: true
      })
    );
  
   
  };