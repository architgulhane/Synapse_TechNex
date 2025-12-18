from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from app.modules.mutualfund_list_module import DataService

router = APIRouter()

@router.get("/top-schemes")
async def get_top_schemes():
    raw_data = DataService.get_top_schemes("MF_India_AI.csv")
    return jsonable_encoder(raw_data)