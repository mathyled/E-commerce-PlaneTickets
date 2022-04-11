const { flightCartDb } = require("../../models");

const deleteFlightCart = async (req, res) => {
    try {
        const { id } = req.params;
        await flightCartDb.findByIdAndDelete(id);
        res.status(200).send({ status: "success", data: "deleted flight" });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error deleting flight" });
    };
};

module.exports = {
    deleteFlightCart,
};
