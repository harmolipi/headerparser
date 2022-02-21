exports.get_whoami = (req, res) => {
  const whoamiJSON = {
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  };

  res.json(whoamiJSON);
};
