

const backend = 'http://localhost:8080';

const SummaryApi = {
    chatbotmess: {
        url: `${backend}/api/chatbot`,
        method: 'POST'
    },
    generateSas: {
        url: `${backend}/api/generate-sas-token`,
        method: 'GET'
    }
}

export default SummaryApi;