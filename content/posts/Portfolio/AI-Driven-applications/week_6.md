---
title: "Uge 6 – Fra grilling til implementerbar specifikation"
categories: ["projects", "ideas"]
tags: ["ai", "ai-agents", "spec-driven-development", "requirements", "user-stories", "software-architecture"]
date: 2026-10-12
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 6
authors:
  - Luke Burup Persson
---

# Uge 6 – Fra grilling til implementerbar specifikation

## Indledning

I uge 6 fortsætter jeg arbejdet med Spec-driven development fra uge 5. Denne gang fokuserer jeg på, hvordan en idé kan undersøges og udvikles til en specifikation, som både mennesker og AI-agenter kan arbejde ud fra.

Som konkret eksempel bruger jeg vores Supavisor-projekt. Projektet startede med et behov for et system til projektstyring og planlægning af medarbejderes arbejde. Gennem `/grill-me` blev idéen udfordret, indtil den kunne beskrives med user stories, tekniske beslutninger, testbeslutninger og tydelige afgrænsninger.

Denne tekst tager udgangspunkt i den konklusion og den spec, som processen efterlod, og ikke i ordrette spørgsmål og svar fra sessionen.

## Fra idé til specifikation

Den oprindelige idé var at bygge ét system, hvor en organisation kunne planlægge projekter, oprette opgaver og koordinere medarbejdernes arbejde. Det kunne let være blevet beskrevet meget overordnet. I stedet blev idéen konkretiseret til et projektstyrings- og medarbejderplanlægningssystem med:

- en React-frontend
- en Java/Javalin-backend
- en versioneret REST API under `/api/v1`
- PostgreSQL som database
- Hibernate til entity mapping og JPQL til forespørgsler
- Docker-baseret lokal udvikling
- autentificering og rollebaseret adgang
- user stories for administratorer, medarbejdere og maintainers

Det gjorde en vigtig forskel. Specifikationen beskrev ikke kun, hvad systemet skulle kunne, men også hvem der skulle bruge det, hvilke regler der gjaldt, og hvordan man kunne teste, om løsningen fungerede.

## Hvad `/grill-me` betød for projektet

Jeg ser `/grill-me` som en krav- og beslutningsafklarende proces. Den fungerer som en kritisk samtale, hvor man bliver nødt til at tage stilling til de antagelser, der ellers ofte bliver gemt i en vag projektbeskrivelse.

I vores projekt blev der blandt andet taget stilling til:

- roller, permissions og organisationer
- projekter, tasks og assignments
- overlap i medarbejdernes tidsplaner
- warnings, overrides og begrundelser
- acknowledgement, auto-acceptance og decline
- check-in og check-out med serverstyrede timestamps
- custom statuses og status transitions
- expenses, resources og audit history
- soft deletion og optimistic concurrency
- teststrategi, CI og Docker-miljøer

Et eksempel er medarbejdernes assignments. Det er ikke nok at sige, at en administrator skal kunne tildele arbejde. Specifikationen skal også beskrive, hvad der sker, hvis medarbejderen allerede er planlagt til noget andet, om et overlap må accepteres, og om administratoren skal begrunde en override.

Det samme gælder acknowledgement. En medarbejder kan acceptere eller afvise en assignment, men hvad sker der, hvis medarbejderen ikke svarer? I specifikationen blev det besluttet, at stilhed ved starttidspunktet kan blive til automatisk accept, og at eksplicit accept og automatisk accept skal gemmes forskelligt i historikken.

Resultatet blev derfor mere end en featureliste. Det blev også en beskrivelse af regler, edge cases, testadfærd og funktionalitet, der bevidst ligger uden for projektets første version.

## `/grill-me` som en del af SDD

I uge 5 beskrev jeg SDD som en metode, hvor udviklingen styres af en eksplicit specifikation. `/grill-me` kan ses som den proces, der hjælper med at udvikle og konkretisere denne specifikation.

De forskellige dele af vores spec havde hver sin funktion:

- User stories beskrev brugerens behov og perspektiv.
- Implementation decisions beskrev tekniske og domænemæssige rammer.
- Testing decisions beskrev, hvordan kravene skulle verificeres.
- Out of scope beskyttede projektet mod ukontrolleret scope creep.
- Further notes samlede forhold, der skulle afklares senere eller ejes af andre.

På den måde blev specifikationen en fælles kontrakt mellem teamet, udvikleren og agenten. Den gjorde det muligt at diskutere projektet på et mere konkret niveau, før der blev skrevet application code.

Det betyder også, at `/grill-me` blev en del af projektets metodeafgrænsning. Processen fastlagde ikke kun, hvad Supavisor-systemet skulle kunne, men også hvordan idéen skulle undersøges og omsættes til en SDD. Først blev behov og antagelser udfordret, derefter blev de formuleret som user stories, tekniske beslutninger og testbeslutninger. Til sidst blev scope og out-of-scope gjort tydeligt.

Metodeafgrænsningen gav dermed en fast arbejdsform for teamet og agenten. Agenten kunne arbejde ud fra specifikationen, mens udvikleren stadig skulle reviewe krav, plan, kode og testresultater. Hvis implementationen senere gav ny viden, kunne problemformuleringen eller specifikationen ændres, men ændringen skulle ske som en dokumenteret del af processen.

