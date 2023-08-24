const express = require('express');
const app = express();
let router = express.Router();
let s3Bal = require('../models/BAL/s3Bal.js');



router.get("/getFile/*", async function (req, res) {
    console.log("hit , hit ");

    let myParams = req.params[0].split("/getFile");
    /**myParams gets the object key passed in URL*/

    /** url = 'getFile/objectName'  , then the object key becomes 'objectName' , which is the passed on to 
     * getFile() function.
     */
    try {
        /**getFile() return the body of file requested */
        let fileData = await s3Bal.getFile(myParams);
        res.status(200);
        res.write(fileData);
        res.end()
        return;
    } catch (err) {
        res.send(err)
    }
});

module.exports = router;