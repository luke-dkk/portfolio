---
title: Uge 4 - JSON, DTO og API
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-02-06
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 6
authors:
  - Luke Burup Persson
---

# Uge 4 – JSON, DTO og arbejde med eksterne data

## Indledning

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

# Uddybning

## Kobling til SMTTE-modellen

### Sammenhæng

Projektet bevæger sig fra at være et lukket system til at arbejde med data udefra.

Det betyder, at jeg ikke længere kan stole på data på samme måde som før, og derfor skal håndtere:
- validering
- mapping
- og strukturering

---

### Mål

- Forstå JSON i praksis
- Implementere DTO’er
- Hente data fra en API
- Integrere API-data i backend

---

### Tegn

- Mine endpoints returnerer DTO’er i stedet for entities  
- Jeg kan hente data fra en ekstern API  
- JSON bliver korrekt parsed til Java objekter  
- Koden er opdelt i lag (entity → DTO → response)  

---

### Tiltag

- Arbejde med JSON requests/responses
- Oprettelse af DTO-klasser
- Mapping mellem entity og DTO
- API kald fra backend
- Test af endpoints

---

### Evaluering

DTO var noget jeg først syntes virkede unødvendigt, men det gav hurtigt mening.

Det føltes som et ekstra lag i starten, men endte med at gøre koden:
- mere fleksibel  
- nemmere at ændre  
- og mindre “farlig” ift. hvad jeg sender ud  

API-delen var klart det mest interessante, fordi det var første gang jeg arbejdede med data jeg ikke selv havde kontrol over.

---

# Hvad jeg har lært i denne uge

## DTO er ikke automatisk et godt design

Det jeg blev opmærksom på er, at min DTO i praksis er næsten identisk
med min entity.

Det fik mig til at indse, at:

> DTO i sig selv ikke giver bedre struktur -- det afhænger af hvordan
> den bruges

Hvis man bare kopierer sin entity, så får man ikke rigtig fordelene ved
at have et ekstra lag.


## JSON kræver mere tillid end jeg troede

I min controller bruger jeg:

``` java
UserDTO userDTO = ctx.bodyAsClass(UserDTO.class);
```

Det gør det meget nemt at arbejde med JSON, men det betyder også, at jeg
implicit stoler på:

-   struktur\
-   felter\
-   datatyper

Jeg har derfor brugt:

``` java
@JsonIgnoreProperties(ignoreUnknown = true)
```

Det lærte mig, at:

> man ikke altid skal forvente perfekt data -- men i stedet gøre
> systemet tolerant


## Data ændrer form gennem systemet

I min `User` entity bliver password hashet:

``` java
String hashedPassword = BCrypt.hashpw(password, salt);
```

Det betyder, at den samme data:

-   starter som plain text (fra JSON)\
-   bliver ændret før den gemmes

Det gjorde det tydeligt, at:

> data ikke er det samme hele vejen gennem systemet

Det afhænger af konteksten.


## Logik kan ligge i modellen

Jeg har fx lavet en metode til at tilføje et barn:

``` java
public void addChild(Child child) {
    if (children.contains(child)) {
        throw new IllegalArgumentException("Child already exists");
    }
    children.add(child);
    child.setUser(this);
}
```

Her håndterer jeg både relation og validering.

Det lærte mig, at:

> entities ikke kun er data -- de kan også indeholde regler


## Små valg har stor betydning

Noget af det mest interessante i denne uge er, at mange af de valg jeg
har taget virker små:

-   hvor jeg mapper data\
-   hvad jeg sender i DTO\
-   hvordan jeg håndterer JSON

Men de har stor betydning for:

-   sikkerhed\
-   struktur\
-   fleksibilitet


## Kort sagt

I denne uge har jeg lært, at backend ikke kun handler om at få data ind
og ud, men om at kontrollere:

-   hvad data er\
-   hvor det kommer fra\
-   og hvordan det ændrer sig undervejs
