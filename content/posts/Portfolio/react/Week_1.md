---
title: JS and React
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-04-24
draft: false
showauthor: true
series: ["Find en Legeplads -React"]
series_order: 1
authors:
  - Luke Burup Persson, Frederik Edvardsen
---

# Uge 1 – React og JavaScript

## Indledning

I uge 1 arbejdede vi med introduktion til JavaScript og React i forbindelse med udviklingen af frontend-delen til projektet *Find en Legeplads*. Fokus i denne uge var at opbygge en grundlæggende forståelse for JavaScript som programmeringssprog samt lære, hvordan React kan bruges til at udvikle moderne Single Page Applications (SPA).

Vi arbejdede blandt andet med arrays, funktioner, DOM-manipulation og events i JavaScript, hvilket gav en forståelse for, hvordan brugerinteraktion håndteres i browseren. Senere på ugen blev React introduceret, hvor vi lærte om komponenter, props, state management med `useState` samt datahentning fra API’er.

Formålet med uge 1 var derfor at skabe et fundament for frontend-udvikling, så vi senere kunne bygge mere avancerede funktioner i vores React-applikation til *Find en Legeplads*.

---

## Problemformulering

Hvordan kan React og moderne JavaScript anvendes til at udvikle en overskuelig og dynamisk frontend-applikation til *Find en Legeplads*, hvor komponenter, state management og API-kald gør det muligt at skabe en brugervenlig løsning?

Derudover arbejdede vi med følgende problemstillinger:

- Hvordan opdeles en brugergrænseflade i genbrugelige React-komponenter?
- Hvordan kan `useState` bruges til at håndtere data og brugerinteraktion?
- Hvordan hentes data fra et API og vises dynamisk i frontend?
- Hvordan kan JavaScript-funktioner som `map`, `filter` og `forEach` bruges til behandling af data?

---

## SMTTE-model 

### Sammenhæng

Vi skulle lære grundlæggende frontend-udvikling med JavaScript og React som en del af arbejdet med vores portfolio-projekt *Find en Legeplads*. Målet var at skabe forståelse for moderne frontend-teknologier og deres anvendelse i webapplikationer.

### Mål

- At kunne oprette React-komponenter
- At forstå state management med `useState`
- At kunne hente data fra et API
- At lære grundlæggende JavaScript-funktioner og DOM-manipulation

### Tiltag

Vi arbejdede med øvelser indenfor:

- Arrays og JavaScript-funktioner
- DOM manipulation og events
- React-komponenter og props
- Fetching af data fra API’er i React

### Tegn

Tegn på læring var blandt andet:

- At vi kunne opdele UI’et i komponenter
- At data blev vist dynamisk i React
- At brugerinteraktioner fungerede korrekt gennem state management

---

# Evaluering – Uge 1 (React og JavaScript)

I uge 1 arbejdede vi med grundlæggende frontend-udvikling i JavaScript og React i forbindelse med projektet *Find en Legeplads*. Formålet var at skabe forståelse for, hvordan en moderne Single Page Application (SPA) opbygges gennem komponenter, state management og API-kald.

Vi lærte blandt andet at arbejde med React-komponenter, hooks som `useState` og `useEffect`, samt hvordan data kan hentes fra backend gennem API-kald. Samtidig arbejdede vi med JavaScript-funktioner og håndtering af brugerinteraktion i browseren.

En vigtig del af arbejdet var at forbinde frontend med vores backend API. Dette gjorde det muligt at hente legepladser, faciliteter og brugerdata dynamisk. Vi arbejdede derfor både med almindelige `fetch`-kald og vores egen API-facade, som gjorde koden mere overskuelig og genanvendelig.

---


# Kodeeksempler fra projektet

## API-facade til hentning af legepladser

```jsx
const API_BASE_URL = 'https://findenlegeplads.team-ice.dk/api/'

async function getAllPlaygrounds() {

    try {

        const response = await fetch(`${API_BASE_URL}playgrounds`);

        if (!response.ok) {
            throw new Error('Failed to fetch playgrounds');
        }

        const data = await response.json();

        return Array.isArray(data)
            ? data
            : data.playgrounds || [];

    } catch (error) {

        console.error('Error fetching playgrounds:', error);
        throw error;
    }
}
```

Dette gjorde det muligt at samle vores API-kald ét sted, så frontend-komponenterne blev mere overskuelige.

---

## useEffect til hentning af data

```jsx
import { useEffect, useState } from 'react';
import playGroundApiFacade from '../api/playGroundApiFacade';

function PlaygroundList() {

    const [playgrounds, setPlaygrounds] = useState([]);

    useEffect(() => {

        async function fetchData() {

            try {

                const data =
                    await playGroundApiFacade.getAllPlaygrounds();

                setPlaygrounds(data);

            } catch (error) {

                console.error(error);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            {playgrounds.map((playground) => (
                <p key={playground.id}>
                    {playground.name}
                </p>
            ))}
        </div>
    );
}
```

Her lærte vi, hvordan React kan hente og vise data dynamisk fra backend.

---

## useState til håndtering af state

```jsx
import { useState } from 'react';

function SearchBar() {

    const [search, setSearch] = useState('');

    return (
        <input
            type="text"
            placeholder="Søg efter legeplads"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}
```

Dette gjorde det muligt at opdatere brugergrænsefladen dynamisk uden at genindlæse siden.

---

## Login API-kald

```jsx
export async function login(credentials) {

    const response = await fetch(
        `${BACKEND_URL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        }
    );

    if (!response.ok) {
        throw new Error(`Login failed`);
    }

    const data = await response.json();

    localStorage.setItem('jwtToken', data.token);

    return data;
}
```

Her lærte vi, hvordan frontend kan kommunikere sikkert med backend ved hjælp af JWT tokens.

---

## API-kald til check-in

```jsx
export async function checkin(
    playgroundId,
    parentId,
    childrenId
) {

    const response = await fetch(
        `${BACKEND_URL}/playgrounds/${playgroundId}/checkins/checkin`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                parent_id: parentId,
                children_id: childrenId
            }),
        }
    );

    if (!response.ok) {
        throw new Error(`Check-in failed`);
    }

    return await response.json();
}
```

Dette gav en bedre forståelse for, hvordan frontend og backend arbejder sammen gennem HTTP requests.

---


## Konklusion

Uge 1 gav et vigtigt fundament inden for frontend-udvikling med JavaScript og React. Vi lærte at arbejde med centrale React-principper såsom komponentopbygning, props, state management og API-integration, hvilket gjorde det muligt at begynde udviklingen af frontend-delen til Find en Legeplads.

Gennem arbejdet med React hooks som useState og useEffect fik vi en forståelse for, hvordan data kan håndteres og vises dynamisk i en applikation. Samtidig arbejdede vi med JavaScript-funktioner og DOM-manipulation, som er essentielle for forståelsen af moderne webudvikling.

Arbejdet med vores egne API-kald og React hooks gjorde det lettere at forstå, hvordan data flyder mellem backend og frontend. Det blev samtidig tydeligt, hvor vigtigt det er at strukturere kode korrekt gennem komponenter og genbrugelige funktioner for at skabe en mere overskuelig og vedligeholdelsesvenlig applikation.

Ugen gav derfor en solid introduktion til moderne frontend-udvikling og skabte et vigtigt grundlag for det videre arbejde med projektet, hvor vi senere kan videreudvikle funktionalitet og brugeroplevelse i applikationen.