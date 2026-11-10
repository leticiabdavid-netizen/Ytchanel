# Laisa, Louise & Letícia — Episódio 1: As Três Amigas Mágicas

Animação curta (34 s, 16:9, 1280×720) com as três personagens da ficha em `referencia/personagens.jpg`.

## Arquivos
- `index.html` — a animação (SVG + CSS). Abra no navegador para assistir, pausar, recomeçar e navegar pela linha do tempo. Os botões no topo alternam entre horizontal e vertical (`index.html?formato=vertical`).
- `video/tres-amigas-ep1.mp4` — horizontal 16:9, 1280×720 (YouTube). H.264, 30 fps, sem áudio.
- `video/tres-amigas-ep1-vertical.mp4` — vertical 9:16, 1080×1920 (YouTube Shorts, Instagram Reels, TikTok). H.264, 30 fps, sem áudio.
- `render.js` — regera os vídeos depois de editar a animação (precisa de Playwright e ffmpeg):
  - `node render.js` → horizontal
  - `node render.js vertical` → vertical

## Versão vertical (Shorts / Reels)
Mesmo roteiro e tempos, mas cada personagem aparece sozinha e grande no centro e sai de cena antes da próxima entrar
(Laisa sai pela esquerda, Louise pela direita, Letícia some num brilho). No final as três reaparecem juntas
(Letícia atrás, Laisa e Louise na frente). A chamada final é "Siga para ver mais aventuras!".
Os textos ficam longe da parte de baixo e da borda direita, onde os apps colocam botões e legenda.

## Roteiro
| Tempo | Cena |
|---|---|
| 0–4 s | Abertura com o título |
| 4–11 s | **Laisa** (aventureira, líder) entra caminhando, acena: "Oi! Eu sou a Laisa! Bora viver uma aventura?" |
| 11–18 s | **Louise** (criativa, lúdica) chega pulando: "E eu sou a Louise! Vamos inventar uma brincadeira?" |
| 18–26 s | **Letícia** (carinhosa, mágica) aparece num brilho mágico, o ursinho da camiseta brilha e ela abre os braços: "Um abraço deixa tudo mágico!" |
| 26–34 s | As três pulam juntas com chuva de corações: "Juntas somos incríveis!" → "Inscreva-se no canal!" |

## Como editar
- Cores de cada personagem: objeto `CH` no topo do script.
- Falas e tempos: chamadas `bubble(...)` e `character(...)` dentro de `build()` (tempos em segundos).
- Duração total: constante `TOTAL`.
