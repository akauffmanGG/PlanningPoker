var sessions = [];

exports.save = (sessionId) => {
    sessions.push(sessionId);
};
