---
title: "Uge 5 – Spec-driven development og akademisk læsning"
categories: ["projects", "ideas"]
tags: ["ai", "ai-agents", "spec-driven-development", "software-development", "academic-reading"]
date: 2026-10-12
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 5
authors:
  - Luke Burup Persson
---

# Uge 5 – Spec-driven development og akademisk læsning

## Indledning

I uge 5 har jeg arbejdet med Spec-driven development, forkortet SDD. SDD handler om at lade specifikationer være udgangspunktet for udviklingen, før man begynder at implementere løsningen. I stedet for kun at beskrive, hvilken kode der skal skrives, forsøger man først at skabe en fælles forståelse af problemet, målet og de forventede resultater.

Jeg ser en tydelig parallel mellem SDD og akademisk læsning. Når man læser en akademisk tekst, orienterer man sig ofte først i abstractet, problemformuleringen og konklusionen. De tre dele giver tilsammen en ramme for at forstå resten af teksten. På samme måde kan en specifikation give en agent og en udvikler den kontekst, der er nødvendig for at planlægge og implementere en feature.

## Problemformulering

Hvordan kan Spec-driven development bruges som en metode til at skabe bedre softwareudvikling, og hvordan kan SDD perspektiveres til den måde, man arbejder med akademiske tekster på?

Jeg undersøger især:

- hvordan specifikationer kan fungere som udviklingens overordnede ramme
- hvordan abstract, problemformulering og konklusion kan sammenlignes med dele af en SDD-proces
- hvordan problemformuleringen kan ændre sig iterativt under implementationen
- hvordan agenter kan bruge specifikationen som kontekst før planlægning og kodning
- hvilke fordele og begrænsninger der følger med en specifikationsdrevet tilgang

## Metodeafgrænsning

I akademisk arbejde er det vigtigt at skelne mellem, hvad man undersøger, og hvordan man undersøger det. Den første del handler om emnets indhold og afgrænsning. Metodeafgrænsningen handler om den fremgangsmåde, man bruger til at udvikle, undersøge og vurdere resultatet.

I SDD betyder det, at specifikationen ikke kun beskriver, hvad der skal bygges. Den beskriver også den metode, som projektet skal følge. I vores tilgang bruges `/grill-me` til discovery og kravsafdækning, user stories til at beskrive brugerbehov, implementation decisions til at dokumentere tekniske valg og testing decisions til at definere, hvordan kravene skal verificeres.

Metodeafgrænsningen omfatter også projektets out-of-scope-områder. De gør det tydeligt, hvad der ikke skal implementeres i den aktuelle version, og beskytter projektet mod ukontrolleret scope creep. Samtidig er metoden iterativ. Problemformuleringen kan blive opdateret, når implementationen giver ny viden, men ændringerne skal dokumenteres, så projektets overordnede retning stadig er synlig.

Agenten kan støtte processen med analyse, planlægning og implementation, men menneskeligt review er stadig en del af metoden. Udvikleren skal vurdere, om kravene er forstået korrekt, om agentens ændringer følger specifikationen, og om tests faktisk viser, at resultatet opfylder målet.

## Hvad er Spec-driven development?

Spec-driven development betyder, at man begynder med at formulere, hvad der skal bygges, hvorfor det skal bygges, og hvordan man kan afgøre, om resultatet er korrekt. Specifikationen fungerer som et fælles referencepunkt for udvikleren, agenten og andre, der skal forstå eller reviewe løsningen.

En specifikation behøver ikke at beskrive alle implementationens tekniske detaljer. Den skal først og fremmest gøre formålet, afgrænsningen og succeskriterierne tydelige. Derefter kan implementationen udvikle sig gennem planlægning, kodning, test og review.

Det betyder også, at SDD ikke nødvendigvis er en lineær proces. Når man implementerer en løsning, opdager man ofte nye begrænsninger eller muligheder. Derfor kan specifikationen og især problemformuleringen blive justeret undervejs.

## Parallel til akademisk læsning

I akademisk læsning kan man bruge tekstens struktur til hurtigt at forstå dens overordnede argument. Abstractet præsenterer emnet og de vigtigste pointer. Problemformuleringen afgrænser det spørgsmål, teksten undersøger. Konklusionen samler op på, hvad undersøgelsen viste.

Den samme struktur kan bruges i SDD:

| Akademisk tekst | Spec-driven development |
| --- | --- |
| Abstract | Projektets overordnede mål og kontekst |
| Problemformulering | Det konkrete problem og de aktuelle krav |
| Analyse og metode | Planlægning, implementation og test |
| Konklusion | Det forventede eller opnåede resultat |

