# TheMTGBot Commands

For more information on why MTGBot is now named TheMTGBot, please refer to [this document](https://github.com/danbopes/mtgbot-irc/blob/master/ABOUT.md).

### Broadcaster Only Commands
Command                  | Description
------------------------ | -------------
**!addplug `message`** | Displays a message in the channel every X minutes. This is useful for broadcasters who want to throw out plugs, advertising clans, upcoming raffles, or simply to ask users to follow the channel.
**!delplug `message`** | Deletes a plug from the plug list (Enter the full message to be deleted).
**!plugoff** | Deletes all plugs from the plug list.
**!plugtime `time`** | Sets the interval in minutes at which a plug will be outputted to the channel. (Default: 60 minutes)
**!submessage `message`** | Set the message when a user subscribes to the channel. `message` is the message to send or 'off' to disable sub message. `%user%` will be replaced with the new subscriber name, and `%count%` will be replaced with the current count for the stream. Defaults to: 'BloodTrail Boros fist bump to you! Todays Storm Count: `%count%`'
**!mtgousername `username`** | Set your MTGO Username to have me auto post when round starts, and enable the !status command.
**!autopost `level`** | Sets the autopost level of how I post MTGO round starts in chat.<br />**Possible Levels:**<br />`off` - Disables autopost.<br />`minimal` - Will display the round, and who you're playing and their multi-queue status.<br />`ratings` (Default) - Will display the round, who you're playing, and their ratings and multi-queue status.
**!antispam `# of responses` `minutes`** | Sets how often I respond to non mods. Ex: "!antispam 3 5" would allow me to answer 3 times every 5 minutes for non mods. This is the default setting I come with.
**!pricesource `source`** | Sets the source for the !price command. Current valid options: [MTGO Traders](http://www.mtgotraders.com/), [DOJO](http://www.dojotradebots.com/), [Cardhoarder](http://cardhoarder.com) or Modo_Mart (Default is MTGO Traders).
**!puntthreshold `threshold`** | Set's the threshold for a punt to be considered a punt, or `0` to disable punts. (Defaults to `1`, which will automatically increment the punt counter).
**!part** | This will have me leave the channel.

### Moderator Only Commands
Command                  | Description
------------------------ | -------------
**!poll `seconds` `option 1`, `option n`** | Starts a poll. This is a pretty useful feature for broadcasters. Let's say you wanted to ask your viewers in 60 seconds what their favorite color of magic is. Ask the question in your stream, and then type "!poll 60 red, blue, green, white, black". I will count the first answer from each person, and answers are not case sensitive.
**!strawpoll `option 1`, `option n`** | Creates a strawpoll and returns the link to chat.
**!addcom `-ul=userlevel` !`command`** | Adds a custom command that the bot will respond to. For example: "!addcom !test Hello %user%, we are testing out this command for the %count%th time." would add a command, so when you type !test, I would respond with the text. An optional userlevel (`-ul=userlevel`) can be added to restrict this command to. If omitted, will allow anyone to use the command. Possible userlevels: broadcaster or mod." To allow anyone to use a command, don't include the "-ul" flag at all.<br />**Variables:**<br />`%user%` - User who requested it<br />`%count%` - how many times the command has been used<br />`%input%` - Any possible user input when they use the command
**!delcom !`command`** | Deletes a custom command.
**!rviewer** | Selects a random viewer in the channel.
**!ignore `user`** | Adds a user to the ignorelist, which prevents the bot from responding to them.
**!unignore `user`** | Removes a user from the ignorelist, which allows the bot to respond to them.
**!ignorelist** | Displays the current ignorelist.
**!notapunt** | Undo a recent punt that occurred.
**!addreg `user`** | Add a regular to the regular list. Regulars are able to query MTGBot while running in !modonly mode, and around any !antispam filters.
**!delreg `user`** | Removes a regular to the regular list. Regulars are able to query MTGBot while running in !modonly mode, and around any !antispam filters.
**!reglist** | Display the current list of regulars.
**!modonly** | Toggles modonly mode, which only allows me to respond to mods. This feature is useful if I am is being abused. While it is harder now to spam because you can set !antispam settings, this can be used to tell me to only respond to mods. (If this is toggled on, subonly will be toggled off)
**!subonly** | Toggles subscriber only mode, which only allows me to respond to mods or subscribers. This feature is useful in high user environments. (If this is toggled on, modonly will be toggled off)

### Commands
Command                  | Description
------------------------ | -------------
**!card `card` OR !oracle `card`** | The basic use of MTGBot. Looks up a card, and displays oracle text.
**!flavor `card`** | Fetches the flavor text(s) of a card.
**!link `card`** | Fetches the magiccards.info link for a card.
**!artist `card`** | Fetches the artist(s) of a card.
**!price `card`** | Looks up a card on based on your price source (See !pricesource in broadcaster commands), and fetches the MTGO prices. (Regular prices coming soon)
**!random** | Selects a random card and displays the oracle text.
**!spoiler `card`** | Fetches a card from the [MTG Salvation](http://www.mtgsalvation.com/) spoiler and displays the possible oracle text. If `card` is omitted, then it will show the latest 5 spoilers.</td>
**!status OR !record** | Fetches the current MTGO tournament status for the current broadcaster.
**!commanders** | Fetches the current commanders from the current game the broadcaster is playing in.
**!commander OR !general** | Fetches the current broadcaster's commander and oracle text from the game they are playing in.
**!last** | Fetches the last MTGO tournament status (event and record) for the current broadcaster.
**!rating `mtgo username`** | Fetches the Composite, Constructed, and Limited rating of anyone on magic online. This currently only works in [MTGBot's Channel](http://twitch.tv/themtgbot) for non mods.
**!flip** | Flips a coin.
**!roll `n`** | Roll an n-sided die. As a broadcaster this could be really useful. Let's say you have a raffle with a list of users, each assigned a number (Let's say 17 for this example). You can do "!roll 17" and pick a person from your list.
**!topdeck** | For those moments when you topdeck the perfect card.
**!punt** | For those moments when a punt occurs.
**!puntcount** | Displays the current !punt count.
**!tableflip or !fliptable** | For those moments when you need to let your frustrations out.
**!explain `what`** | Displays a commonly occurring message for newcomers. Some examples that you can use: mtgo, layers, standard, draft/drafting/sealed/limited, block, extended, modern, vintage, legacy, f8, any shard or guild.
**!uptime** | Displays the stream uptime.
**!help** | Displays a help message sending the user here.
