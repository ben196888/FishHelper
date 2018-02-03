var request = require('request');

module.exports = (apiRoutes) => {
    
    const abc_test = require('./models/abc-test');

    apiRoutes.route('/abc-test')
    .get(function(req, res) {
        request("http://203.73.3.172/younginfinity/ajax.aspx?QQQ=fish&User=fishUser&Type=fish_test", function (error, response, body) {
            if (!error && response.statusCode == 200) {
            //   var info = JSON.parse(body)
              // do more stuff
              res.send(body);
            }
        })        
        // res.json({ message: 'abc_test page!' });
    });

    apiRoutes.route('/fishKind')
    .get(function(req, res) {
        request("http://203.73.3.172/younginfinity/ajax.aspx?QQQ=fish&User=fishUser&Type=fish_get_Fish_C_Fishkind", function (error, response, body) {
            if (!error && response.statusCode == 200) {

              res.send(response.body);
            }
        }) 
    });

    apiRoutes.route('/fishInfo/:id')
    .get(function(req, res) {
        let fishId = req.params.id;
        request("http://203.73.3.172/younginfinity/ajax.aspx?QQQ=fish&User=fishUser&Type=fish_get_Fish_ALL&fishKindID=" + fishId, function (error, response, body) {
            if (!error && response.statusCode == 200) {

              res.send(response.body);
            }
        }) 
    });

    apiRoutes.route('/abc-test')
    .post(function(req, res) {
        console.log("in router abc-test post")
        // abc_test.name = req.body.name;  // set the abc_test name (comes from the request)
        test.name = "123"
        console.log(test)
        // save the abc_test and check for errors
        test.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'abc_test created!' });
        });

    });

}