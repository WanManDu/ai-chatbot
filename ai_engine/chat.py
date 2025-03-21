import openai
import os
from dotenv import load_dotenv

load_dotenv()

client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_response(message, character):
    if not message or not character:
        return "⚠️ 메시지나 캐릭터가 비어 있어요!"

    response = client.chat.completions.create(
        model="gpt-4",  # 필요 시 gpt-3.5-turbo로 교체
        messages=[
            {
                "role": "system",
                "content": f"You are {character}, and you speak in a unique tone. Respond like you are that character."
            },
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response.choices[0].message.content
