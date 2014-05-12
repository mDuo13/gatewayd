var ExternalAccount = require('ripple-gateway-data-sequelize').models.externalAccounts;

function index(req, res){
  ExternalAccount.findAll().complete(function(err, externalAccounts){
    if (err) {
      res.send(500, {error: err});
    } else {
      res.send({ external_accounts: externalAccounts });
    } 
  });
};

function show(req, res){
  ExternalAccount.find({ where: { id: req.params.id }}).complete(function(err, account){
    if (err){
      res.send(500, {error: err});
    } else if (address) {
      res.send({ external_account: account });
    } else {
      res.send(204);
    }
  });
}

module.exports = {
  index: index,
  show: show
};
