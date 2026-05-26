---
authors:
- Luke Burup Persson
categories:
- projects
- ideas
date: 2026-03-20
draft: false
series:
- Find en Legeplads
series_order: 9
showauthor: true
tags:
- legeplads
- java
- webapp
title: Uge 7 - Test af API med Rest Assured
---

# Uge 7 -- Test af API og validering af funktionalitet

## Indledning

I denne uge har fokus været på test af mit API.

Hvor jeg tidligere har arbejdet med at opbygge funktionalitet, har jeg nu arbejdet med at verificere, at det jeg har lavet faktisk virker som forventet.

Det har betydet, at jeg har arbejdet med:
- test af endpoints
- validering af responses
- og automatisering af tests

Det har været en uge, hvor mit projekt er gået fra at være noget der “burde virke”, til noget der faktisk er testet og dokumenteret.

---

## Problemformulering

Hvordan kan jeg teste mit API, så:

- endpoints fungerer korrekt
- responses indeholder den forventede data
- og fejl opdages automatisk

---

## Konklusion

I løbet af ugen har jeg arbejdet med at teste mit API ved hjælp af Rest Assured.

Jeg har fået en bedre forståelse for, hvordan tests kan bruges til at verificere funktionalitet og sikre, at ændringer i koden ikke ødelægger eksisterende features.

Derudover har jeg arbejdet med at teste endpoints, der kræver autentificering, hvilket har gjort det tydeligt, hvordan tests også spiller en rolle i sikkerhed.

---

# Uddybning

## Kobling til SMTTE-modellen

### Sammenhæng

Projektet bevæger sig fra at fokusere på implementering til også at fokusere på kvalitet.

Det betyder, at jeg nu arbejder med at sikre, at systemet opfører sig korrekt, og ikke kun at det “virker”.

---

### Mål

- Forstå hvordan man tester REST API’er  
- Skrive tests for CRUD endpoints  
- Validere statuskoder og responses  
- Teste endpoints med autentificering  
- Automatisere tests  

---

### Tegn

- Tests verificerer både statuskoder og data  
- Jeg kan teste endpoints med JWT token  
- Fejl opdages gennem tests  

---

### Tiltag

- Opsætning af Rest Assured  
- Skrive tests for forskellige endpoints  
- Brug af assertions til validering  
- Test af både succes og fejl-scenarier  

---

### Evaluering

Arbejdet med tests har gjort det tydeligt, at det ikke er nok, at noget virker én gang.

Tests gør det muligt at sikre, at funktionalitet bliver ved med at virke, også når koden ændres.

Det har også været med til at gøre fejl mere synlige, da tests hurtigt viser, hvis noget ikke fungerer som forventet.

Ydermere, skal jeg fremadrettet mere med TDD, da det har villet kunne vise fejl - jeg ellers ikke havde opdaget. Det tager længere tid at arbejde således, men fejl-frekvensen virker til at være mindsket.

---

# Hvad jeg har lært i denne uge

I denne uge har jeg arbejdet med test af mit API ved hjælp af Rest Assured.

Det jeg især blev opmærksom på er, at tests ikke kun handler om at finde fejl.

> Tests handler også om at skabe tillid til koden

Jeg har arbejdet med følgende:

```java
given()
    .contentType("application/json")
    .body(user)
.when()
    .post("/api/users")
.then()
    .statusCode(201);

```

Her tester jeg, at et endpoint returnerer den korrekte statuskode.

Jeg har også arbejdet med at validere data i responses:
```java
.then()
    .body("email", equalTo("test@test.dk"));
 ```

så selv med få kodeeksempler, har denne uges arbejde, gjordt det tydeligt at:

gode tests også tester det der ikke må virke

Noget af det vigtigste jeg lærte er brugen af assertions.
```java
given()
when()
then()
```

Til sidst blev det klart for mig, at tests ikke bare er noget man gør til sidst.

Tests er en del af udviklingsprocessen

Kort sagt har jeg lært, at test af API handler om:

at verificere funktionalitet
at opdage fejl tidligt
og at sikre stabilitet i systemet