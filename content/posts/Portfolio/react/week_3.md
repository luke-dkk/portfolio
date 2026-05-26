---
title: Find en legeplads introduktion
categories: ["projects", "ideas"]
tags: ["legeplads", "java", "webapp"]
date: 2026-05-08
draft: false
showauthor: true
series: ["Find en Legeplads -React"]
series_order: 2
authors:
  - Luke Burup Persson, Frederik Edvardsen
---

# Uge 3 – React III

# Indledning

I uge 3 arbejdede vi videre med udviklingen af frontend-applikationen til *Find en Legeplads* med fokus på routing, sikkerhed og beskyttelse af brugerdata i React. Formålet med denne uge var at skabe en mere professionel Single Page Application (SPA), hvor brugeren kunne navigere mellem forskellige sider, logge ind og få adgang til beskyttede funktioner.

Vi arbejdede blandt andet med React Router, layouts, protected routes og JWT-baseret login. Derudover lærte vi, hvordan frontend og backend kan arbejde sammen gennem autentifikation og rollebaseret adgang til bestemte funktioner i applikationen.

Fokus i uge 3 var derfor at videreudvikle frontend-applikationen med navigation, sikkerhed og en mere struktureret applikationsarkitektur.

---

# Problemformulering

Hvordan kan React Router og JWT-baseret sikkerhed anvendes til at udvikle en sikker og struktureret frontend-applikation til *Find en Legeplads*, hvor brugere kan navigere mellem sider og få adgang til beskyttede funktioner gennem login?

Derudover arbejdede vi med følgende problemstillinger:

- Hvordan implementeres routing i en React-applikation?
- Hvordan opbygges protected routes?
- Hvordan håndteres login og JWT tokens i frontend?
- Hvordan deles brugerinformation gennem Context API?
- Hvordan sikres navigation mellem offentlige og beskyttede sider?

---

# SMTTE-model (uddrag)

## Sammenhæng

Vi skulle videreudvikle vores frontend-applikation ved at implementere routing og sikkerhed i React. Formålet var at skabe en mere realistisk webapplikation med login, brugerhåndtering og beskyttede sider.

## Mål

- At kunne implementere routing med React Router
- At forstå JWT-baseret autentifikation
- At kunne oprette protected routes
- At arbejde med Context API til brugerdata
- At skabe en mere struktureret SPA

## Tiltag

Vi arbejdede med:

- React Router
- BrowserRouter og Routes
- Layout-komponenter
- ProtectedRoute
- AuthContext
- JWT tokens
- Login og autentifikation
- Navigation mellem sider

## Tegn

Tegn på læring var blandt andet:

- At routing fungerede korrekt mellem sider
- At beskyttede sider krævede login
- At brugerdata kunne deles mellem komponenter
- At JWT tokens blev gemt og anvendt korrekt
- At navigationen fungerede som en Single Page Application

---

# Evaluering

I uge 3 arbejdede vi med routing og sikkerhed i React-applikationen til *Find en Legeplads*. Vi implementerede React Router, så brugeren kunne navigere mellem forskellige sider uden genindlæsning af applikationen.

Vi arbejdede blandt andet med offentlige og beskyttede routes gennem `ProtectedRoute`, hvor brugeren skulle være logget ind for at få adgang til bestemte sider. Dette gav en bedre forståelse for, hvordan sikkerhed implementeres i frontend-applikationer.

Derudover arbejdede vi med `AuthContext`, som gjorde det muligt at dele brugerinformation mellem komponenter i hele applikationen. Dette gjorde håndtering af login og brugerdata mere struktureret og genanvendelig.

En vigtig del af arbejdet var implementeringen af JWT-baseret login, hvor tokens blev gemt i `localStorage` og brugt til at identificere den aktuelle bruger. Dette gjorde det muligt at beskytte bestemte funktioner og sider i applikationen.

---

# Kodeeksempler fra projektet

## Routing med React Router

```jsx
<BrowserRouter>
  <Routes>

    <Route path="/auth" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Route>

  </Routes>
</BrowserRouter>
```

Dette gjorde det muligt at opbygge navigation mellem offentlige og beskyttede sider.

---

## Protected Routes

```jsx
export default function ProtectedRoute() {

  const token =
    localStorage.getItem("jwtToken");

  if (!token) {
    return (
      <Navigate
        to="/auth/login"
        replace
      />
    );
  }

  return <Outlet />;
}
```

Her lærte vi, hvordan bestemte sider kan beskyttes gennem login.

---

## AuthContext

```jsx
export const AuthContext =
  createContext();

export function AuthProvider({
  children
}) {

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

## JWT token håndtering

```jsx
export function getCurrentUser() {

  const token =
    localStorage.getItem("jwtToken");

  if (!token) return null;

  try {

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    return {
      email: payload.sub,
      id: payload.id,
      roles: payload.roles,
    };

  } catch {

    return null;
  }
}
```

Her arbejdede vi med dekodning og håndtering af JWT tokens.

---
Konklusion

Uge 3 gav en større forståelse for, hvordan routing og sikkerhed implementeres i moderne React-applikationer. Vi lærte at arbejde med React Router, layouts og navigation, hvilket gjorde det muligt at skabe en mere struktureret Single Page Application, hvor brugeren kunne navigere mellem forskellige sider uden genindlæsning af browseren.

Arbejdet med ProtectedRoute, AuthContext og JWT-baseret login gav indsigt i, hvordan frontend-applikationer kan beskyttes gennem autentifikation og rollebaseret adgang. Vi lærte blandt andet, hvordan brugerinformation kan gemmes og deles mellem komponenter, samt hvordan bestemte sider kun kan tilgås af brugere, der er logget ind. Dette gjorde applikationen mere sikker og mere realistisk i forhold til moderne webudvikling.

Derudover arbejdede vi med layouts og nested routes, som gjorde det muligt at strukturere applikationen mere overskueligt. Dette gav en bedre forståelse for, hvordan større frontend-applikationer organiseres gennem genbrugelige komponenter og tydelig opdeling mellem offentlige og beskyttede sider.

En vigtig erfaring fra uge 3 var også forståelsen for samspillet mellem frontend og backend i forbindelse med login og sikkerhed. Vi begyndte at arbejde mere professionelt med håndtering af tokens og beskyttelse af brugerdata, hvilket er centrale elementer i fullstack-applikationer.

Ugen skabte derfor et vigtigt grundlag for det videre arbejde med styling, deployment og fullstack-arkitektur i de kommende uger, hvor frontend-applikationen skulle gøres endnu mere komplet og produktionsklar.