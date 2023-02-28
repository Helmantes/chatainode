const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


async function chat() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });
    
}
chat();