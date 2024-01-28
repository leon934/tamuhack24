import React, { useEffect } from 'react'

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.botpressWebChat.init({
                botConversationDescription: "Willing to help you with everything!",
                composerPlaceholder: "Chat with AirControl AI Helper",
                botId: '568dd473-fe93-4fda-b42f-f52b73c51055',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                clientId: '568dd473-fe93-4fda-b42f-f52b73c51055',
                webhookId: "50455c42-2117-4f0a-a41f-5da5102d17af",
                lazySocket: true,
                themeName: "prism",
                botName: "AirControl AI Helper",
                frontendVersion: "v1",
                useSessionStorage: true,
                showBotInfoPage: true,
                theme: "prism",
                themeColor: "#2563eb"
            })
        }
    }, [])

    return <div id="webchat" />
}

export default Chatbot;