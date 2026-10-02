# [Naziv aplikacije] — Projektna dokumentacija

**Kolegij:** [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz), Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu  
**Akademska godina:** [20XX./20XX.]  
**Tim:** [Oznaka i naziv tima]  
**Nastavnik:** Vlado Sruk  
**Asistent / demonstrator:** [Ime i uloga u ovom izvođenju kolegija]

## Pregled projekta

**Cilj:** Omogućiti čitatelju koji prvi put vidi projekt da u dvije ili tri rečenice prepozna aplikaciju, njezine ciljane korisnike i glavnu svrhu.

[Opis projekta.]

<details>
<summary><strong>Sažet pregled projekta</strong></summary>

Za projekt na temu CrisisMap sažet pregled može navesti građane kojima trebaju informacije o kriznim događajima povezane s njihovom lokacijom te cilj aplikacije da prijave kriznih događaja prikaže na karti. Funkcionalnost spomenite samo ako pripada odobrenom zadatku tima; bez dokaza nemojte tvrditi da aplikacija poboljšava odgovor hitnih službi. Ovo je primjer informativnog pregleda, a ne tekst za prepisivanje niti dokaz da je funkcionalnost ostvarena.

</details>

**Aplikacija i osnovno postavljanje:** [README repozitorija](../README_PREDLOZAK.md#quick-start)  
**Javno dostupna aplikacija:** pogledajte [README – Postavljanje](../README_PREDLOZAK.md#deployment)

## Članovi tima i uloge

Ažurirani popis članova, njihovih GitHub profila i glavnih uloga ili doprinosa nalazi se u [README-u repozitoriju](../README_PREDLOZAK.md#team-members)..

## Kazalo dokumentacije

| Stranica | Svrha |
| --- | --- |
| [1. Opseg projekta](1-Projekt.md) | Problem, cilj i granice projekta |
| [2. Analiza zahtjeva](2-Analiza-zahtjeva.md) | Zahtjevi, ograničenja i sljedivost |
| [3. Obrasci uporabe](3-Obrasci-uporabe.md) | Akteri i reprezentativne interakcije korisnika |
| [4. Arhitektura i oblikovanje](4-Arhitektura-i-oblikovanje.md) | Glavne odluke oblikovanja, struktura, podaci i ponašanje |
| [5. Ispitivanje](5-Ispitivanje.md) | Pristup ispitivanju, stvarni rezultati i poznati nedostaci |
| [6. Postavljanje, instalacija i konfiguracija](6-Postavljanje-instalacija-i-konfiguracija.md) | Lokalna instalacija, konfiguracija, javno postavljanje i administracija |
| [7. Zaključak i budući rad](7-Zakljucak-i-buduci-rad.md) | Zaključak i moguća daljnja poboljšanja |
| [A. Pregled aktivnosti grupe](A-Pregled-aktivnosti-grupe.md) | Aktivnosti tima, doprinosi i izazovi |

## Ključne točke projekta

| Kontrolna točka | Demonstracija | Video |
| --- | --- | --- |
| 7. tjedan — prvi pregled | [Poveznica na demonstraciju ili inačicu projekta] | [Poveznica na video Demo 1, ako je snimljen] |
| 14. tjedan — završni pregled | [Poveznica na završnu demonstraciju ili inačicu projekta] | [Poveznica na video završne demonstracije, ako je snimljen] |

Dokumentacija se ažurira kako se aplikacija razvija; samo su 7. i 14. tjedan formalne kontrolne točke.

## Organizacija projekta i razvojni proces

**Način rada:** [Stvarni način rada i trajanje iteracije, ako je relevantno.]  
**Praćenje trenutačnih zadataka i nedostataka:** [Poveznica na GitHub Issues ili stvarno korištenu ploču zadataka.]

<details>
<summary><strong>Opis načina rada tima</strong></summary>

**Primjer — CrisisMap:**

Navedite pristup koji tim stvarno koristi. Tim koji razvija CrisisMap može organizirati prijave, rad na karti i provjere kao GitHub Issues, jednom tjedno raspraviti prioritete i iznad postaviti poveznicu na svoju aktivnu ploču zadataka. Takav je konkretan opis procesa informativniji od tvrdnje da tim koristi „Scrum” ako zapravo ne primjenjuje njegove prakse. Stvarni tim treba navesti vlastiti ritam rada i odgovornosti; dokumentacija ne treba duplicirati ploču zadataka. Primjer opisuje mogući tijek rada (engl. workflow), a ne tvrdi da je objavljeni tim CrisisMapa radio upravo tako.

</details>

## Pravila dokumentacije

Dokumentacija se sastoji od međusobno povezanih Markdown stranica. Obavezni UML dijagrami izrađuju se u PlantUML-u, uz PlantUML izvor i čitljivu sliku u dokumentaciji. Primjeri u ovom predlošku kolegija pokazuju kako nešto dokumentirati; nisu rezultati studentskog projekta.

<details>
<summary><strong>Izvori dijagrama i nastavni primjeri</strong></summary>

Nastavni primjeri pretpostavljaju React/Vite klijentski dio, Node.js poslužiteljski dio, PostgreSQL, smještaj aplikacije na Renderu i Selenium WebDriver (JavaScript). Vaš tehnološki skup može biti drukčiji; u dokumentaciji opišite ono što stvarno koristite.

Za obrazac uporabe podnošenja prijave kriznog događaja u CrisisMapu tim može čuvati UML izvor u `.puml` datoteci, prikazati odgovarajuću sliku na relevantnoj stranici dokumentacije te ažurirati oboje kada se interakcija promijeni. Koristite stvarni dijagram i stvarno postavljanje vlastitog projekta. Domena ili tehnologija prikazana u primjeru ne postaje zahtjev osim ako je dio odobrenog zadatka.

>Napomena o primjerima: Blokovi „Primjer — CrisisMap" nastavni su scenarij, a ne rezultat ičijeg projekta; ne prepisujte ih. U primjerima se koriste React, Node.js, PostgreSQL, Render i Selenium samo radi dosljednosti. Vaš stog može biti drukčiji (npr. Java/Spring); dokumentirajte ono što stvarno koristite.</details>

## Akademski integritet, ponašanje i licenciranje

README repozitorija sadrži projektnu [izjavu o uporabi umjetne inteligencije](../README_PREDLOZAK.md#ai-usage), [informacije o kodeksu ponašanja i podršci](../README_PREDLOZAK.md#code-of-conduct-and-support) te [status licence ili ponovne uporabe](../README_PREDLOZAK.md#license). Pristupni podaci i druge tajne nikada se ne objavljuju u dokumentaciji niti dijele u običnim porukama.

## Izjava o uporabi umjetne inteligencije

<!-- UPUTA: Ovo je detaljan zapis uporabe umjetne inteligencije; README sadrži kratak sažetak i poveznicu na ovaj odjeljak. Unesite samo ono što se stvarno dogodilo i uklonite neupotrijebljene retke. Ako nije korišten nijedan alat generativne umjetne inteligencije, zamijenite cijeli odjeljak jednom rečenicom koja to jasno navodi. Svaki redak mora upućivati na stranicu, datoteku, zahtjev za uključivanje promjena (PR) ili zadatak. Nikada ne unosite pristupne podatke, osobne podatke ni tuđi zaštićeni sadržaj u alate umjetne inteligencije. -->

Kratak sažetak: [README – Uporaba umjetne inteligencije](../README_PREDLOZAK.md#ai-usage). Ovaj odjeljak bilježi koji su alati korišteni, za koju dokumentaciju ili kod te kako je tim provjerio rezultat. Slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

### Korišteni alati

| Alat | Inačica ili model | Koristio/la | Glavna svrha |
| --- | --- | --- | --- |
| [Naziv alata] | [Inačica ili model, ako je poznat] | [Član/članovi tima] | [npr. izrada nacrta dokumentacije, generiranje izvora dijagrama] |

### Opseg doprinosa umjetne inteligencije

| Stranica, datoteka ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| [npr. 3. Obrasci uporabe, UC-002] | [Izrada nacrta / preoblikovanje / prijevod / izvor dijagrama / sažimanje] | [Kratak opis] | [Ulaz zadan alatu; dodane, ispravljene ili uklonjene činjenice] | [Stranica dokumentacije, `.puml` datoteka, PR] |

Stranice i artefakti koji nisu navedeni iznad izrađeni su bez pomoći generativne umjetne inteligencije. [Po želji: kao dodatne retke navedite kod ili ispitivanja izrađena uz pomoć umjetne inteligencije.]

### Provjera generiranog sadržaja

| Provjera | Kako je provedena | Dokaz |
| --- | --- | --- |
| Činjenična točnost | [Svaka tvrdnja o funkcionalnostima, ponašanju ili arhitekturi uspoređena je s pokrenutom aplikacijom i kodom] | [Imena pregledavatelja; poveznice na zahtjev za uključivanje promjena (PR) ili zadatak] |
| Nema tvrdnji o neostvarenim funkcionalnostima | [Provjereno je da opisane funkcionalnosti, ispitivanja i rezultati stvarno postoje; planirani rad označen je kao planiran] | [Usporedba s odjeljkom 5.4 (Ispitivanje) i odjeljkom 7.1 (Zaključak)] |
| Dosljednost s drugim stranicama | [Nazivi, ID-ovi i dijagrami provjereni su prema Analizi zahtjeva, Obrascima uporabe, Arhitekturi i oblikovanju te Ispitivanju] | [Kontrolni popis ili bilješka pregleda] |
| Izvori dijagrama | [Generirani PlantUML je iscrtan, ispravljen i odgovara implementiranom sustavu] | [`.puml` datoteka i izrađena slika] |
| Povjerljivi sadržaj | [Kako je tim osigurao da u upite ili dokumentaciju nisu unesene tajne, pristupni podaci ni osobni podaci] | [Primijenjeni postupak] |

### Pogreške pronađene u izlazu umjetne inteligencije

| Problem | Kako je pronađen | Rješenje |
| --- | --- | --- |
| [Netočna, izmišljena ili iz predloška preuzeta tvrdnja] | [Pregled, ispitivanje ili usporedba s aplikacijom] | [Ispravak s poveznicom] |

<!-- UPUTA: Zabilježite stvarne ispravke ili napišite „Nisu utvrđene”. Općenita tvrdnja poput „sav tekst je pregledan” nije dokaz; dokaz su prethodne tablice. Tim mora moći objasniti svaku rečenicu koju objavi. -->

<details>
<summary><strong>Nastavni primjer: kako izgleda zapis usmjeren na dokumentaciju</strong></summary>

**Primjer — CrisisMap:**

| Stranica ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| 3. Obrasci uporabe, UC-002 | Izrada nacrta | Prvu inačicu glavnog i alternativnih tijekova | Tim je zadao stvarna polja obrasca i uklonio granu prijave u sustav koja u aplikaciji ne postoji | Primjer PR #31 |
| Sekvencijski dijagram, podnošenje prijave | Izvor dijagrama | Nacrt PlantUML-a | Tim je uskladio nazive sudionika s komponentama i uklonio korak slanja obavijesti koji nije implementiran | `diagrams/report-submission.puml` (primjer) |

| Problem | Kako je pronađen | Rješenje |
| --- | --- | --- |
| U tekstu je stajalo da se obavijesti dostavljaju unutar jedne minute | Usporedba s Ispitivanjem (5.4): dostava nikada nije ispitana | Tvrdnja je uklonjena; obavijesti su navedene pod Budućim radom |
| Nacrt je kopirao primjer zahtjeva F-005 iz predloška kao projektni zahtjev | Usporedba s vlastitim popisom zahtjeva tima | Zamijenjeno stvarnim zahtjevom tima |

**Analiza primjera:** Svaki redak navodi stranicu ili datoteku, ono što je alat generirao i ono što je tim promijenio. Pogreške su tipične za generiranu dokumentaciju: funkcionalnost koja ne postoji i tekst predloška prikazan kao činjenica o projektu. Tvrdnje poput „AI je korišten svugdje” ili „sav tekst je pregledan” nije moguće provjeriti. Ovo je nastavni scenarij, a ne opis objavljenog projekta.

</details>
