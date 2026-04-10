---
title: Samlet indledning, problemformulering og konklusion.
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-02-06
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 2
authors:
  - Luke Burup Persson
---
# Uge 1 
## Indledning
[uge 1]({{< ref "week_one.md" >}})
I den første uge af projektet har fokus været på at etablere et metodisk fundament for arbejdet.  
Da projektet både fungerer som et udviklingsprojekt og en portfolio, er der blevet taget udgangspunkt i SMTTE-modellen som didaktisk styringsværktøj.

Formålet med dette har været at skabe en tydelig struktur for projektets retning, ressourcer og målsætninger. Ved at arbejde med en didaktisk relationsmodel bliver projektet ikke kun et teknisk udviklingsarbejde, men også en refleksion over læringsprocessen undervejs.

Ugens arbejde har derfor primært bestået i at analysere projektets sammenhæng, definere overordnede mål samt begynde at formulere de tegn, tiltag og evalueringer der skal styre projektets videre udvikling.

## Problemformulering

Hvordan kan SMTTE-modellen anvendes som styringsværktøj i udviklingen af et teknisk projekt, samtidig med at den understøtter dokumentation af læring i en portfolio?

I denne sammenhæng handler problemstillingen ikke kun om udviklingen af selve applikationen, men også om hvordan arbejdsprocessen kan struktureres, så både teknisk udvikling og refleksion over læring dokumenteres løbende.

Det centrale spørgsmål i denne uge har derfor været, hvordan en didaktisk model kan anvendes i en teknisk kontekst, og hvordan den kan bidrage til at skabe struktur i både projektarbejdet og portfolioen.

## Konklusion

I løbet af den første uge er der blevet etableret et metodisk udgangspunkt for projektet gennem arbejdet med SMTTE-modellen. Modellen har bidraget til at tydeliggøre projektets sammenhæng, mål og de ressourcer der er til rådighed.

Derudover har arbejdet gjort det klart, at SMTTE-modellen kan fungere som et redskab til at strukturere både udviklingsprocessen og den løbende refleksion i portfolioen.

Resultatet af ugens arbejde er derfor ikke et teknisk produkt, men derimod en ramme for hvordan projektet fremadrettet kan planlægges, dokumenteres og evalueres.

# Uge 2

## Abstract
[uge 2]({{< ref "week_two.md" >}})

I denne uge har fokus været på at lære grundlæggende arbejde med JPA (Java Persistence API) og forstå hvordan Java-objekter kan kobles til en relationel database. Formålet har været at etablere den første forbindelse mellem applikationen og en PostgreSQL database.

Arbejdet har blandt andet bestået i at sætte JPA op i projektet, arbejde med annotations samt implementere en første entity med simple CRUD-operationer. Derudover er der blevet arbejdet med Lombok for at reducere boilerplate-kode i Java-klasser.

Ugen har derfor fungeret som en teknisk introduktion til ORM-tankegangen og hvordan data kan håndteres i backend-delen af projektet.

## Problemformulering

Hvordan kan JPA anvendes til at forbinde en Java-applikation med en PostgreSQL database, således at data kan oprettes, læses, opdateres og slettes gennem objektorienteret kode?

For at kunne arbejde videre med portfolio-projektet er det nødvendigt at forstå hvordan persistens fungerer i Java, og hvordan entities kan bruges til at repræsentere data fra databasen.

Problemstillingen i denne uge har derfor været at opbygge en grundlæggende forståelse for:

- ORM (Object Relational Mapping)
- JPA og annotations
- Entities og EntityManager
- Simple CRUD-operationer

## Konklusion

I løbet af ugen er der blevet etableret et grundlæggende JPA-setup i projektet. Der er blevet oprettet en første entity, som kan gemmes i en PostgreSQL database, og der er implementeret simple CRUD-operationer ved hjælp af EntityManager.

Arbejdet har givet en bedre forståelse for hvordan Java-objekter kan repræsentere database-tabeller, samt hvordan annotations bruges til at styre mappingen mellem kode og database.

Dette danner fundamentet for den videre udvikling af portfolio-projektet, hvor flere entities og mere avanceret datalogik senere kan implementeres.


# Uge 3

## Indledning
[uge 3]({{< ref "week_three.md" >}})

I denne uge har fokus været på relationer mellem entities i JPA. Hvor arbejdet i tidligere uger primært har handlet om at etablere projektets metodiske ramme gennem SMTTE-modellen samt implementere en første entity med simple CRUD-operationer, har denne uge haft fokus på at udvide datamodellen gennem relationer mellem flere entities.

