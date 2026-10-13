---
title: "Uge 7 – Scrum og projektstyring i agentic development"
categories: ["projects", "ideas"]
tags: ["ai", "ai-agents", "scrum", "project-management", "agile", "software-development"]
date: 2026-10-13
draft: false
showauthor: true
series: ["AI Driven applications"]
series_order: 7
authors:
  - Luke Burup Persson
---

# Uge 7 – Scrum og projektstyring i agentic development

## Indledning

I uge 7 har jeg arbejdet med Scrums rolle i udviklingsprojekter, hvor AI-agenter kan producere kode meget hurtigt. Fokus har ikke været på, at jeg selv skulle skrive mest muligt kode, men på hvordan et team kan koordinere arbejdet, når flere personer og agenter arbejder på forskellige dele af det samme system.

Min rolle har derfor primært været at facilitere, guide og skabe overblik. Jeg skulle sikre, at teammedlemmerne vidste, hvad de skulle arbejde på, at opgaverne havde tydelige grænser, og at arbejdet blev afsluttet på en måde, som resten af teamet kunne bygge videre på.

## Problemformulering

Hvordan kan Scrum og almindelig projektstyring bruges til at skabe overblik, kvalitet og koordinering, når et udviklingsteam arbejder hurtigt og parallelt med AI-agenter?

Jeg har især undersøgt:

- hvordan Scrum kan strukturere agentic development
- hvordan slices kan afgrænses på tværs af frontend, backend og database
- hvordan acceptkriterier og Definition of Done kan forhindre ukontrolleret arbejde
- hvorfor stand-ups og tydelig kommunikation bliver vigtigere, når arbejdet går hurtigere
- hvordan blockers og dokumentation kan holde teamet koordineret
- hvordan kritiske stier påvirker planlægning og prioritering

## Scrum i agentic development

Scrum handler ikke kun om møder eller en liste af opgaver. Det handler om at skabe en fælles arbejdsform, hvor teamet løbende kan planlægge, prioritere, inspicere og tilpasse arbejdet.

Når AI-agenter bruges til udvikling, kan selve implementationen gå hurtigere. En agent kan undersøge kode, oprette filer og implementere en feature på kort tid. Det betyder dog ikke nødvendigvis, at hele projektet bevæger sig hurtigere. Krav, afhængigheder, review, test, beslutninger og koordinering kan stadig være flaskehalse.

Derfor bliver Scrum relevant. Scrum kan være det system, der hjælper teamet med at holde retningen, mens agenterne øger hastigheden på de enkelte udviklingsopgaver.

## Min rolle som facilitator

Jeg har ikke selv skrevet meget af koden i dette arbejde. Min rolle var i stedet at sikre, at teamet vidste, hvor vi skulle hen, og at de enkelte arbejdsopgaver hang sammen.

Det indebar blandt andet at:

- følge op på teammedlemmernes respektive slices
- sikre at opgaver havde tydelige acceptkriterier
- hjælpe med at identificere og dokumentere blockers
- holde øje med, om teamet arbejdede inden for den aftalte afgrænsning
- sørge for at relevante møder og stand-ups blev overholdt
- skabe dialog om projektets retning og tekniske afhængigheder

Facilitatorrollen handler ikke om at kontrollere alle detaljer. Den handler om at gøre det lettere for teamet at træffe gode beslutninger og opdage problemer, før de vokser sig store - heri er der et særligt fokus på tekniskgæld.

## Slices, acceptkriterier og Definition of Done

I et projekt med frontend, backend og database kan en feature hurtigt blive for bred. Derfor er det nyttigt at opdele arbejdet i slices. En slice skal have en tydelig funktion, en afgrænset leverance og nogle kriterier for, hvornår arbejdet er færdigt.

Acceptkriterierne fungerede som en konkret grænse for opgaven. De viste, hvad der skulle være opfyldt, og hjalp med at forhindre, at en person eller agent fortsatte med at udvide opgaven uden en ny aftale.

