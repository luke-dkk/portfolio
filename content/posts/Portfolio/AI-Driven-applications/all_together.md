---
title: "Samlet problemformulering og konklusion – AI Driven applications"
categories: ["projects", "ideas"]
tags: ["ai", "ai-agents", "software-development", "project-management", "reflection"]
date: 2026-10-13
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 0
authors:
  - Luke Burup Persson
---

# Samlet problemformulering og konklusion

Denne side samler problemformuleringer og konklusioner fra uge 2 til uge 7 i serien *AI Driven applications*. Formålet er at give et samlet overblik over, hvordan arbejdet udvikler sig fra AI-integration og sikkerhed til specifikationsdrevet udvikling, projektstyring og agentic development.

## Uge 2 – Dify, OpenAI og automatiseret synkronisering

[Læs hele uge 2-indlægget]({{< ref "week_2.md" >}})

### Problemformulering

Hvordan kan jeg opbygge et automatiseret workflow, hvor ændringer i en GitHub-baseret portfolio kan sendes til Dify og bruges i en AI-applikation med OpenAI som LLM og Jina AI til opdeling af indhold?

Jeg undersøgte især, hvordan GitHub Actions kan reagere på push, kommunikere med Dify gennem API'et, bruge OpenAI til at generere svar, og hvordan chunking påvirker materialet, der sendes videre til AI-modellen.

### Konklusion

I uge 2 etablerede jeg fundamentet for den AI-drevne del af serien ved at forbinde portfolioen med Dify gennem GitHub Actions. Workflowet kan starte synkronisering af indhold til Dify, mens den eksisterende build- og deployment-proces fortsat publicerer Hugo-siden.

Arbejdet viste, at en AI-løsning består af flere samarbejdende services. OpenAI fungerer som sprogmodel, Dify som applikationslag, Jina AI som chunker, og GitHub Actions som automatiseringslag.

## Uge 3 og 4 – Sikker udvikling med secrets, agenter og miljøer

[Læs hele uge 3 og 4-indlægget]({{< ref "week_4.md" >}})

### Problemformulering

Hvordan kan jeg bruge Codex og andre AI-agenter effektivt uden at udsætte secrets, produktionssystemer eller udviklingsmiljøet for unødvendig risiko?

Fokus var på test- og produktionsnøgler, `.env.example`, Azure Key Vault, 2FA, begrænsede nøgler, sandboxing, mocking og menneskeligt review.

### Konklusion

Sikker udvikling med AI-agenter kræver adskillelse af test og produktion, begrænsede nøgler, `.env.example`, secret management og klare agenttilladelser. Codex kan øge udviklingshastigheden, men sandboxing, CI-checks, 2FA og menneskeligt review er nødvendige for at bevare kontrollen.

## Uge 5 – Spec-driven development og akademisk læsning

[Læs hele uge 5-indlægget]({{< ref "week_5.md" >}})

### Problemformulering

Hvordan kan Spec-driven development bruges som en metode til at skabe bedre softwareudvikling, og hvordan kan SDD perspektiveres til den måde, man arbejder med akademiske tekster på?

Jeg undersøgte, hvordan specifikationer fungerer som udviklingens overordnede ramme, og hvordan abstract, problemformulering, analyse og konklusion kan sammenlignes med dele af en SDD-proces.

### Konklusion

SDD kan ses som en metode, hvor udviklingen begynder med en eksplicit specifikation og fortsætter gennem planlægning, implementation, test og review. Abstractet kan sammenlignes med projektets overordnede mål, problemformuleringen med de aktuelle krav og konklusionen med det forventede eller opnåede resultat.

Problemformuleringen kan ændre sig iterativt, når implementationen giver ny viden, så længe ændringerne dokumenteres, og projektets overordnede retning bevares.

## Uge 6 – Fra grilling til implementerbar specifikation

[Læs hele uge 6-indlægget]({{< ref "week_6.md" >}})

### Problemformulering

Hvordan kan `/grill-me` føre en overordnet idé frem mod en implementerbar specifikation, og hvordan adskiller det sig fra et dokumentbaseret workflow som `/grill-with-docs`?

Supavisor-projektet blev brugt som eksempel på, hvordan en idé om projektstyring og medarbejderplanlægning blev konkretiseret gennem user stories, tekniske beslutninger, testbeslutninger og out-of-scope-afgrænsninger.

### Konklusion

`/grill-me` gjorde projektets skjulte antagelser synlige og hjalp med at skabe en implementerbar baseline. `/grill-with-docs` ville i højere grad kunne bruges til dokumentbaseret review, konsistenskontrol og vedligeholdelse af en allerede eksisterende SDD.

SDD er derfor ikke kun et dokument, men en løbende arbejdsform, hvor specifikationen bruges til planlægning, implementation, review, test og senere ændringer.

## Uge 7 – Scrum og projektstyring i agentic development

[Læs hele uge 7-indlægget]({{< ref "week_7.md" >}})

### Problemformulering

Hvordan kan Scrum og almindelig projektstyring bruges til at skabe overblik, kvalitet og koordinering, når et udviklingsteam arbejder hurtigt og parallelt med AI-agenter?

Fokus var på slices, acceptkriterier, Definition of Done, blockers, dokumentation, stand-ups, pull request-review og kritiske stier.

### Konklusion

Scrum kan understøtte udvikling med AI-agenter ved at skabe koordinering og fælles retning. Acceptkriterier, Definition of Done, blockers, dokumentation, stand-ups og uafhængigt review gjorde det muligt at koordinere parallelle frontend-, backend- og database-slices.

Agentic development øger behovet for projektstyring. AI kan hjælpe med at skrive koden, men Scrum hjælper teamet med at vide, hvilken kode der skal skrives, hvorfor den skal skrives, og hvornår den reelt er færdig.
