(function() {
    var getfunction = function() {
        if(window.Ember && window.App && App.__container__.lookup("controller:application").get("currentRouteName") === "channel.index") {
            return App.__container__.lookup("controller:channel").get('id');
        } else if(bttv.getChatController() && bttv.getChatController().currentRoom) {
            return bttv.getChatController().currentRoom.id;
        } else if(window.PP && PP.channel) {
            return PP.channel;
        }
    }

    /*if (window.Ember) {
        var renderingCounter = 0;

        var waitForLoad = function (callback, count) {
            var count = count || 0;
            if (count > 5) {
                callback(false);
            }
            setTimeout(function () {
                if (renderingCounter === 0) {
                    callback(true);
                } else {
                    waitForLoad(callback, ++count);
                }
            }, 1000);
        }

        Ember.subscribe('render', {
            before: function () {
                renderingCounter++;
            },
            after: function (name, ts, payload) {
                renderingCounter--;

                if (!payload.template) return;
                //debug.log(payload.template);

                if (App.__container__.lookup("controller:application").get("currentRouteName") !== "channel.index") {
                    $('#main_col').removeAttr('style');
                } else if (App.__container__.lookup("controller:channel").get("theatreMode") === false && bttv.settings.get('autoTheatreMode') === true) {
                    enableTheatreMode();
                }
                switch (payload.template) {
                    case 'shared/right-column':
                        waitForLoad(function (ready) {
                            if (ready) {
                                bttv.chat.store.isLoaded = false;
                                betaChat();
                                chatFunctions();
                                if (bttv.socketServer) {
                                    bttv.socketServer.emit("join channel", { channel: ((bttv.getChannel()) ? bttv.getChannel() : null) })
                                }
                            }
                        });
                        break;
                    case 'channel/index':
                        waitForLoad(function (ready) {
                            if (ready) {
                                handleBackground();
                                clearClutter();
                                channelReformat();
                                $(window).trigger('resize');
                                setTimeout(function () {
                                    $(window).trigger('resize');
                                }, 3000);
                            }
                        });
                        break;
                    case 'channel/profile':
                        waitForLoad(function (ready) {
                            if (ready) {
                                vars.emotesLoaded = false;
                                betaChat();
                                chatFunctions();
                                channelReformat();
                                $(window).trigger('resize');
                            }
                        });
                        break;
                    case 'directory/following':
                        waitForLoad(function (ready) {
                            if (ready) {
                                directoryFunctions();
                            }
                        });
                        break;
                }
            }
        });
    }*/

    var checkJquery = function (times) {
        times = times || 0;
        if (times > 9) return;
        if (typeof (window.jQuery) === 'undefined') {
            setTimeout(function () { checkJquery(times + 1); }, 1000);
            return;
        } else {
            main(window.jQuery);
        }
    }

    var appendMessage = function() {
        
    }

    window.__mtgSetImage = function(image) {
    	if ( !image )
    		return;
    	$('#mtg-img').attr('src', image);
    }

    var main = function ($) {
        console.log("Magic - Twitch Integration init");

        if (window.App.__container__.lookup("controller:application").get("currentRouteName") === "loading") {
            setTimeout(function () { main(window.jQuery); }, 1000);
            return;
        }

        if (window.App.__container__.lookup("controller:application").get("currentRouteName") !== "channel.index") {
            console.log(window.App.__container__.lookup("controller:application").get("currentRouteName"));
            console.log("We're not on a channel page. Exiting.");
            return;
        }

        $('.ember-view.ember-chat').prepend(
            $('<div/>').attr('id', 'mtg-container')
        		.append($('<img/>').attr('id', 'mtg-img'))
        		.append($('<div/>').attr('id', 'mtg-log'))
        );

        $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'http://mtgbot.tv/mtgbot.css?'+Math.random()));

	var channel = App.__container__.lookup("controller:channel").get("name");

        $.getScript("http://mtgbot.tv/Scripts/jquery.signalR-2.2.0.js")
            .done(function() {
                $.getScript("http://mtgbot.tv/signalr/hubs")
                .done(function () {
                    $.connection.hub.url = 'http://mtgbot.tv/signalr';
                    $.connection.hub.logging = true;
                    var streamerHub = $.connection.streamerHub;

                    streamerHub.client.gameMessage = function(message) {
                        var card = message.match(/\[([^|\]]+)\|([^|\]]*)\]/);
                        if ( card && card[1] != "Mountain" && card[1] != "Forest" && card[1] != "Plains" && card[1] != "Swamp" && card[1] != "Island" ) {
				$('#mtg-img').attr('src', card[2]);
                        }
                        message = message.replace(/\[([^|\]]+)\|([^|\]]*)\]/g, '<a href="#" onclick="return false" onmouseover="window.__mtgSetImage(\'$2\')">$1</a>');
                        $('#mtg-log').append($('<p/>').html(message));

                        $('#mtg-log').scrollTop($('#mtg-log')[0].scrollHeight);
                    }

                    streamerHub.client.gameStartup = function(message) {
                        console.log('Startup');
                        console.log(message);
                        //$('#container').append($('<p/>').text(message));
                    };
                    $.connection.hub.start().done(function () {
                        streamerHub.server.subscribe(channel).done(function(game) {
                            console.log("Game: ", game);
                            console.log("Connected, transport = " + $.connection.hub.transport.name);
                        });
                        // Wire up Send button to call NewContosoChatMessage on the server.
                    });
                });
            });

        /*clearClutter();
        channelReformat();
        checkBroadcastInfo();
        brand();
        darkenPage();
        splitChat();
        flipDashboard();
        formatDashboard();
        checkMessages();
        checkFollowing();
        giveawayCompatibility();
        dashboardChannelInfo();
        directoryFunctions();
        handleTwitchChatEmotesScript();
        emoticonTextInClipboard();
        if (bttv.settings.get('chatImagePreview') === true) {
            enableImagePreview();
        }
        if (bttv.settings.get('autoTheatreMode') === true) {
            enableTheatreMode();
        }

        $(window).trigger('resize');
        setTimeout(function () {
            channelReformat();
            vars.userData.isLoggedIn = Twitch.user.isLoggedIn();
            vars.userData.login = Twitch.user.login();
            $(window).trigger('resize');
        }, 3000);
        setTimeout(chatFunctions, 3000);
        setTimeout(directoryFunctions, 3000);*/
    };

    checkJquery();
})();
