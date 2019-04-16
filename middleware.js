module.export.json = function() {
  return {
    inbound: function(message, next) {
      message.data = JSON.parse(message.data.toString());
      next();
    },
    outbound: function(message, next) {
      message.data = new ArrayBuffer(JSON.stringify(message.data));
      next();
    }
  };
};
