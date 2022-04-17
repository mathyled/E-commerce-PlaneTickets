const logout = (req, res) => {
  req.session.destroy(() => {
    res.status(200).send({ message: "Logged out" });
  });
};

module.exports = {
  logout,
};
