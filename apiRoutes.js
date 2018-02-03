
module.exports = (apiRoutes) => {
    
    const abc_test = require('./models/abc-test');

    apiRoutes.route('/abc-test')
    .get(function(req, res) {
        console.log("in router abc-test")
        res.json({ message: 'abc_test page!' });
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