Jeg brugte blandt andet markeringen `- [ ]` til at synliggøre, hvilke acceptkriterier der stadig manglede. Det gjorde det lettere at se, om en opgave faktisk var færdig, eller om der stadig var krav, der ikke var opfyldt.

Det hænger sammen med Definition of Done. En opgave er ikke nødvendigvis done, bare fordi koden er skrevet. Den skal også være testet, reviewet, dokumenteret og integreret korrekt i projektet. Den præcise Definition of Done skal være fælles for teamet, så “færdig” ikke betyder noget forskelligt for hver person.

## Dokumentation og blockers

I praksis oplevede jeg, at dokumentationen nogle gange tog længere tid end selve arbejdet. Det kan virke ineffektivt, men dokumentationen er vigtig, når flere mennesker og agenter arbejder parallelt.

Dokumentationen hjælper teamet med at forstå:

- hvad der allerede er besluttet
- hvad der stadig mangler
- hvilke antagelser implementationen bygger på
- hvilke problemer der blokerer fremdriften
- hvilke ændringer der påvirker andre slices

En blocker skal ikke kun registreres som “jeg kan ikke komme videre”. Den bør beskrive, hvad der blokerer, hvem der er påvirket, og hvilken beslutning eller handling der kan fjerne blokeringen. På den måde bliver blockers en del af teamets koordinering i stedet for et individuelt problem.

## Parallelle slices og risikoen for for lidt koordinering

Hvis et team kan arbejde på mange slices på samme tid, kan det umiddelbart se ud som en fordel. Men parallelisering skaber også risiko for overlap, modstridende antagelser og integrationproblemer.

En feature kan for eksempel være opdelt i en frontend-slice, en backend-slice og en database-slice. Hvis de tre slices udvikles uden fælles aftaler, kan de ende med forskellige forventninger til API-format, datamodeller eller validering.

Derfor er stand-ups og andre koordinationspunkter endnu vigtigere i agentic development. De skal ikke bruges til lange statusrapporter, men til at afklare retning, afhængigheder og blokeringer. Når arbejdet går hurtigt, bliver det farligere at antage, at alle automatisk ved, hvad de andre laver.

## Review og kvalitetssikring

En vigtig regel i projektet var, at man ikke selv skulle godkende sin egen pull request, selv om ændringen var testet. Tests viser, om bestemte forventninger er opfyldt, men de erstatter ikke et uafhængigt review.

Det gælder især, når en AI-agent har produceret ændringerne. Agenten kan skrive kode, der ser korrekt ud og består de eksisterende tests, men som stadig kan være svær at vedligeholde eller være i konflikt med projektets arkitektur.

Reviewet skal derfor også vurdere:

- om ændringen løser det rigtige problem
- om den holder sig inden for slicens scope
- om den følger projektets tekniske beslutninger
- om der mangler tests eller dokumentation
- om ændringen skaber problemer for andre slices

## Kritiske stier

Kritiske stier er relevante, fordi ikke alle opgaver har samme betydning for projektets fremdrift. Nogle opgaver blokerer mange andre opgaver. Det kan for eksempel være en databaseændring, en central API-kontrakt eller en autentificeringsløsning, som både frontend og backend afhænger af.

Hvis en opgave på den kritiske sti bliver forsinket, kan mange parallelle slices i praksis miste deres værdi. Derfor skal Scrum-planlægningen ikke kun se på, hvor mange opgaver teamet kan arbejde på, men også på hvilke afhængigheder der bestemmer, hvornår projektet kan komme videre.

AI-agenter kan forkorte arbejdstiden på en enkelt opgave, men de fjerner ikke nødvendigvis den kritiske sti. De kan endda gøre den mindre synlig, fordi mange opgaver hurtigt ser færdige ud, mens én central beslutning stadig blokerer integrationen.

## Refleksion

