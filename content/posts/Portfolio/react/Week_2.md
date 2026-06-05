---
title: React part II - SPA with Many Components
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-05-01
draft: false
showauthor: true
series: ["Find en Legeplads -React"]
series_order: 2
authors:
  - Luke Burup Persson, Frederik Edvardsen
---

# Uge 2 – React II

# Indledning

I uge 2 arbejdede vi videre med React og frontend-udvikling i forbindelse med projektet *Find en Legeplads*. Fokus i denne uge var at opbygge en mere dynamisk Single Page Application (SPA) gennem brug af flere komponenter, state management og interaktivitet i brugergrænsefladen.

Vi arbejdede blandt andet med funktionelle komponenter, props, `useState`, `useEffect`, lister og conditional rendering. Derudover lærte vi at håndtere formularer og dele state mellem komponenter, så data kunne flyde mere struktureret gennem applikationen.

Formålet med uge 2 var at videreudvikle vores forståelse for React samt begynde at opbygge frontend-applikationen til *Find en Legeplads* med fokus på komponentstruktur, interaktivitet og datahåndtering.

---

# Problemformulering

Hvordan kan React anvendes til at udvikle en mere interaktiv og komponentbaseret frontend-applikation til *Find en Legeplads*, hvor state management, props og brugerinteraktion skaber en dynamisk brugeroplevelse?

Derudover arbejdede vi med følgende problemstillinger:

- Hvordan opdeles applikationen i genbrugelige React-komponenter?
- Hvordan deles state mellem komponenter?
- Hvordan bruges `useState` og `useEffect` til at skabe interaktivitet?
- Hvordan kan formularer håndteres i React?
- Hvordan kan data vises dynamisk gennem lister og conditional rendering?

---

# SMTTE-model

## Sammenhæng

Vi skulle videreudvikle vores frontend-kompetencer i React som en del af arbejdet med portfolio-projektet *Find en Legeplads*. Fokus var at skabe en mere interaktiv og struktureret frontend-applikation gennem komponenter og state management.

## Mål

- At kunne arbejde med flere React-komponenter
- At forstå props og state management
- At kunne dele state mellem komponenter
- At arbejde med formularer og brugerinput
- At skabe interaktive komponenter med `useState`

## Tiltag

Vi arbejdede med:

- Funktionelle komponenter
- Props og dataflow
- Lists and keys
- Conditional rendering
- Formularer i React
- `useState` og `useEffect`
- Lifting state mellem komponenter

## Tegn

Tegn på læring var blandt andet:

- At komponenter kunne genbruges og opdeles logisk
- At brugerinteraktion fungerede dynamisk
- At state blev håndteret korrekt mellem komponenter
- At formularer og inputfelter fungerede som forventet

---

# Evaluering

I uge 2 arbejdede vi videre med React og begyndte at strukturere frontend-applikationen til *Find en Legeplads* mere professionelt gennem komponentopdeling og state management. Vi lærte at opbygge komponenthierarkier og forstå, hvordan data flyder mellem komponenter via props og lifting state.

Vi arbejdede blandt andet med formularer, conditional rendering og dynamiske lister, hvilket gjorde applikationen mere interaktiv. Samtidig begyndte vi at arbejde mere praktisk med brugerinput og eventhandlers, så frontend reagerede dynamisk på brugerens handlinger.

En vigtig del af arbejdet var at begynde opbygningen af vores egne React-komponenter til projektet. Her lærte vi, hvor vigtigt det er at strukturere komponenter korrekt og gøre dem genbrugelige for at skabe en mere overskuelig kodebase.

---

---

# Kodeeksempler fra projektet

## useState til håndtering af interaktivitet

Vi brugte `useState` til at styre visning af elementer og gemme brugerinput.

```jsx
const [showAddFacility, setShowAddFacility] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
```

Dette gjorde det muligt dynamisk at åbne og lukke formularer samt håndtere søgning efter faciliteter.

---

## useEffect til datahentning

Vi arbejdede med `useEffect` til at hente data fra backend, når en komponent blev indlæst.

```jsx
useEffect(() => {
  (async () => {

    const playgroundFromServer =
      await playGroundApiFacade
        .getPlaygroundById(params.id);

    setPlayground(playgroundFromServer);

    setFacility(
      playgroundFromServer.facility || []
    );

  })();

}, [params.id]);
```

Dette gjorde det muligt automatisk at hente information om en legeplads baseret på dens id.

---

## Conditional rendering

Vi arbejdede med conditional rendering for kun at vise bestemte elementer, når de skulle bruges.

```jsx
{showAddFacility && (

  <div className="add-facility-form">

    <h3>Tilføj facilitet</h3>

  </div>

)}
```

Dette gjorde brugergrænsefladen mere overskuelig og interaktiv.

---

## Controlled Components

Vi arbejdede med formularer og brugerinput gennem controlled components.

```jsx
<input
  type="text"
  placeholder="Søg facilitet..."
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>
```

Her blev inputfeltets værdi styret gennem React state.

---

## Lists and Keys

Vi brugte `map()` til dynamisk at vise faciliteter fra backend.

```jsx
{facility.map((fac) => (

  <li
    className="facility-item"
    key={fac.id}
  >
    {fac.name}
  </li>

))}
```

Dette gjorde det muligt at vise data dynamisk gennem React-komponenter.

---

# konklusion

Uge 2 videreudviklede vores forståelse for React og frontend-udvikling gennem arbejdet med mere avancerede komponenter og interaktivitet i brugergrænsefladen. Vi lærte at arbejde mere struktureret med komponenter, props og state management, hvilket gjorde det muligt at skabe mere dynamiske og brugervenlige frontend-applikationer.

Gennem arbejdet med formularer, conditional rendering og dynamiske lister fik vi en bedre forståelse for, hvordan React håndterer data og brugerinteraktion. Samtidig arbejdede vi med deling af state mellem komponenter, hvilket gav indsigt i, hvordan større React-applikationer opbygges og struktureres.

Arbejdet med Find en Legeplads gjorde det tydeligt, hvor vigtigt det er at opdele applikationen i mindre genbrugelige komponenter for at skabe en mere overskuelig og vedligeholdelsesvenlig kodebase. Vi begyndte samtidig at arbejde mere praktisk med datahåndtering fra backend og dynamisk rendering af information i frontend.

Uge 2 skabte derfor et vigtigt grundlag for det videre arbejde med routing, sikkerhed og mere avanceret frontend-arkitektur, som vi senere skulle arbejde videre med i de kommende uger.