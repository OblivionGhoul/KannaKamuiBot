const discord = require('discord.js')
const fetch = require("node-fetch");
const atob = require('atob')

module.exports = {
    commands: ['animet', 'atrivia', 'animetrivia', 'anime-trivia', 'at'],
    callback: async (message, args) => {
        class Game {
            constructor(message, args) {
                this.message = message
                this.args = args
                this.player = message.author.id
                this.reactions = ['🇦', '🇧', '🇨', '🇩']
                this.question
                this.init()
            }
            async init() {
                if (!this.args.length) this.get_data()
                if (this.args[0] && !this.args[1]) this.get_data(this.args[0])
                if (this.args[0] && this.args[1]) this.get_data(this.args[0], this.args[1])
            }
            async get_data(dif, cat) {
                if (!dif && !cat) {
                    let question
                    await fetch('https://opentdb.com/api.php?amount=1&category=31&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
                if (dif && !cat) {
                    let question
                    if (dif.toLowerCase() == 'any') return this.get_data()
                    if (dif.toLowerCase() != 'easy' && dif.toLowerCase() != 'medium' && dif.toLowerCase() != 'hard') return this.message.channel.send('Please enter a valid Difficulty\n(Easy, Medium, Hard)');
                    await fetch('https://opentdb.com/api.php?amount=1&difficulty=' + dif.toLowerCase() + '&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
                if (dif && cat) {
                    let question
                    for (let i in id_list) {
                        if (id_list[i].name.toLowerCase().replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '') == cat.toLowerCase()) {
                            this.question_id = id_list[i].id
                        }
                    }
                    if (dif.toLowerCase() != 'easy' && dif.toLowerCase() != 'medium' && dif.toLowerCase() != 'hard' && dif.toLowerCase() != 'any') return this.message.channel.send('Please enter a valid Difficulty\n(Easy, Medium, Hard)');
                    if (!this.question_id) return this.message.channel.send('Please enter a valid Category\n(Easy, Medium, Hard)');
                    if (dif.toLowerCase() == 'any') {
                        await fetch('https://opentdb.com/api.php?amount=1&category=' + this.question_id + '&encode=base64')
                            .then(response => response.json())
                            .then(data => question = data);
                        this.question = question
                        return this.show_question();
                    }
                    await fetch('https://opentdb.com/api.php?amount=1&category=' + this.question_id + '&difficulty=' + dif.toLowerCase() + '&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
            }
            async show_question() {
                if (atob(this.question.results[0].type) == 'multiple') {
                    this.question_length = 3
                    this.correct_answer = Math.floor((Math.random() * 4) + 1)
                    if (this.correct_answer == 1) {
                        this.answer_array = [
                            'A - ' + atob(this.question.results[0].correct_answer),
                            'B - ' + atob(this.question.results[0].incorrect_answers[0]),
                            'C - ' + atob(this.question.results[0].incorrect_answers[1]),
                            'D - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer == 2) {
                        this.answer_array = [
                            'A - ' + atob(this.question.results[0].incorrect_answers[0]),
                            'B - ' + atob(this.question.results[0].correct_answer),
                            'C - ' + atob(this.question.results[0].incorrect_answers[1]),
                            'D - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer == 3) {
                        this.answer_array = [
                            'A - ' + atob(this.question.results[0].incorrect_answers[0]),
                            'B - ' + atob(this.question.results[0].incorrect_answers[1]),
                            'C - ' + atob(this.question.results[0].correct_answer),
                            'D - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer == 4) {
                        this.answer_array = [
                            'A - ' + atob(this.question.results[0].incorrect_answers[0]),
                            'B - ' + atob(this.question.results[0].incorrect_answers[1]),
                            'C - ' + atob(this.question.results[0].incorrect_answers[2]),
                            'D - ' + atob(this.question.results[0].correct_answer)
                        ]
                    }
                    this.question_embed = new discord.MessageEmbed()
                        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                        .setColor('#0099ff')
                        .setTitle(atob(this.question.results[0].question))
                        .setDescription(this.answer_array)
                        .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                }
                if (atob(this.question.results[0].type) == 'boolean') {
                    this.question_length = 1
                    if (this.question.results[0].correct_answer == 'true') {
                        this.correct_answer = 1
                    }
                    else {
                        this.correct_answer = 2
                    }
                    this.answer_array = [
                        'A - ' + 'True',
                        'B - ' + 'False'
                    ]
                    this.question_embed = new discord.MessageEmbed()
                        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                        .setColor('#0099ff')
                        .setTitle(atob(this.question.results[0].question))
                        .setDescription(this.answer_array)
                        .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                }
                this.question_message = await this.message.channel.send(this.question_embed)
                let step = -1
                while (step < this.question_length) {
                    step++
                    await this.question_message.react(this.reactions[step])
                }
                return this.await_reactions()
            }
            async await_reactions() {
                this.question_message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🇦' || reaction.emoji.name == '🇧' || reaction.emoji.name == '🇨' || reaction.emoji.name == '🇩'),
                    { max: 1, time: 30000 }).then(collected => {
                        this.reaction = collected.first().emoji.name
                        if (this.reaction == '🇦') this.input_answer = 1
                        if (this.reaction == '🇧') this.input_answer = 2
                        if (this.reaction == '🇨') this.input_answer = 3
                        if (this.reaction == '🇩') this.input_answer = 4
                        if (this.input_answer == this.correct_answer) {
                            this.answer_array[this.input_answer - 1] = this.answer_array[this.input_answer - 1] + ' ✅'
                            this.question_embed = new discord.MessageEmbed()
                                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                                .setColor('#0099ff')
                                .setTitle(atob(this.question.results[0].question))
                                .setDescription(this.answer_array)
                                .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                            this.question_message.edit(this.question_embed)
                            this.question_message.edit('You got it correct! :smile:')
                            this.end_game()
                        }
                        else {
                            this.answer_array[this.input_answer - 1] = this.answer_array[this.input_answer - 1] + ' ❌'
                            this.question_embed = new discord.MessageEmbed()
                                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                                .setColor('#0099ff')
                                .setTitle(atob(this.question.results[0].question))
                                .setDescription(this.answer_array)
                                .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                            this.question_message.edit(this.question_embed)
                            this.question_message.edit('You got it wrong. The correct answer was ' + this.reactions[this.correct_answer - 1])
                            this.end_game()
                        }
                    }).catch(() => {
                        this.question_message.edit('You took to long to answer! Game has timed out. The answer was ' + this.reactions[this.correct_answer - 1])
                        this.end_game()
                    })
            }
            async end_game() {
                this.question_message.reactions.removeAll()
                game = null
            }
        }
        var game = new Game(message, args)
    },
}