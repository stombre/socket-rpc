/**
 * Created by guillaume on 25/09/2017.
 */

const socketWrapper = server => socket => {
  return {
    socket,
    send: (type, data) => {
      socket.send({
        type,
        data,
      });
    }
  };
};

module.exports = socketWrapper;