Min vigtigste læring er, at hurtigere kodning ikke automatisk giver bedre projektstyring. Når agentic development gør det muligt at arbejde på flere dele af systemet samtidig, bliver behovet for klare rammer større.

Jeg har derfor fået en større forståelse for, at en facilitator kan skabe værdi uden selv at skrive mest kode. Ved at holde øje med acceptkriterier, blockers, møder, review og afhængigheder kan man hjælpe teamet med at arbejde mere samlet.

Scrum bliver på den måde ikke en modsætning til AI-agenter. Scrum leverer den koordinering og feedback, der skal til, for at agenternes hastighed kan bruges produktivt.

## Konklusion

I uge 7 har jeg undersøgt, hvordan Scrum kan understøtte udvikling med AI-agenter. Min rolle har primært været at facilitere og guide teamet, så alle vidste, hvad de skulle arbejde på, og hvordan deres slices passede ind i helheden.

Acceptkriterier, Definition of Done, blockers, dokumentation, stand-ups og uafhængigt review var centrale værktøjer. De gjorde det muligt at holde styr på arbejdet, selv når flere frontend-, backend- og database-slices blev udviklet parallelt.

Den overordnede konklusion er, at agentic development øger behovet for projektstyring. Når implementationen går hurtigere, bliver koordinering, kvalitetssikring og kritiske stier vigtigere. AI kan hjælpe med at skrive koden, men Scrum hjælper teamet med at vide, hvilken kode der skal skrives, hvorfor den skal skrives, og hvornår den reelt er færdig.


## Bilag - Dokumentation jeg har skrevet:

# Koordinering
(...)
## Rollefordeling
(...)

## Mødetider
(...)

## Kommunikation
(...)



## Kodning
Der pushes aldrig til main - der laves pull-requests.
Et pull-request kan laves når Accept-kriterier og sub-issues er klaret.
Hvis det er en gitMasters kode der skal implementeres, så skal de have en anden til at acceptere eller reject det.
Gitmaster må aldrig slette eller korrigere, andres pull-requests medmindre der er kode der er udkommenteret. Hertil skal der gives accept fra koderen først, ellers reject.

## Kodekvalitet
Vi skal sikre følgende
-	Læsbarhed
-	Testbarhed
-	Lav kompleksitet
-	Få unødvendige afhængigheder
-	God fejlhåndtering
-	Sikkerhed - salt skal ikke være “1234(...), “CHANGE_ME”  etc.
-	Udkommenteret kode skal ikke fremtræde i kodebasen
## Kodestandard
Vi skal sikre følgende
-	God navngivning
-	Vi formaterer og indenterer som aftalt (se bilag 2 kodeeksempel)
-	Vi strukturerer og organisere filerne hvor de hører til.
-	Derudover gængse kodestandarder.
## Pull-request rejections
Hvis en GitMaster ikke mener koden kan accepteres, skal den selvfølgelig rejectes.
Dette sker ved at der laves kommentare i rejected således koderen ved hvad der skal ændres.
Hertil hører også at hvis koderen er trådt ind i en andens domæne, skal det også rejectes og fjernes.
## Definition of Done
Et product backlog item er done når:
 - Accept-kriterierne er udført samt krydset af
   - 	Hvis et accept-kriterie ikke kan krydses af, overvej hvorfor, og om der skal laves en blokere, eller et sub-issue, således den kan komme tilbage i product-backlog?
 - Der er lavet tests
   - De automatiske tests passer
 - Kodestandarden og kodekvaliteten er opfyldt.
   - Kommentarer må gerne være med hvis de er opklarende - det skal dog være så lidt som muligt, og der skal være en stærk overvejelse om det i så fald skal kodes på en anden måde?
 - 	Relevant dokumentation er udfyldt
   - 	Herunder dato for start.
 - 	Hvordan incrementet kan vises - hvor relevant i:
   - Frontend
   - Backend
   - Postgres 


