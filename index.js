module.exports = CrowdRest

var requests = require('requests')

function CrowdRest(url, opts) {
  this.url = url
  this.opts = opts || {}
}

CrowdRest.prototype.get = function() {
  return requests.get(this.url)
}

CrowdRest.prototype.post = function(result) {
  return requests.post(this.url, result)
}