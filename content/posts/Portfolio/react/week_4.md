---
title: React part IV - Styling and Deployment
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-06-05
draft: false
showauthor: true
series: ["Find en Legeplads -React"]
series_order: 4
authors:
  - Luke Burup Persson, Frederik Edvardsen
---

# Uge 4 – React IV

# Indledning

I uge 4 arbejdede vi med styling, arkitektur og deployment af frontend-applikationen til *Find en Legeplads*. Efter de foregående ugers fokus på komponenter, state management, routing og sikkerhed var målet nu at samle applikationen til en mere færdig og brugervenlig løsning.

Vi arbejdede med CSS, Flexbox og CSS-variabler for at forbedre brugeroplevelsen og skabe en mere ensartet visuel identitet på tværs af applikationen. Selvom CSS Modules indgik som en del af ugens pensum, valgte vi bevidst at arbejde med traditionelle CSS-filer. Dette valg blev truffet for at opnå en stærkere forståelse af grundlæggende CSS-principper og styling af React-komponenter, før vi introducerede yderligere abstraktioner.

Derudover arbejdede vi med UseContext, arkitekturen i vores fullstack-applikation og deployment af frontend-løsningen til en Linux-server. Dette gav en bedre forståelse for, hvordan en React-applikation flyttes fra udviklingsmiljø til produktionsmiljø og gøres tilgængelig for brugerne via en webserver.



# Problemformulering

Hvordan kan styling, arkitektur og deployment anvendes til at udvikle en brugervenlig og vedligeholdelsesvenlig frontend-applikation til *Find en Legeplads*, samtidig med at løsningen klargøres til drift i et produktionsmiljø?

Derudover arbejdede vi med følgende problemstillinger:

- Hvordan kan CSS anvendes til at forbedre brugeroplevelsen?
- Hvordan kan Flexbox og CSS-variabler skabe fleksible layouts?
- Hvordan kan UseContext anvendes til deling af data mellem komponenter?
- Hvordan struktureres en større React-applikation?
- Hvordan deployeres en React-applikation til en server?
- Hvordan konfigureres en webserver til at håndtere routing i en Single Page Application?



# SMTTE-model

## Sammenhæng

Vi skulle færdiggøre frontend-delen af *Find en Legeplads* ved at fokusere på styling, strukturering af projektet og deployment. Formålet var at samle de teknologier og koncepter, vi havde arbejdet med gennem de foregående uger, til en mere komplet og produktionsklar løsning.

## Mål

- At kunne style React-komponenter ved hjælp af CSS
- At forstå Flexbox og responsive layouts
- At anvende CSS-variabler til genbrugelig styling
- At forstå anvendelsen af UseContext
- At kunne strukturere en større React-applikation
- At få indsigt i deployment-processen
- At forstå sammenhængen mellem frontend, backend og webserver

## Tiltag

Vi arbejdede med:

- CSS og komponentstyling
- Flexbox og responsive layouts
- CSS-variabler
- Hover-effekter og brugerfeedback
- UseContext
- Projektstruktur og arkitektur
- Deployment til Linux-server
- Konfiguration af Caddy som webserver

## Tegn

Tegn på læring var blandt andet:

- At komponenterne fik en mere ensartet visuel identitet
- At layouts fungerede på forskellige skærmstørrelser
- At styling kunne genbruges gennem CSS-variabler
- At frontend-applikationen kunne deployes til et produktionsmiljø
- At routing fungerede korrekt efter deployment
- At projektstrukturen blev mere overskuelig og vedligeholdelsesvenlig



# Evaluering

I uge 4 arbejdede vi med at færdiggøre frontend-applikationen ved at forbedre styling, struktur og deployment. Fokus var ikke længere kun på funktionalitet, men også på brugeroplevelse, vedligeholdelse og organisering af projektet.

En vigtig del af arbejdet var anvendelsen af CSS til at skabe en mere moderne og brugervenlig grænseflade. Vi arbejdede blandt andet med Flexbox til opbygning af fleksible layouts og CSS-variabler til genbrug af farver og designvalg. Dette gjorde det lettere at skabe en ensartet visuel identitet på tværs af applikationen.

Selvom CSS Modules var en del af ugens pensum, valgte vi bevidst at arbejde med traditionelle CSS-filer. Dette gav en dybere forståelse af grundlæggende stylingprincipper og gjorde det lettere at gennemskue samspillet mellem React-komponenter og CSS.

Vi fortsatte samtidig arbejdet med AuthContext, som gav indsigt i, hvordan global state management kan anvendes til deling af brugerinformation mellem komponenter uden behov for omfattende prop-drilling.

En væsentlig del af ugen var deployment af frontend-applikationen. Vi genererede en produktionsversion af React-applikationen og uploadede den til vores server ved hjælp af SCP. Herefter blev applikationen gjort tilgængelig gennem Caddy, som fungerede som webserver og håndterede routing for vores Single Page Application.

Dette gav en bedre forståelse for hele processen fra udvikling til drift og viste, hvordan frontend, backend og serverinfrastruktur arbejder sammen i en fullstack-løsning.



# Kodeeksempler fra projektet

## Flexbox-layout

```css
.playground-child-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

Dette eksempel viser, hvordan vi anvendte Flexbox til at organisere indhold dynamisk. Ved hjælp af `flex-wrap` kunne elementerne automatisk flytte sig til næste række, når der ikke længere var plads på skærmen.

---

## CSS-variabler

```css
.playground-child-item.selected {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}
```

Ved at anvende CSS-variabler kunne vi genbruge farver og designvalg på tværs af flere komponenter.

---

## UseContext til global state

```jsx
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] =
    useState(() => getCurrentUser());

  return (
    <AuthContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
```

Dette gjorde det muligt at dele brugerinformation mellem komponenter.

---

## Deployment til server

```bash
scp -r dist jetty@134.209.203.235:/home/jetty/deployment/site/legeplads/
```

Efter at React-applikationen var bygget med `npm run build`, blev den uploadet til serveren via SCP.

---

## Konfiguration af Caddy

```caddy
legeplads.team-ice.dk {
    root * /srv/legeplads/dist
    file_server
    try_files {path} /index.html
}
```

Denne konfiguration sikrer, at React Router fungerer korrekt efter deployment.





# konklusion

Uge 4 samlede mange af de koncepter, vi havde arbejdet med gennem de foregående uger. Fokus flyttede sig fra primært funktionalitet til også at omfatte brugeroplevelse, strukturering og klargøring af applikationen til deployment.

Arbejdet med CSS, Flexbox og CSS-variabler gav en bedre forståelse for, hvordan moderne frontend-applikationer designes og vedligeholdes. Selvom CSS Modules var en del af pensum, valgte vi bevidst at fokusere på traditionelle CSS-filer for at styrke forståelsen af de grundlæggende stylingprincipper.

Samtidig gav arbejdet med UseContext og applikationens arkitektur indsigt i, hvordan større React-projekter organiseres. Deployment-processen gav desuden praktisk erfaring med at flytte en frontend-applikation fra udviklingsmiljø til produktionsmiljø og konfigurere den til drift på en server.

Uge 4 afsluttede dermed frontend-forløbet ved at samle komponenter, state management, routing, sikkerhed, styling og deployment i én samlet løsning. Dette gav en helhedsforståelse af, hvordan en moderne fullstack-applikation opbygges, vedligeholdes og gøres tilgængelig for brugerne.
