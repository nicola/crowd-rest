module.exports = CrowdRest

var request = require('request')

function CrowdRest(url, opts) {
  if (!(this instanceof CrowdRest))
    return new CrowdRest(url, opts)

  this.url = url
  this.opts = opts || {}
}

function returnBody(cb) {
  return function(err, res, body) {
    cb(err, body)
  }
}

CrowdRest.prototype.get = function(cb) {
  return request.get(this.url, returnBody(cb))
}

CrowdRest.prototype.send = function(result, cb) {
  return request.post(this.url, result, returnBody(cb))
}