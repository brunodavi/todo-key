module.exports = ({ message }, _req, res, _next) => {
  res.status(500).end({ message });
};
