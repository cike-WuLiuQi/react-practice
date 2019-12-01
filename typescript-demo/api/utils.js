function md5(val) {
    return require('crypto').createHash('md5').update(val).digest('hex');
  }
  module.exports = {
    md5
  }