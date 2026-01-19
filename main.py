from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import List

app = FastAPI()

# Modelos
class Goal(BaseModel):
    title: str
    target: float
    current: float
    days_left: int
    work_hours: int

class Post(BaseModel):
    user: str
    goal_title: str
    content: str
    type: str # achievement ou struggle

# Banco de dados simulado (Em produção, use PostgreSQL)
community_db = [
    {"user": "Marcos", "goal_title": "Inglês", "content": "30 dias de foco!", "type": "achievement", "likes": 12},
    {"user": "Ana", "goal_title": "Investimentos", "content": "Dificuldade em poupar este mês.", "type": "struggle", "likes": 5}
]

@app.post("/analyze")
async def analyze_goal(data: Goal):
    # Lógica de Probabilidade Viva Meta
    prob = 100 - (data.work_hours * 4) - ((data.target - data.current) / max(data.days_left, 1) * 0.1)
    prob = max(min(prob, 98), 10)
    
    return {
        "probability": f"{round(prob, 1)}%",
        "insight": "Seu perfil de carga horária sugere fadiga na quarta-feira. Antecipe tarefas.",
        "tips": ["Micro-passo: dedique 5min hoje.", "Revise sua meta de sono."]
    }

@app.get("/community", response_model=List[dict])
async def get_community():
    return communi
  ty_db
