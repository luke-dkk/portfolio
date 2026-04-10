---
title: Uge 8 - Deployment, Docker og reverse proxy
categories: ["projects", "ideas"]
tags: []
date: 2026-07-04
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 10
authors:
  - Luke Burup Persson
---

# Uge 8 -- Deployment, Docker og hvordan mit system faktisk kører

## Indledning

I denne uge har fokus været på deployment af min applikation.

Hvor jeg tidligere har arbejdet med funktionalitet, test og sikkerhed, har jeg nu arbejdet med, hvordan systemet rent faktisk bliver kørt i et rigtigt miljø.

Det har betydet, at jeg har arbejdet med:
- Docker
- docker-compose
- reverse proxy (Caddy)
- domæner
- og miljøvariabler

Det har været en uge, hvor projektet er gået fra at være “noget der virker lokalt” til noget, der faktisk er tilgængeligt udefra.

---

## Problemformulering

Hvordan kan jeg deploye mit system, så:

- flere services kan køre sammen  
- applikationen kan tilgås via domæner  
- konfiguration håndteres korrekt  
- og systemet fungerer stabilt i et rigtigt miljø  

---

## Konklusion

I løbet af ugen har jeg arbejdet med at deploye min applikation ved hjælp af Docker og docker-compose.

Jeg har opsat en reverse proxy med Caddy, som gør det muligt at tilgå mine services gennem domæner.

Derudover har jeg arbejdet med miljøvariabler og container-kommunikation, hvilket har gjort det tydeligt, hvor vigtigt det er at forstå samspillet mellem systemets forskellige dele.

---

# Uddybning

## Kobling til SMTTE-modellen

### Sammenhæng

Projektet bevæger sig fra at være kode til at være et system bestående af flere services.

Det betyder, at jeg nu skal arbejde med:
- netværk mellem containere  
- routing gennem reverse proxy  
- og konfiguration udenfor koden  

---

### Mål

- Forstå Docker i praksis  
- Køre flere services sammen  
- Opsætte reverse proxy  
- Bruge domæner til adgang  
- Arbejde med environment variables  

---

### Tegn

- Min applikation kan tilgås via et domæne  
- Flere projekter kan køre på samme server  
- Containere kan kommunikere  
- Systemet kan genstartes uden manuel opsætning  

---

### Tiltag

- Opsætning af docker-compose  
- Oprettelse af containere til database og backend  
- Brug af Caddy som reverse proxy  
- Konfiguration af miljøvariabler  
- Fejlsøgning via logs  

---

### Evaluering

Arbejdet med deployment har været en af de mest udfordrende dele af projektet.

Mange af fejlene handlede ikke om kode, men om:
- netværk  
- konfiguration  
- eller manglende forståelse af hvordan services hænger sammen  

Det har dog også været en af de uger, hvor jeg har fået størst forståelse for, hvordan systemer fungerer i praksis.

---

# Hvad jeg har lært i denne uge

I denne uge har jeg arbejdet med deployment af mit system, og hvordan flere services arbejder sammen.

Det jeg især blev opmærksom på er, at:

> et system ikke kun er kode -- det er samspillet mellem flere komponenter

Jeg har blandt andet arbejdet med en reverse proxy via Caddy:

```bash
findenlegeplads.team-ice.dk {
  reverse_proxy findenlegeplads_db:7075
}
```

Det betyder, at trafik fra et domæne bliver sendt videre til min container.

Ydermere, har jeg også brugt en .env fil, således jeg kan bruge miljøvariabler kontra at "hardcode"

```YAML
findenlegeplads_db:
  image: lukedenmark/findenlegeplads
  container_name: findenlegeplads_db
  environment:
    CONNECTION_STR: ${CONNECTION_STR}
    DB_USERNAME: ${DB_USERNAME}
    DB_PASSWORD: ${DB_PASSWORD}
``` 
Nu Lægger jeg det selvfølgelig ikke ud på internettet, men således ser min .env-fil ud.

```YAML
# Database konfiguration
POSTGRES_USER=
POSTGRES_PASSWORD=
DB_USERNAME=
DB_PASSWORD=
CONNECTION_STR=jdbc:postgresql://db:5432/

# Applikation konfiguration
DEPLOYED=TRUE
ISSUER="Luke Burup Persson"
TOKEN_EXPIRE_TIME=1800000
SECRET_KEY= "32 cifre"
GOOGLE_API_KEY= ...
```


""