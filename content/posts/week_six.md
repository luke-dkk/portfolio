---
authors:
- Luke Burup Persson
categories:
- projects
- ideas
date: 2026-02-06
draft: false
series:
- Find en Legeplads
series_order: 8
showauthor: true
tags:
- legeplads
- java
- webapp
title: Uge 6 - Security, JWT og password hashing
---

# Uge 6 -- Security, JWT og håndtering af brugerdata

## Indledning

I denne uge har fokus været på sikkerhed i applikationen.

Hvor jeg tidligere har arbejdet med data og API-struktur, har jeg nu
arbejdet med, hvordan man beskytter systemet og kontrollerer adgang til
det.

Det har betydet, at jeg har arbejdet med: - password hashing\
- autentificering\
- autorisation\
- og brug af JWT

------------------------------------------------------------------------

## Problemformulering

Hvordan kan jeg sikre mit API, så:

-   brugerdata ikke kompromitteres\
-   passwords håndteres sikkert\
-   og adgang til endpoints styres korrekt

------------------------------------------------------------------------

## Konklusion

I løbet af ugen har jeg arbejdet med at implementere sikkerhed gennem
hashing af passwords og brug af JWT til autentificering.

Jeg har fået en forståelse for, hvordan adgang kan styres gennem roller,
og hvordan sikkerhed skal tænkes ind som en del af systemets design.

------------------------------------------------------------------------

# Uddybning

## Kobling til SMTTE-modellen

### Sammenhæng

Projektet bevæger sig fra at være et åbent API til at skulle håndtere
brugere og adgangskontrol.

Det betyder, at sikkerhed nu bliver en central del af backend.

------------------------------------------------------------------------

### Mål

-   Forstå autentificering og autorisation\
-   Implementere password hashing\
-   Arbejde med JWT\
-   Beskytte endpoints gennem roller

------------------------------------------------------------------------

### Tegn

-   Passwords gemmes ikke som plain text\
-   Brugere kan logge ind og få et token\
-   Endpoints er beskyttet med roller\
-   Adgang til data er begrænset

------------------------------------------------------------------------

### Tiltag

-   Implementering af bcrypt hashing\
-   Oprettelse af login funktion\
-   Generering af JWT tokens\
-   Beskyttelse af endpoints\
-   Test af login og adgang

------------------------------------------------------------------------

### Evaluering

Arbejdet med sikkerhed har gjort det tydeligt, at det ikke bare er en
feature, men en nødvendighed.

Det har især været interessant at se, hvordan flere forskellige
teknikker arbejder sammen for at beskytte systemet.

------------------------------------------------------------------------

# Hvad jeg har lært i denne uge

I denne uge har jeg arbejdet med sikkerhed i mit API, især omkring
autentificering, autorisation og håndtering af passwords.

Det jeg især blev opmærksom på er, at sikkerhed ikke er én ting, men
flere lag der arbejder sammen.

> Det handler ikke kun om at beskytte data -- men om at kontrollere
> adgang

Jeg har arbejdet med følgende:

``` java
String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());

boolean valid = BCrypt.checkpw(password, user.getPassword());

String token = JwtUtils.createToken(user.getEmail(), user.getRolesAsStrings());

if (!user.roles().contains("ADMIN")) {
    throw new ForbiddenResponse("Requires ADMIN role");
}
```

Noget af det vigtigste jeg lærte er forskellen på autentificering og
autorisation.

> Autentificering handler om hvem brugeren er\
> Autorisation handler om hvad brugeren må

Jeg blev også opmærksom på, hvorfor password hashing er nødvendigt.

> Passwords må aldrig gemmes som plain text

Ved at bruge bcrypt bliver passwords: - hashet\
- saltet\
- og sværere at angribe

JWT var også en vigtig del af ugen.

> Tokenet fungerer som en midlertidig identitet for brugeren

Det betyder, at serveren ikke behøver gemme sessioner, men i stedet kan
stole på tokenet.

Samtidig gjorde det tydeligt, at:

> sikkerhed hurtigt kan blive spredt flere steder i systemet

Jeg har fx både: - token-generering\
- role-checks i controller\
- og password-logik i entity

Til sidst blev det klart for mig, at sikkerhed ikke er noget man
tilføjer til sidst.

> Det er en del af designet fra starten

Kort sagt har jeg lært, at sikkerhed i backend handler om: - at beskytte
brugerdata\
- at kontrollere adgang\
- og at placere ansvar de rigtige steder i systemet
