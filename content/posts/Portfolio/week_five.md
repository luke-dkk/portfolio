---
title: Uge 5 - Javalin, REST og API design
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-03-06
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 7
authors:
  - Luke Burup Persson
---

# Uge 5 – Javalin, REST og struktur af API

## Indledning

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

---

# Uddybning

## Kobling til SMTTE-modellen

### Sammenhæng

Projektet bevæger sig fra at fokusere på datahåndtering til at fokusere på, hvordan data eksponeres gennem et API.

Det betyder, at jeg nu arbejder med, hvordan klienter interagerer med systemet gennem HTTP requests.

---

### Mål

- Forstå routing og endpoints i Javalin  
- Arbejde med HTTP metoder (GET, POST, PUT, DELETE)  
- Anvende korrekte HTTP statuskoder  
- Bruge Context objektet til request/response håndtering  
- Strukturere endpoints efter REST-principper  

---

### Tegn

- Mine endpoints er opdelt efter ressourcer (users, children osv.)  
- Jeg bruger forskellige HTTP metoder korrekt  
- Jeg returnerer relevante statuskoder  
- Mine controllers er overskuelige og har ét ansvar  

---

### Tiltag

- Implementering af routes i Javalin  
- Arbejde med Context objektet (`ctx`)  
- Brug af path parameters  
- Implementering af CRUD endpoints  
- Test af endpoints gennem HTTP requests  

---

### Evaluering

Arbejdet med Javalin har gjort det tydeligt, hvor vigtigt det er at strukturere sit API korrekt.

Jeg har især fået en bedre forståelse for, at REST ikke bare handler om teknik, men om design.

Samtidig har arbejdet med controllers gjort det klart, hvor vigtigt det er at holde dem simple og lade logikken ligge andre steder.

---

# Hvad jeg har lært i denne uge

I denne uge har jeg arbejdet med struktur af mit API i Javalin, og
hvordan HTTP faktisk hænger sammen med min backend.

Det jeg især blev opmærksom på er, at routing ikke bare handler om at
ramme en metode.

> URL-strukturen er en del af designet

Det betyder, at endpoints ikke kun er tekniske, men også beskriver
relationerne i systemet.

Jeg har arbejdet med følgende:

``` java
get("/{id}", userController::getById, Role.ADMIN);
post("/", userController::create);
delete("/{id}", userController::delete, Role.ADMIN);

Integer id = ctx.pathParamAsClass("id", Integer.class).get();
UserDTO userDTO = ctx.bodyAsClass(UserDTO.class);

ctx.status(HttpStatus.OK);
ctx.status(HttpStatus.CREATED);
ctx.status(HttpStatus.NOT_FOUND);

ctx.json(userService.getAll());
```

Noget af det vigtigste jeg lærte er brugen af `Context`.

> Context er bindeleddet mellem HTTP og min backend

Alt går gennem `ctx`, både input og output, hvilket gør det til det
centrale punkt i controlleren.

Jeg blev også opmærksom på, at HTTP statuskoder ikke bare er ekstra
information.

> De er en del af API'et og kommunikationen med klienten

Derudover har jeg arbejdet med at holde mine controllers simple.

> Controlleren skal kun håndtere HTTP -- ikke logik

Det gør koden mere overskuelig og nemmere at ændre.

Path parameters gjorde det også tydeligt, hvordan endpoints kan blive
dynamiske, uden at hardcode værdier.

Til sidst gik det op for mig, at REST ikke bare handler om metoder som
GET og POST.

> Det handler om hvordan man strukturerer sine ressourcer

Kort sagt har jeg lært, at et API er en struktur hvor: - routing viser
relationer
- context binder HTTP og kode sammen
- statuskoder kommunikerer resultatet
- og controlleren bør være så simpel som muligt
