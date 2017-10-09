const socketWrapper = server => socket => {
  return {
    socket,
    session: {},
    send: (type, data) => {
      socket.send({
        type,
        data,
      });
    }
  };
};

module.exports = socketWrapper;
