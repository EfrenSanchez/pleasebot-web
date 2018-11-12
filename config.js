export default {
    app: {
        token: "338143b1892d42c08a457a48f43842c2", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: false // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Try our bot",
            welcomeDescription: `You can type "Please, book a trip to London" for example. Or just press on the microphone and say it`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Please book...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "en-GB", // <- output language
            recognitionLang: "en-US" // <- input(recognition) language
        }
    }
}