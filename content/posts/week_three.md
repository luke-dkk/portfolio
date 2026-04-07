---
title: Uge 3 - JPA relationer
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-02-06
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 5
authors:
  - Luke Burup Persson
---

# Uge 3 – JPA relationer og udvidelse af datamodellen

## Indledning

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

# Uddybning

## Kobling til SMTTE-modellen

I projektets første uge blev SMTTE-modellen valgt som styringsværktøj for portfolioen. Arbejdet i denne uge kan derfor ses som en del af den løbende proces i modellen.

### Sammenhæng

Projektet udvikles som et læringsprojekt hvor formålet både er at opbygge tekniske kompetencer og samtidig dokumentere læringsprocessen i portfolioen.

I denne uge har fokus været på at udvide datamodellen i backend-delen af projektet ved at arbejde med relationer mellem entities i JPA.

Dette er et nødvendigt skridt for at kunne modellere mere realistiske datastrukturer i applikationen.

---

### Mål

Målet i denne uge har været at:

- Opnå forståelse for JPA relationer
- Implementere relationer mellem entities i projektet
- Introducere DAO-patternet til håndtering af databaseoperationer
- Implementere JPQL-queries til at hente data fra databasen

Disse mål understøtter projektets overordnede mål om at udvikle en funktionel backend til applikationen.

---

### Tegn

Tegn på at målene er opnået kan blandt andet være:

- At relationer mellem entities kan oprettes og gemmes i databasen
- At DAO-klasser kan håndtere CRUD-operationer
- At JPQL-queries kan hente data fra relaterede entities
- At datamodellen begynder at ligne en realistisk struktur for applikationen

---

### Tiltag

For at opnå målene i denne uge er følgende tiltag blevet gennemført:

- Læsning om JPA relationstyper
- Implementering af relationer mellem entities
- Oprettelse af DAO interfaces
- Implementering af DAO-klasser
- Eksperimenter med JPQL queries

---

### Evaluering

Arbejdet med relationer i JPA har vist hvordan databaser kan modelleres mere realistisk gennem relationer mellem entities.

Samtidig har arbejdet med DAO-patternet tydeliggjort hvordan projektets struktur kan forbedres ved at adskille databasehåndtering fra resten af applikationen.

En vigtig erfaring i denne uge har været at holde relationerne så simple som muligt og kun tilføje kompleksitet når det er nødvendigt.

---

# JPA relationer

Når man arbejder med databaser, vil data sjældent være isoleret i én tabel. I stedet vil tabeller ofte være forbundet gennem relationer.

JPA understøtter flere relationstyper:

| Relation | Beskrivelse |
|--------|-------------|
| One-To-One | Ét objekt relaterer til ét andet |
| One-To-Many | Ét objekt relaterer til mange |
| Many-To-One | Mange objekter relaterer til ét |
| Many-To-Many | Mange objekter relaterer til mange |

---

# One-To-Many relation

Et eksempel kan være relationen mellem **Playground** og **Facility**.

En legeplads kan have flere faciliteter.

```java
@Entity
public class Playground {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String city;

    @OneToMany(mappedBy = "playground")
    private List<Facility> facilities = new ArrayList<>();
}
```
# One-To-One relation

```java
@Table(name ="playgrounds")
public class Playground {

    @OneToOne(mappedBy = "playground", cascade = CascadeType.ALL, orphanRemoval = true)
    private Facility facility;

}

@Table(name ="facility")
public class Facility {

    /* ... */

    @OneToOne
    @MapsId
    private Playground playground;
}
```



```java

```

```java

```