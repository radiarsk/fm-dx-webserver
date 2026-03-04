let connectedUsers = [];
let chatHistory = [];

function getConnectedUserList() {
    return connectedUsers
        .filter(u => u.ip?.replace('::ffff:', '') !== '127.0.0.1')
        .map(u => ({
            name: u.name ?? '',
            countryCode: u.countryCode ?? '',
            time: u.time ?? '',
            listening: u.listening ?? false,
        }));
}

module.exports = { connectedUsers, chatHistory, getConnectedUserList };