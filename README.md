# Notes
Invite the bot to your server [here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)!

Visit my website [here](https://oblivionghoul.com/)!

This bot is still a work in progress so the command list below might not be the up to date!

The default prefix for this bot is [-].

I included the node_modules folder and a Procfile in this repository because I am hosting the bot through Heroku, and Heroku just uses the code from GitHub. I am sure there might be a work around, but I have not gotten there yet.

# Bot Commands
Use the help command to get the most updated list of bot commands. (`-help`)
## Fun
Meme, Roast, Ascii, Advice, Joke, Coin, Kpop, 8Ball, PP, RPS, Christmas, Dog, Cat, Hug, Kanna, Tic-Tac-Toe, ChangeMyMind, Sign, PH, Animemes, Waifus, AnimeQuote.

## Utility 
Calc, Userinfo, Avatar, Weather, Serverinfo, Botinfo, EmojiInfo, Ping, Imdb, Emoji, Verse, Anime, ServerPicture.

## Moderation
Ban, Kick, Poll, Close, DM, Nickname, Setprefix.

## Music 
Play, Pause, Resume, Stop, Skip, Queue, Volume, NowPlaying, Leave.

## Developer Tools
Docs, Channel, Execute.

## Nsfw
Hass, Hmidriff, Pgif, 4k, Hentai, Hneko, Hkitsune, Anal, Hanal, Gonewild, Ass, Pussy, Thigh, Hthigh, Paizuri, Tentacle, Boobs, Hboobs.

## Valorant
Valorant Stats, Valorant Matches, Valorant Map

# Setting Up Welcome Messages
Use this command in the welcome channel to set up welcome messages. (Please note that you can do "<@>" to send the username of the user that just joined. You can also do `-simwelcome` to test welcome messages.)
```
-setwelcome [welcome message]
```
**Usage**:

`-setwelcome Welcome to the server, <@>!`

**Output**: 

`Welcome to the server, @OblivionGhoul!`

# Setting Up Leave Messages
Use this command in the leave channel to set up leave messages. (Please note that you can do "<@>" to send the username of the user that just joined. You can also do `-simleave` to test leave messages.)
```
-setleave [welcome message]
```
**Usage**:

`-setleave Goodbye, <@>!`

**Output**: 

`Goodbye, @OblivionGhoul!`
# Support
Join my discord server above for support. You can also open an issue on GitHub. 
# Contributions
All contributions are welcome! I am new to GitHub and Javascript, so any advice would be great! I will also accept recommendations on new commands.
# Known Issues
1. Roast - Errors and shows use %roast @user
2. ChangeMyMind - Gets stuck on creating image
