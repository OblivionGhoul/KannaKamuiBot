const Discord = require('discord.js')
        const quiz = require('../../jsons/quiziz/weather-quiz.json');
module.exports = {
    command: ["weather-quiz", 'w-q', `w-quiz`],
    callback: async(client, message, args) {

	const item = quiz[Math.floor(Math.random() * quiz.length)];

message.channel.send(item.question).then(() => {

	const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
			const yep = new Discord.MessageEmbed()
			.setTitle('Correct!')
			.addField('Question:', item.question)
			.addField('Question ID', item.number)
			.addField('Winner:', collected.first().author)
			.setFooter('Cograts! Any questions or think something isnt right? Head over the to the support server and ask it with the question number!')
			message.channel.send(yep);
		})
    
		.catch(collected => {
			const nope = new Discord.MessageEmbed()
			.setTitle('Oops')
			.setDescription(`Looks like no one got the answer this time. \n Question ID: ${item.number}`)
			.setFooter('Think something is wrong here? Go ask in our support server with the question number!')
			message.channel.send(nope);
		});
});

	}
}
