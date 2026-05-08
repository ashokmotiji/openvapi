# OpenVapi - Free Vapi.ai Alternative

**100% Free self-hosted voice AI platform** with beautiful UI like Vapi.

## Features
- Vapi-style modern dashboard
- Real-time voice agents (browser + phone calls)
- Telnyx phone integration
- LiveKit real-time audio
- Local LLM via Ollama (Llama 3.1 etc.)
- No-code agent builder (in progress)

## How to Run

1. Install Docker Desktop
2. Clone this repo:
   ```bash
git clone https://github.com/ashokmotiji/openvapi.git
   cd openvapi
   ```
3. Copy environment file:
   ```bash
   cp .env.example .env
   ```
4. Edit `.env` and add your LiveKit and Telnyx credentials
5. Run:
   ```bash
   docker compose up --build
   ```

Open http://localhost:3000

## Get LiveKit Credentials
Create free account at https://cloud.livekit.io and get API Key + Secret.

## Get Telnyx
Sign up at https://telnyx.com and buy a phone number.

**Web calls = Completely Free**
**Phone calls = Only Telnyx per-minute charges (~₹0.5 - 1/min)**