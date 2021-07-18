module.exports = (client) => {
    client.on('voiceStateUpdate', (oldState, newState) => {
        if (oldState.channelID === null || typeof oldState.channelID == 'undefined') return;
        if (newState.id !== client.user.id) return;
        return client.queue.delete(oldState.guild.id);
    });
}