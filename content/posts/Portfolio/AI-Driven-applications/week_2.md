---
title: "Uge 2 – Dify, OpenAI og automatiseret synkronisering"
categories: ["projects", "ideas"]
tags: ["ai", "dify", "openai", "github-actions", "rag"]
date: 2026-08-27
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 2
authors:
  - Luke Burup Persson
---

# Uge 2 – Dify, OpenAI og automatiseret synkronisering

## Indledning

I den anden uge af serien *AI Driven applications* har jeg arbejdet med at forbinde en portfolio-side med Dify.ai gennem en automatiseret GitHub Actions-workflow. Formålet har været at undersøge, hvordan en AI-applikation kan bygges af flere services, hvor hver del har sit eget ansvar.

Jeg har oprettet `dify-on-push.yml` til at synkronisere indhold til Dify, arbejdet med `extend-footer.html` og sat Dify op med OpenAI som sprogmodel og Jina AI som chunker. På den måde bliver nye ændringer i repository’et en del af en samlet pipeline.

## Problemformulering

Hvordan kan jeg opbygge et automatiseret workflow, hvor ændringer i en GitHub-baseret portfolio kan sendes til Dify og bruges i en AI-applikation med OpenAI som LLM og Jina AI til opdeling af indhold?

Jeg har især undersøgt:

- hvordan GitHub Actions kan reagere på et push
- hvordan en workflow kan kommunikere med Dify gennem Dify API
- hvordan Dify kan bruge OpenAI til at generere svar
- hvordan chunking påvirker det materiale, der sendes videre til en AI-model
- hvordan hemmelige nøgler og variabler kan holdes uden for selve kildekoden

## Hvad jeg lavede

Jeg oprettede workflowet `dify-on-push.yml`. Workflowet starter ved et push og bruger de nødvendige secrets og variabler til at sende indholdet videre til Dify. De centrale værdier er:

- `DIFY_BASE_URL`
- `DIFY_API_KEY`
- `DIFY_DATASET_ID`

API-nøglen og de øvrige værdier skal ligge som GitHub Secrets eller repository-variabler. De bør ikke skrives direkte ind i workflowet eller frontend-koden.

Jeg arbejdede også med `extend-footer.html`, som er en udvidelse af sidens footer. Den kan bruges til at tilføje den nødvendige integration eller præsentere AI-funktionalitet på siden uden at ændre selve temaets kernefiler.

## Workflowet

Jeg har i praksis to separate workflows. De skal ikke forstås som ét langt lineært flow. Det ene workflow synkroniserer portfolio-indholdet til Dify, og det andet bygger og deployer selve Hugo-siden.

### 1. Synkronisering af posts til Dify

```text
On push
   |
   v
GitHub Action – Sync posts to Dify
   |
   v
Dify API
   |
   v
DIFY.AI
   |
   +--> OpenAI (LLM)
   |
   +--> Jina AI (chunking) 
```

GitHub Actions-workflowet bruger secrets og variabler til at kunne kommunikere med Dify API:

```text
Secrets / variables
   |- DIFY_BASE_URL
   |- DIFY_API_KEY
   `- DIFY_DATASET_ID
```

De tre værdier bruges af workflowet, men er ikke en del af den offentlige kode. Dify bruger derefter OpenAI til sprogmodellen og Jina AI til at opdele materialet i mindre tekststykker.

### 2. Build og deployment af Hugo-siden

```text
On push
   |
   v
GitHub Actions – Build and deploy
   |
   v
Build Hugo Site
   |
   v
Deploy to GitHub Pages
   |
   v
GitHub Pages
```

Det betyder, at Dify-synkroniseringen og publiceringen af portfolioen er to separate processer. De starter begge ved et push, men har forskellige formål og destinationer.

## SMTTE-model

### Sammenhæng

Jeg arbejder alene på serien og bruger min eksisterende portfolio som udgangspunkt. Jeg har allerede en GitHub Pages-side, et Hugo-site og en GitHub Actions-workflow til build og deploy. Derfor kan jeg fokusere på at udvide det eksisterende setup med AI-funktionalitet.

### Mål

- At forstå den grundlæggende opbygning af en AI-applikation i Dify.
- At kunne forbinde Dify med OpenAI som LLM.
- At kunne bruge Jina AI til chunking af indhold.
- At automatisere synkronisering af portfolio-indhold gennem GitHub Actions.
- At holde API-nøgler og konfiguration adskilt fra kildekoden.

### Tiltag

- Oprette `dify-on-push.yml`.
- Opsætte Dify API-forbindelsen.
- Tilføje secrets og miljøvariabler til workflowet.
- Vælge OpenAI som LLM i Dify.
- Vælge Jina AI til chunking.
- Arbejde med `extend-footer.html`.
- Teste sammenhængen mellem push, synkronisering, build og deploy.

### Tegn

Tegn på, at målene er nået, er blandt andet:

- at workflowet starter ved et push
- at indholdet kan sendes til det rigtige Dify-datasæt
- at Dify kan bruge OpenAI til at behandle forespørgsler
- at indholdet opdeles i chunks, som kan bruges ved retrieval
- at Hugo-siden stadig kan bygges og deployes til GitHub Pages

### Evaluering

Jeg vil evaluere på, om workflowet kan gennemføre hele processen uden manuelle mellemtrin, og om det er tydeligt, hvor en eventuel fejl opstår. Jeg vil også vurdere kvaliteten af de chunks, der bliver oprettet, fordi opdelingen af materialet har betydning for, hvor præcist Dify kan finde relevant information.

## Refleksion

Det vigtigste, jeg har lært i denne uge, er, at en AI-løsning ikke kun består af en sprogmodel. OpenAI står for selve sprogmodellen, men Dify håndterer applikationslaget, Jina AI hjælper med at opdele materialet, og GitHub Actions sørger for automatiseringen.

Det er også blevet tydeligt, at automatisering gør det nemmere at holde AI-applikationens datagrundlag opdateret. Samtidig betyder flere eksterne services, at konfiguration, secrets og fejlhåndtering bliver vigtige dele af løsningen.

## Konklusion

I uge 2 har jeg etableret fundamentet for den AI-drevne del af serien ved at forbinde min portfolio med Dify gennem GitHub Actions. Jeg har oprettet `dify-on-push.yml`, arbejdet med `extend-footer.html` og sat Dify op med OpenAI som LLM og Jina AI som chunker.

Resultatet er et workflow, hvor et push kan starte synkronisering af indhold til Dify, mens den eksisterende build- og deploy-proces fortsat publicerer Hugo-siden på GitHub Pages. Det giver et praktisk udgangspunkt for de næste uger, hvor jeg kan undersøge flere AI-drevne funktioner og evaluere kvaliteten af den samlede løsning.
