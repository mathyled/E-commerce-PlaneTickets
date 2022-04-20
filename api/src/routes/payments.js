
const router = require ("express").Router();
const stripe = require ("stripe")("sk_test_51KmQZ1Cz6RSCMCCXfki5wLQfIufeDLJwT93tfUISULgg4tQ8w4OEurOIHD9snsXjPt4EWKlFXGQwBdWsCutgLznT00p2RDv3PS");


router.post("/", (req,res)=> {
    stripe.charges.create({
            source: req.body.tokenId,
            amount:req.body.amount,
            currency:"usd",
        }, (striperErr, stripeRes)=>{
            if(striperErr){
                res.status(500).json(striperErr)
            }else{
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;