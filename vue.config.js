module.exports = {
    devServer: {
      allowedHosts: [
        'all',
        '.csb.app',
      ],
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws",
      }
    },
  };