Arbejdet har blandt andet bestået i at undersøge og implementere forskellige typer relationer i JPA, herunder One-To-Many, Many-To-One og Many-To-Many. Samtidig er DAO-patternet blevet introduceret for at strukturere datalaget i applikationen.

Ugens arbejde understøtter projektets mål om gradvist at opbygge en funktionel backend, hvor data kan struktureres realistisk og håndteres gennem JPA.

---

## Problemformulering

Hvordan kan relationer mellem entities implementeres i JPA, så databasen kan repræsentere mere komplekse sammenhænge mellem data i projektet?

Efter at have etableret en første entity i projektet bliver næste skridt at modellere relationer mellem forskellige typer data. For et system der arbejder med legepladser kan dette eksempelvis være relationer mellem legepladser, faciliteter eller kategorier.

Problemstillingen i denne uge har derfor været at undersøge:

- Hvordan relationer mellem entities implementeres i JPA
- Hvordan DAO-patternet kan bruges til at strukturere datalaget
- Hvordan JPQL kan bruges til at hente data fra relaterede entities

---

## Konklusion

I løbet af ugen er der blevet arbejdet med implementering af relationer mellem entities i JPA. Dette har gjort det muligt at modellere mere realistiske datastrukturer i projektet.

Derudover er DAO-patternet blevet introduceret for at skabe en tydelig struktur i datalaget, og JPQL er blevet anvendt til at hente data fra databasen gennem forespørgsler på entities.

Arbejdet i denne uge understøtter dermed projektets overordnede mål om gradvist at udvikle en funktionel backend til portfolio-projektet.

---

# Uge 4

## Indledning
[uge 4]({{< ref "week_four.md" >}})

I denne uge har fokus været på data – ikke bare hvordan det gemmes, men hvordan det bevæger sig gennem systemet.

Hvor jeg tidligere primært har arbejdet med entities og database, har jeg nu skullet forholde mig til:
- hvordan data sendes (JSON)
- hvordan det struktureres (DTO)
- og hvordan data kommer udefra (API)

Det har været en uge, hvor backend ikke længere kun føles som “min egen kode”, men som noget der skal kunne snakke med andre systemer.

---

## Problemformulering

Hvordan kan data håndteres i backend, så:

- interne entities ikke eksponeres direkte
- data fra klient og API’er kan håndteres sikkert
- og systemet ikke bliver for tæt koblet til eksterne datakilder

---

## Konklusion

I løbet af ugen har jeg arbejdet med at indføre et ekstra lag mellem database og klient gennem DTO’er, samt håndtere JSON som dataformat.

Derudover har jeg arbejdet med at hente data fra en ekstern API og integrere det i mit projekt.

En vigtig erkendelse har været, at backend i høj grad handler om at kontrollere og oversætte data – ikke bare gemme det.

---
# Uge 5
## Indledning
[uge 5]({{< ref "week_five.md" >}})
I denne uge har fokus været på at arbejde med REST og opbygningen af mit API gennem Javalin.

Hvor jeg i sidste uge arbejdede med data og hvordan det bevæger sig gennem systemet, har jeg i denne uge haft fokus på, hvordan denne data eksponeres gennem endpoints.

Det har betydet, at jeg har arbejdet med:
- routing og endpoints
- HTTP metoder og statuskoder
- brugen af Javalins Context objekt

Det har været en uge, hvor backend i højere grad er begyndt at ligne et rigtigt API fremfor bare en samling funktioner.

---

## Problemformulering

Hvordan kan jeg strukturere mit API i Javalin, så:

- endpoints er logisk opbygget og følger REST-principper
- HTTP metoder og statuskoder bruges korrekt
- og controller-laget forbliver overskueligt og opdelt i ansvar

---

## Konklusion

I løbet af ugen har jeg arbejdet med at opbygge mit API ved hjælp af Javalin, hvor routing, endpoints og HTTP-metoder spiller en central rolle.

Jeg har fået en bedre forståelse for, hvordan REST ikke kun handler om hvilke metoder man bruger, men hvordan man strukturerer sine ressourcer og endpoints.

Derudover har jeg arbejdet med at holde mine controllers simple og lade dem fungere som et bindeled mellem HTTP og service-laget.

[uge 6]({{< ref "week_six.md" >}})

[uge 7]({{< ref "week_seven.md" >}})

[uge 8]({{< ref "week_eight.md" >}})