Abstractet og konklusionen fungerer som stabile holdepunkter. De beskriver henholdsvis projektets retning og det resultat, man ønsker at nå eller faktisk nåede. Problemformuleringen kan derimod ændre sig, når arbejdet giver ny viden om problemet.

Det er vigtigt at skelne mellem at justere en problemformulering og at miste projektets retning. I en god proces bliver ændringerne dokumenteret, så man stadig kan se, hvorfor scope eller krav blev ændret.

## Den iterative problemformulering

I traditionel akademisk læsning møder man ofte en problemformulering, der er fastlagt i teksten. I softwareudvikling er situationen mere dynamisk. En første problemformulering kan være baseret på antagelser, men implementationen kan vise, at problemet skal afgrænses anderledes.

Det kan for eksempel ske, når:

- et krav viser sig at være uklart
- en teknisk begrænsning ændrer den mulige løsning
- tests viser, at den oprindelige antagelse var forkert
- brugeren eller udvikleren opdager et nyt behov

På den måde fungerer SDD som en iterativ akademisk proces. Man starter med en retning, undersøger problemet gennem udvikling og opdaterer sin forståelse, når der kommer ny evidens.

## Agenter og specifikationer

En agent kan bruge specifikationen som sin første kontekst. Før agenten begynder at ændre kode, kan den læse projektets mål, krav, afgrænsning og acceptkriterier. Det gør det lettere for agenten at skelne mellem den ønskede funktionalitet og detaljer, der ligger uden for opgaven.

Et muligt flow er:

1. Abstractet eller projektbeskrivelsen forklarer det overordnede mål.
2. Problemformuleringen beskriver den konkrete opgave.
3. Agenten undersøger repositoryet og laver en plan.
4. Implementation og tests bruges til at undersøge, om planen holder.
5. Konklusionen vurderer, om resultatet opfylder specifikationen.

Agenten kan dermed fungere som en hjælp til analyse og implementation, men specifikationen erstatter ikke menneskeligt review. Udvikleren skal stadig vurdere, om problemformuleringen er rigtig, om ændringerne er passende, og om konklusionen faktisk kan forsvares ud fra tests og resultater.

## Fordele og begrænsninger

En specifikationsdrevet tilgang kan give en bedre fælles forståelse af opgaven. Den gør det nemmere at reviewe både agentens plan og den færdige implementation, fordi man har et tydeligt referencepunkt.

SDD kan også mindske risikoen for at implementere funktionalitet uden et klart mål. Når krav og acceptkriterier er beskrevet først, bliver det lettere at afgøre, om en ændring er relevant.

Der er dog også begrænsninger. Specifikationen skal holdes opdateret, når implementationen eller problemforståelsen ændrer sig. Hvis specifikationen bliver for detaljeret, kan den desuden begrænse udviklingen og gøre det sværere at reagere på ny viden.

Derfor bør en specifikation være præcis nok til at skabe retning, men fleksibel nok til at kunne udvikle sig. Det svarer til forskellen mellem at have en klar problemformulering og at forsøge at kende alle resultater, før undersøgelsen er begyndt.

## Refleksion

Den vigtigste læring er, at SDD ikke kun handler om at skrive krav ned. Det handler om at skabe en struktur for tænkning. Abstractet giver helheden, problemformuleringen afgrænser det, der skal undersøges, og konklusionen samler op på resultatet.

Jeg synes derfor, at parallellen til akademisk læsning er nyttig. Når jeg læser en akademisk tekst, bruger jeg ofte abstract, problemformulering og konklusion til at forstå tekstens grundstruktur. På samme måde kan jeg bruge en specifikation til at forstå, hvad et softwareprojekt forsøger at opnå, før jeg begynder at ændre koden.

Samtidig er softwareudvikling mere iterativ end en færdig akademisk tekst. Problemformuleringen kan ændre sig, fordi implementationen fungerer som en undersøgelse, der producerer ny viden. Det afgørende er, at abstractet eller den overordnede retning og den endelige konklusion fortsat er tydelige.

## Konklusion

Spec-driven development kan ses som en metode, hvor udviklingen begynder med en eksplicit specifikation og fortsætter gennem planlægning, implementation, test og review. Perspektiveret til akademisk læsning kan abstractet sammenlignes med projektets overordnede mål, problemformuleringen med de aktuelle krav og konklusionen med det forventede eller opnåede resultat.

Problemformuleringen behøver ikke at være statisk. Den kan ændre sig iterativt, når implementationen giver ny viden, så længe ændringerne dokumenteres, og projektets overordnede retning bevares. På den måde bliver både akademisk læsning og SDD en bevægelse mellem helhed, problem, analyse og konklusion.
 