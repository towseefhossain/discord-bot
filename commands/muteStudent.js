module.exports = {
    name: 'mute',
    description: 'Mute a student',
    execute(message, args) {
        // if (message.member.roles.cache.find(r => r.name !== 'Teacher')) {
        //     console.log("You can't do that!");
        //     console.log(message.member.roles.cache);
        //     return;
        // }

        const userToMute = message.mentions.members.first();
        console.log(userToMute.name);
        const muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');

        // add that role to the user that should be muted
        userToMute.roles.add(muteRole);
        
        // the time it takes for the mute to be removed
        // in miliseconds
        const MUTE_TIME = 60 * 100;
        message.channel.send(`${userToMute.user.username} is muted for ${MUTE_TIME / 60} seconds*`);
        
        // wait MUTE_TIME miliseconds and then remove the role
        setTimeout(() => {
            userToMute.roles.remove(muteRole);
            message.channel.send(`${userToMute.user.username} is unmuted`);
        }, MUTE_TIME);

        return;
    
    }
}