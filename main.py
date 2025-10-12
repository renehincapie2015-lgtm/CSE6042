from fastapi import FastAPI
from routerproductos import routerproductos
from routerusuarios import routerusuarios
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(routerproductos)
app.include_router(routerusuarios)