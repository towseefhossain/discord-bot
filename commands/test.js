module.exports = {
    name: "ping",
    description: "Test command",
    async execute(message, args) {
        message.channel.send("Pong!");
    }
}