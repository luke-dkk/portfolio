---
title: "Uge 4 – Sikker udvikling med secrets, agenter og miljøer"
categories: ["projects", "ideas"]
tags: ["ai", "ai-agents", "security", "secrets", "azure", "development"]
date: 2026-10-12
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 4
authors:
  - Luke Burup Persson
---

# Uge 4 – Sikker udvikling med secrets, agenter og miljøer

## Indledning

I denne uge har jeg arbejdet med sikkerhed omkring AI-drevet udvikling. Når en agent kan læse filer og køre kommandoer i terminalen, bliver det vigtigt at tænke over, hvilke oplysninger den har adgang til, og hvilke handlinger den må udføre.

Det handler ikke kun om at beskytte en API-nøgle. Det handler om at skabe en udviklingsproces, hvor test, review og adskillelse af miljøer gør det sværere at komme til at dele eller bruge følsomme oplysninger forkert.

## Problemformulering

Hvordan kan jeg bruge Codex og andre AI-agenter effektivt uden at udsætte secrets, produktionssystemer eller udviklingsmiljøet for unødvendig risiko?

Jeg har især undersøgt:

- hvordan secrets bør håndteres i lokale og deployede miljøer
- hvorfor test- og produktionsnøgler skal være adskilt
- hvordan `.env.example` kan dokumentere konfiguration uden at indeholde hemmeligheder
- hvordan Azure Key Vault kan bruges til central secret-håndtering
- hvordan 2FA, begrænsede nøgler og korte levetider reducerer risiko
- hvordan sandboxing og review kan gøre agentbaseret udvikling mere sikker

## Agenter og ansvar

En agent kan udføre flere handlinger end en almindelig chat-assistent. Den kan læse projektfiler, foreslå ændringer og i nogle tilfælde køre kommandoer i terminalen. Derfor skal man ikke kun vurdere kvaliteten af agentens kode, men også hvilke tilladelser agenten har fået.

Det er en god praksis at lade agenten arbejde i et afgrænset miljø og at gennemgå ændringerne, før de accepteres. Agenten kan hjælpe med implementering og analyse, men ansvaret for beslutningerne ligger stadig hos udvikleren.

Jeg ser det som en byggeplads, hvor en byggeleder kontrollerer, hvordan forskellige dele hænger sammen. På samme måde bør man have overblik over, hvordan kode, secrets, API'er og eksterne services påvirker hinanden.

## /agent i Codex

I Codex kan `/agent` bruges til at sætte fokus på en konkret agentopgave i udviklingsarbejdet. Det gør forskellen mellem en almindelig samtale og agentbaseret udvikling tydelig.

En LLM kan primært generere tekst eller svare på spørgsmål. En assistent kan hjælpe med forslag og forklaringer, men en agent kan arbejde mere aktivt med en opgave. Agenten kan undersøge repositoryet, læse relevante filer, planlægge en løsning, ændre kode og køre kommandoer, hvis den har fået de nødvendige tilladelser.

Et eksempel på en opgave kan være:

```text
/agent undersøg hvordan denne ændring påvirker projektet
```

Det praktiske flow kan se sådan ud:

1. Agenten modtager opgaven.
2. Den undersøger repositoryet og de relevante filer.
3. Den foreslår eller udfører ændringer.
4. Udvikleren gennemgår resultatet og ændringerne.
5. Tests og build køres, før ændringerne bliver committed.

Det er vigtigt, at `/agent` ikke betyder, at agenten automatisk skal have adgang til alt. Den bør kun få de tilladelser, der er nødvendige for opgaven, og helst arbejde i en sandbox eller et afgrænset udviklingsmiljø. Produktionssecrets skal ikke være tilgængelige for agenten. Terminalkommandoer og kodeændringer bør gennemgås af udvikleren, og under udvikling bør man bruge testnøgler og mocks i stedet for rigtige produktionsintegrationer.

## Test- og produktionsmiljøer

Testmiljøet bør ikke bruge de samme nøgler som produktionen. Til lokal udvikling bør der bruges testnøgler eller mockede services, så fejl ikke påvirker rigtige brugere eller data.

Testnøgler skal også begrænses. De kan for eksempel få en kort levetid, være begrænset til bestemte endpoints eller have en lav forbrugsgrænse. Når en test er afsluttet, kan nøglen slettes eller udskiftes.

En `.env.example`-fil kan vise, hvilke variabler projektet forventer:

```text
API_BASE_URL=
API_KEY=
DIFY_DATASET_ID=
```

Filen dokumenterer konfigurationen, men indeholder ikke de faktiske værdier. Den rigtige `.env`-fil skal holdes ude af Git og må ikke lægges ind i portfolioen eller deles med en agent uden en konkret grund.

## Key Vault og adgangskontrol

Ved større projekter kan secrets opbevares i en secret manager som Azure Key Vault. Jeg vil skelne mellem en test-vault og en produktions-vault, så udvikling og drift ikke deler samme lager eller adgangsniveau.

Det giver mulighed for at kontrollere, hvem eller hvad der må læse en bestemt secret. Sammen med 2FA og mindst mulige rettigheder kan det begrænse konsekvensen, hvis en konto eller en nøgle bliver kompromitteret.

Sikkerhed handler derfor både om, hvor secrets ligger, og om hvor længe de er gyldige, hvem der kan bruge dem, og hvordan brugen kan spores.

## Hvordan sikkerhed påvirker udviklingstiden

Sikkerhed kan føles som ekstra arbejde, men det er dyrere at opdage en lækket nøgle efter en deployment. En god CI-proces, automatiske checks og tydelige miljøer kan gøre sikkerheden til en del af den normale arbejdsgang.

Mocking kan også spare tid under udvikling, fordi man kan teste integrationer uden hele tiden at kalde rigtige eksterne services. Det kræver en indsats at sætte op, men gør efterfølgende tests hurtigere og mere forudsigelige.

## Refleksion

Den vigtigste læring er, at man skal tænke sig om, før man giver en agent adgang til projektet eller terminalen. En `.env`-fil kan måske læses lokalt, men spørgsmålet er ikke kun, om agenten teknisk kan læse den. Spørgsmålet er også, om den har brug for oplysningerne, og hvad konsekvensen er, hvis de bliver delt eller brugt forkert.

Secrets minder på den måde om andre personlige oplysninger: De kan være vanskelige at misbruge i nogle situationer, men hvis de kommer i de forkerte hænder, kan konsekvenserne blive alvorlige. Derfor bør man bruge mindst mulige rettigheder, adskille miljøer og reviewe agentens arbejde.

## Konklusion

I uge 4 har jeg undersøgt, hvordan sikker udvikling kan kombineres med brugen af AI-agenter. Centrale principper er at bruge testnøgler, adskille test og produktion, begrænse nøglers levetid og adgang, bruge `.env.example` til dokumentation og opbevare produktionssecrets i en løsning som Azure Key Vault.

Codex og andre agenter kan gøre udviklingen hurtigere, men de skal bruges med klare rammer. Sandboxing, 2FA, CI-checks og menneskeligt review er med til at sikre, at hastigheden ikke sker på bekostning af sikkerheden.
