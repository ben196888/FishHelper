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
        let data = [{
            "ID":1,
            "Name_TW":"鱒魚",
            "Name_CN":"鳟鱼",
            "Name_EN":"Trout"
        },{
            "ID":2,
            "Name_TW":"比目魚",
            "Name_CN":"比目鱼",
            "Name_EN":"Flatfish"
        },{
            "ID":3,
            "Name_TW":"石斑魚",
            "Name_CN":"石斑鱼",
            "Name_EN":"Grouper"
        },{
            "ID":5,
            "Name_TW":"鱸魚",
            "Name_CN":"鲈鱼",
            "Name_EN":"Sea Bass"
        }];
        res.json({ message: data });
    });

    apiRoutes.route('/abc-test')
    .post(function(req, res) {
        console.log("in router abc-test post")
        var test = new abc_test();      // create a new instance of the abc_test model
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