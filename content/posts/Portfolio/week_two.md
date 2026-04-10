---
title: Introduktion til JPA og første entitet
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-02-06
draft: false
showauthor: true
series: ["Find en Legeplads"]
series_order: 4
authors:
  - Luke Burup Persson
---
# Uge 2 – Introduktion til JPA og første entity

## Indledning

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

---

# Uddybning

## Hvad er ORM?

ORM står for **Object Relational Mapping** og beskriver en teknik hvor objekter i et objektorienteret programmeringssprog kobles til tabeller i en relationel database.

I stedet for at skrive SQL direkte i applikationen, kan man arbejde med Java-objekter som repræsenterer data.

Eksempel:

| Java objekt | Database |
|--------------|-----------|
| Klasse | Tabel |
| Objekt | Række |
| Felt | Kolonne |

ORM gør det dermed muligt at arbejde mere naturligt med data i et objektorienteret system.

---

## Hvad er JPA?

**JPA (Java Persistence API)** er en specifikation i Java som bruges til at håndtere persistens af data. Den giver en standardiseret måde at arbejde med databaser på gennem Java-objekter.

I praksis bruges JPA ofte sammen med en implementering som fx:

- Hibernate
- EclipseLink

JPA gør brug af **annotations**, som bruges til at definere hvordan en klasse skal kobles til databasen.

---

## Lombok

I denne uge er der også blevet arbejdet med **Lombok**, som er et bibliotek der reducerer mængden af boilerplate-kode i Java.

I stedet for manuelt at skrive getters, setters og konstruktører kan Lombok generere dem automatisk gennem annotations.

Eksempel:

```java
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Playground {
    private int id;
    private String name;
}
```


## CRUD
```java

public void createPlayground(Playground playground) {

    EntityManager em = emf.createEntityManager();

    em.getTransaction().begin();
    em.persist(playground);
    em.getTransaction().commit();

    em.close();
}

public Playground findPlayground(Long id) {

    EntityManager em = emf.createEntityManager();
    Playground playground = em.find(Playground.class, id);

    em.close();

    return playground;
}

public Playground updatePlayground(Playground playground) {

    EntityManager em = emf.createEntityManager();

    em.getTransaction().begin();
    Playground updated = em.merge(playground);
    em.getTransaction().commit();

    em.close();

    return updated;
}

public void deletePlayground(Long id) {

    EntityManager em = emf.createEntityManager();

    em.getTransaction().begin();

    Playground playground = em.find(Playground.class, id);
    em.remove(playground);

    em.getTransaction().commit();
    em.close();
}