SDD betyder dog ikke, at specifikationen kun skrives én gang. Når man implementerer en løsning, opdager man nye tekniske begrænsninger eller får en bedre forståelse af problemet. Specifikationen skal derfor kunne opdateres, uden at projektets overordnede retning forsvinder.

## `/grill-me` kontra `/grill-with-docs`

De to workflows kan have forskellige formål:

| Funktion | `/grill-me` | `/grill-with-docs` |
| --- | --- | --- |
| Primært fokus | Afklare idé, behov og antagelser | Afklare idéen med eksisterende dokumentation som kontekst |
| Input | Brugerens beskrivelse og samtalens kontekst | Brugerens beskrivelse plus spec, README, ADR'er, user stories eller anden dokumentation |
| Typiske spørgsmål | Hvad skal systemet gøre, for hvem og hvorfor? | Hvordan passer den nye idé med eksisterende krav, beslutninger og begrænsninger? |
| Effekt | Skaber en ny eller forbedret baseline | Reducerer risikoen for konflikt med eksisterende projektviden |
| Risiko | Kan overse detaljer, der allerede findes i dokumentationen | Kan fastholde forældede eller fejlagtige dokumenter, hvis de ikke vurderes kritisk |

`/grill-me` er derfor særligt nyttig i discovery-fasen. Den hjælper med at finde ud af, hvad projektet egentlig handler om, og hvilke beslutninger der skal træffes, før implementationen begynder.

`/grill-with-docs` kunne have haft en anden funktion i Supavisor-projektet. Den ville ikke nødvendigvis have skabt den samme grundspecifikation fra bunden. I stedet kunne den have læst den eksisterende `spec.md` og stillet spørgsmål ud fra dokumentets indhold.

Den kunne for eksempel have:

- undersøgt de 73 user stories for overlap eller modstrid
- kontrolleret om nye user stories passede med `Out of Scope`
- fundet uklare forbindelser mellem user stories og implementation decisions
- koblet krav til konkrete mapper, API'er og eksisterende kode
- kontrolleret om testing decisions dækkede de vigtigste risici
- foreslået ændringer i specifikationen frem for kun at skabe en ny baseline

Det betyder, at `/grill-with-docs` sandsynligvis ville være stærkere i en senere fase af SDD-processen. Når specifikationen allerede findes, handler opgaven ikke længere primært om at opdage projektet, men om at reviewe, vedligeholde og videreudvikle den fælles projektviden.

## Betydningen for vores projekt

For vores projekt havde `/grill-me` betydning, fordi det tvang os til at tage stilling til systemets grænser, før vi begyndte at implementere. Vi fik blandt andet afklaret, at første version ikke skulle indeholde recurring assignments, lønberegning, GPS-baseret check-in, tovejssynkronisering med kalendere eller automatisk reassignment.

De fravalg er lige så vigtige som de valgte features. De gør det muligt at fokusere på den almindelige assignment-livscyklus, kalenderen, attendance-workflowet og API'ets centrale adfærd, før systemet udvides.

Specifikationen gjorde også testarbejdet mere konkret. I stedet for kun at teste, om en assignment kunne oprettes, skal man teste overlap warnings, override reasons, decline, auto-acceptance, check-in, check-out, server timestamps, soft deletion og audit history.

Det har betydning for både udvikleren og agenten. En agent kan få en afgrænset opgave, men den kan samtidig se, hvilke regler opgaven skal overholde. Det mindsker risikoen for, at en lokal implementation virker isoleret, men bryder med systemets samlede domænemodel.

## Begrænsninger og refleksion

En konklusion fra `/grill-me` er ikke nødvendigvis det samme som en færdig eller uforanderlig sandhed. Den fungerer som en baseline. Nye tekniske fund, brugerbehov eller testresultater kan ændre problemformuleringen og føre til en opdateret specifikation.

Der er også en risiko for, at en dokumentation bliver så omfattende, at den er svær at vedligeholde. En lang spec kan give et stærkt overblik, men hvis den ikke opdateres, kan den begynde at beskrive et system, der ikke længere eksisterer.

Det er her, forskellen mellem `/grill-me` og `/grill-with-docs` bliver vigtig. Den første hjælper med at skabe retning. Den anden ville kunne hjælpe med at holde retningen og dokumentationen konsistent over tid. Begge dele er relevante i SDD, men på forskellige tidspunkter i projektets livscyklus.

## Konklusion

I uge 6 har jeg undersøgt, hvordan `/grill-me` kan føre en idé frem mod en implementerbar specifikation. I Supavisor-projektet blev den overordnede idé omsat til user stories, tekniske beslutninger, testbeslutninger og out-of-scope-afgrænsninger.

Det viste, at `/grill-me` ikke kun handler om at stille kritiske spørgsmål. Det handler også om at gøre projektets skjulte antagelser synlige, så teamet kan træffe beslutninger, før koden bliver skrevet.

`/grill-with-docs` ville have haft en anden funktion. Med adgang til den eksisterende `spec.md` kunne den have fokuseret på dokumentbaseret review, konsistenskontrol og videreudvikling af specifikationen. Hvor `/grill-me` primært hjalp med discovery og kravsafdækning, ville `/grill-with-docs` være særligt relevant til vedligeholdelse og kvalitetssikring af en allerede eksisterende SDD.

Den vigtigste læring er derfor, at SDD ikke kun er et dokument, men en løbende arbejdsform. Specifikationen bliver først rigtig værdifuld, når den bruges til planlægning, implementation, review, test og senere ændringer.
