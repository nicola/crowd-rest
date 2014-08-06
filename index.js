module.exports = CrowdRest

var request = require('request')

function CrowdRest(url, opts) {
  this.url = url
  this.opts = opts || {}
}

CrowdRest.prototype.get = function() {
  return request.get(this.url)
}

CrowdRest.prototype.post = function(result) {
  return request.post(this.url, result)
}