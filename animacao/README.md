# Laisa, Louise & Letícia — Episódio 1: As Três Amigas Mágicas

Animação curta (34 s, 16:9, 1280×720) com as três personagens da ficha em `referencia/personagens.jpg`.

## Arquivos
- `index.html` — a animação (SVG + CSS). Abra no navegador para assistir, pausar, recomeçar e navegar pela linha do tempo.
- `video/tres-amigas-ep1.mp4` — vídeo pronto (H.264, 30 fps, sem áudio) para subir no YouTube/editar.
- `render.js` — regera o MP4 depois de editar a animação: `node render.js frames video/tres-amigas-ep1.mp4` (precisa de Playwright e ffmpeg).

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
