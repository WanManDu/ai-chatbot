from fastapi import FastAPI, Request
from chat import generate_response

app = FastAPI()

@app.post("/generate")
async def generate_chat(request: Request):
    data = await request.json()
    message = data["message"]
    character = data["character"]

    # DEBUG
    print("🔍 message:", message)
    print("🔍 character:", character)


    response = generate_response(message, character)
    return { "response": response}


