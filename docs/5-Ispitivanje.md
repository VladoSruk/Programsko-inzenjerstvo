# 5. Ispitivanje

**Cilj:** Prikazati kako tim provjerava važno ponašanje aplikacije, što je stvarno ispitano, što rezultati pokazuju i koji poznati nedostaci ostaju. Planirano ispitivanje nije dokaz uspješnog izvođenja.

Proširivi primjeri CrisisMapa prikazuju oblikovanje ispitivanja i izvještavanje o rezultatima. Povezivanje zahtjev → obrazac uporabe → ispitivanje održavajte u [tablici sljedivosti zahtjeva](2-Analiza-zahtjeva.md); specifikacije ispitivanja i dokaze izvođenja zabilježite ovdje ili povežite s ispitivanjima u repozitoriju.

## 5.1 Pristup ispitivanju

**Cilj:** Odabrati provjere koje obuhvaćaju glavne korisničke ciljeve, važne uvjete neuspjeha i projektno specifične nefunkcijske zahtjeve.

**Pristup ispitivanju:** [U nekoliko rečenica navedite komponente ili pravila koja se ispituju izdvojeno, glavne interakcije provjerene u pokrenutoj aplikaciji i relevantne nefunkcijske provjere. Navedite koje su provjere automatizirane, koje se izvode ručno i gdje tim čuva dokaze.]

Odaberite normalne slučajeve, granične vrijednosti i neuspjehe koji otkrivaju različita ponašanja. Selenium IDE može snimiti i ponovno izvesti osnovnu interakciju u pregledniku; Selenium WebDriver omogućuje zapis provjere preglednika u kodu. Selenium ili drugi prikladan alat koristite kada pomaže da sustavska provjera bude ponovljiva. Navedite alat koji tim stvarno koristi. Ispitivanje razreda ili pravila pripada razini komponente; otvaranje obrasca u pregledniku provjerava pokrenuti sustav. Tijek kontinuirane integracije (engl. *continuous integration*, CI) i njegova izvođenja navedite samo ako ga tim stvarno koristi. Kontinuirana integracija podrazumijeva da se promjene redovito integriraju u zajednički repozitorij te automatizirano izgrađuju i provjeravaju. Sama uporaba GitHub Actionsa ili drugog alata ne znači da projekt primjenjuje CI ako se takve provjere stvarno ne izvode nad promjenama.

<details>
<summary><strong>Odabir provjera za podnošenje prijave</strong></summary>

**Primjer — CrisisMap:** Tim izravno ispituje provjeru lokacije i promjene stanja prijave kontroliranim ulazima. Zatim u pokrenutom pregledniku uz Selenium WebDriver provjerava podnošenje prijave i pripadajuće poruke o pogreškama. Zasebna provjera pokušava odobriti prijavu bez moderatorskih ovlasti. Ako je dostava obavijesti dio odobrenog opsega, ispitivanje provjerava odabir primatelja; ispitivanje potpune dostave od početka do kraja zahtijeva i aktivnog pružatelja obavijesti. Odbijanje geolokacije preglednika provjerava se uz mogućnost ručnog odabira lokacije. Automatizirani kod ispitivanja čuva se u Gitu, a svaki izvršeni rezultat upućuje na određeno izvođenje.

**Analiza primjera:** Pravilo provjere valjanosti može proći iako potpuno podnošenje prijave ne uspije. Ispitivanja preglednika i komponente zato odgovaraju na različita pitanja. Primjer obavijesti odvaja logiku odabira primatelja od stvarne dostave. Ni naziv alata ni snimka zaslona sami po sebi ne dokazuju da je cijela interakcija uspješno prošla.

</details>

## 5.2 Ispitni slučajevi

**Cilj:** Važne provjere učiniti ponovljivima bilježenjem scenarija, ulaza, koraka, očekivanog rezultata i rezultata izvođenja. Svakoj provjeri dodijelite stabilan ID koji se može koristiti u tablici sljedivosti zahtjeva.

| ID ispitnog slučaja | Scenarij ispitivanja | Ulazni podaci | Očekivani rezultat | Stvarni rezultat | Ishod | Koraci ispitivanja |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |

Scenarij određuje funkcionalnost koja se ispituje. Opaženi rezultat i **Prošlo**, **Nije prošlo** ili **Blokirano** unesite tek nakon izvođenja; do tada koristite **Nije pokrenuto**. Koraci ispitivanja moraju omogućiti drugom članu tima da ponovi provjeru. Izvorni kod automatiziranog ispitivanja čuvajte u Git repozitoriju projekta i iz relevantnog slučaja postavite poveznicu na njega; za ručnu provjeru ovdje dokumentirajte korake. Odaberite normalne slučajeve, smislene nevaljane ulaze ili granice, neuspjehe i relevantna svojstva kvalitete. Funkcionalnost koja nije implementirana predstavlja nedovršen opseg; provjera kako aplikacija obrađuje nevaljani ID valjano je negativno ispitivanje.

<details>
<summary><strong>Slučajevi podnošenja prijave na dvije razine ispitivanja</strong></summary>

**Primjer — ispitni slučajevi CrisisMapa:** Jedan neuspješan rezultat, ST-02, pokazuje razliku između provedenog slučaja i planiranih slučajeva označenih kao **Nije pokrenuto**. Datum, revizija, okruženje i dokazi oglednog izvođenja navedeni su u nastavku.

| ID ispitnog slučaja | Scenarij ispitivanja | Ulazni podaci | Očekivani rezultat | Stvarni rezultat | Ishod | Koraci ispitivanja |
| --- | --- | --- | --- | --- | --- | --- |
| CT-01 | Komponenta: valjana lokacija | Poplava; zemljopisna širina 45.82; zemljopisna dužina 16.00. | Koordinate prihvaćene. | Nije pokrenuto. | Nije pokrenuto | Pozvati validator lokacije s obje koordinate; provjeriti valjan rezultat. |
| CT-02 | Komponenta: nedostaje lokacija | Poplava; zemljopisna širina i dužina nisu zadane. | Provjera odbija podnošenje; ništa se ne sprema. | Nije pokrenuto. | Nije pokrenuto | Pozvati provjeru bez lokacije; provjeriti odbijanje i da nema spremanja. |
| CT-03 | Komponenta: granična vrijednost koordinata | Prvo (90, 180), zatim (90.01, 180). | Granica prihvaćena; vrijednost izvan granice odbijena. | Nije pokrenuto. | Nije pokrenuto | Izvesti provjeru s oba ulaza; usporediti ishode. |
| CT-04 | Komponenta: prijelaz prijave | Prijava u stanju SUBMITTED; odbijanje, zatim odobravanje. | Odobravanje odbijeno; status ostaje REJECTED. | Nije pokrenuto. | Nije pokrenuto | Odbiti prijavu; pozvati odobravanje; provjeriti konačni status. |
| CT-05 | Komponenta: prijava ne postoji | Repozitorij nema prijavu s ID-om 9999. | Definiran ishod „nije pronađeno”; ne stvara se izmišljena prijava. | Nije pokrenuto. | Nije pokrenuto | Zatražiti ID 9999 nad kontroliranim podacima repozitorija; provjeriti ishod „nije pronađeno”. |
| CT-06 | Komponenta: primatelji obavijesti | Potvrđena poplava blizu regije A; jedna pretplata na regiju A i jedna na regiju B. | Odabran je samo prihvatljiv primatelj u regiji A. | Nije pokrenuto. | Nije pokrenuto | Pozvati odabir primatelja s dvjema pretplatama; usporediti ID-ove. |
| CT-07 | Komponenta: nevaljana vrsta kriznog događaja | Prijava sadrži vrstu događaja izvan podržanog skupa. | Provjera odbija vrstu; prijava se ne sprema. | Nije pokrenuto. | Nije pokrenuto | Zadati nepodržanu vrijednost provjeri prijave; provjeriti odbijanje. |
| ST-01 | Sustav: valjano podnošenje prijave | Poplava; Visoka; odabrana lokacija na karti 45.82, 16.00. | Prikazuje se potvrda; prijava se može ponovno dohvatiti. | Nije pokrenuto. | Nije pokrenuto | Otvoriti obrazac; unijeti podatke; odabrati točku; poslati; otvoriti nastalu prijavu. |
| ST-02 | Sustav: nedostaje obavezna lokacija | Poplava; Visoka; opis „Water rising”; lokacija prazna. | Prikazuje se pogreška specifična za lokaciju; broj prijava se ne povećava. | Prikazana je općenita pogreška poslužitelja; broj prijava ostao je 24. | Nije prošlo | Otvoriti obrazac; unijeti podatke bez lokacije; poslati; usporediti broj prijava prije i poslije. |
| ST-03 | Sustav: dopuštenje geolokacije odbijeno | Dopuštenje preglednika odbijeno; Poplava; ručno odabrana točka na karti. | Korisnik može ručno odabrati lokaciju i podnijeti prijavu. | Nije pokrenuto. | Nije pokrenuto | Odbiti dopuštenje; odabrati točku na karti; poslati; provjeriti potvrdu. |
| ST-04 | Sustav: zaštićeni pregled prijave | Prijavljeni građanin bez moderatorske uloge; prijava ID 104. | Odobravanje odbijeno; prijava ostaje nepromijenjena. | Nije pokrenuto. | Nije pokrenuto | Pokušati odobravanje kroz aplikaciju/API; provjeriti odgovor i stanje prijave. |
| ST-05 | Sustav: pozadinski sustav nedostupan | Valjani podaci prijave poplave; pozadinski sustav namjerno nedostupan u ispitnom okruženju. | Aplikacija prijavljuje neuspjeh i ne prikazuje lažnu potvrdu podnošenja. | Nije pokrenuto. | Nije pokrenuto | Isključiti ispitni pozadinski sustav; poslati prijavu kroz preglednik; provjeriti poruku i ponašanje pri oporavku. |

**Analiza primjera:** Komponentni slučajevi izravno ispituju pravila; sustavski slučajevi ispituju vidljivo ponašanje u pokrenutoj aplikaciji. CT-03 pokazuje stvarnu graničnu vrijednost i vrijednost neposredno izvan nje; neodređena formulacija poput „vrlo dugačak ulaz” ne utvrđuje granicu. Ako tim usvoji zahtjev kvalitete NF-01 za ručni odabir lokacije, ST-03 ga također može provjeravati; nemojte stvarati drugi slučaj s istim koracima samo da biste dobili ID nefunkcijskog ispitivanja. CT-06 i ST-04 ovise o odobrenim funkcionalnostima. Redci prikazuju više tehnika i jedan ogledni neuspjeh; ne određuju obavezni broj slučajeva. Cilj performansi ili dostupnosti treba dogovoreni prag i izvediv postupak mjerenja prije nego što postane projektno ispitivanje.

**Detalji ponavljanja ST-02:** Prije radnje prebrojite pohranjene prijave u ispitnoj bazi podataka (24 u ovom oglednom izvođenju). Otvorite obrazac; odaberite Poplava i visoku razinu ozbiljnosti; unesite „Water rising”; ostavite lokaciju praznom; pošaljite; zabilježite poruku i ponovno provjerite broj prijava. Zabilježite reviziju aplikacije, prikazanu pogrešku i oba broja. Općenita pogreška ne zadovoljava očekivano objašnjenje specifično za lokaciju iako broj prijava ostaje 24.

</details>

<details>
<summary><strong>Od koraka podnošenja prijave do Selenium radnji</strong></summary>

**Primjer — CrisisMap:** Slučaj ST-01 u ovom nastavnom oblikovanju koristi polje za ručni unos koordinata. Nazivi selektora u nastavku predstavljaju elemente obrasca u ovom primjeru; tim mora pregledati vlastitu aplikaciju umjesto kopiranja tih identifikatora. Selenium IDE može snimiti interakciju, ali snimljeni slučaj i dalje treba provjeru očekivanog rezultata. Selenium WebDriver omogućuje timu da radnje i provjere napiše u verzioniranom ispitivanju.

| Korak | Postupak čitljiv čovjeku | Radnja Selenium WebDrivera u primjeru |
| --- | --- | --- |
| 1 | Otvoriti obrazac za prijavu. | Otvoriti URL obrasca za prijavu u ispitnoj aplikaciji. |
| 2 | Odabrati Poplava kao vrstu kriznog događaja. | Pronaći element `incidentType` i odabrati `Flood`. |
| 3 | Odabrati visoku razinu ozbiljnosti. | Pronaći element `severity` i odabrati `High`. |
| 4 | Unijeti lokaciju prijave. | Pronaći `locationInput` i unijeti `45.82, 16.00`. |
| 5 | Opisati krizni događaj. | Pronaći `description` i unijeti `Flooding in the city center`. |
| 6 | Poslati obrazac. | Pronaći i kliknuti `submitReport`. |
| 7 | Provjeriti rezultat. | Pričekati `reportConfirmation`; provjeriti da sadrži referencu na prijavu; otvoriti prijavu i provjeriti njezin opis. |

**WebDriver fragment (JavaScript):**

```js
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get(baseUrl + '/reports/new');
    await driver.findElement(By.id('incidentType')).sendKeys('Flood');
    await driver.findElement(By.id('severity')).sendKeys('High');
    await driver.findElement(By.id('locationInput')).sendKeys('45.82, 16.00');
    await driver.findElement(By.id('description'))
      .sendKeys('Flooding in the city center');
    await driver.findElement(By.id('submitReport')).click();

    const confirmation = await driver.wait(
      until.elementLocated(By.id('reportConfirmation')),
      10000
    );

    assert((await confirmation.getText()).includes('Report'));

    const reportUrl = await driver
      .findElement(By.id('createdReportLink'))
      .getAttribute('href');

    await driver.get(reportUrl);

    assert(
      (await driver.findElement(By.id('reportDetails')).getText())
        .includes('Flooding in the city center')
    );
  } finally {
    await driver.quit();
  }
})();
```

**Analiza primjera:** Sedmi korak provjerava potvrdu i da se podnesena prijava može ponovno dohvatiti. Eksplicitno čekanje daje aplikaciji vrijeme za prikaz asinkrone potvrde. Selektori, ruta i tekst potvrde moraju odgovarati korisničkom sučelju tima; snimanje tijeka bez provjere očekivanog rezultata nije dokaz da je ispitivanje prošlo. Verzionirajte automatizirano ispitivanje i sačuvajte rezultat izvođenja.

</details>

<details>
<summary><strong>Ispitivanja performansi, uporabljivosti i sigurnosti</strong></summary>

**Primjer — CrisisMap:** Ovi dodatni slučajevi prikazuju vrste provjera zastupljene u ranijim materijalima kolegija. Ciljevi opterećenja ili vremena izvršavanja zadatka primjenjuju se samo kada tim ima dogovoreni zahtjev i izvediv način mjerenja. Svih šest slučajeva u nastavku označeno je kao **Nije pokrenuto**.

| ID ispitnog slučaja | Scenarij ispitivanja | Ulazni podaci | Očekivani rezultat | Stvarni rezultat | Ishod | Koraci ispitivanja |
| --- | --- | --- | --- | --- | --- | --- |
| NF-P-01 | Performanse: opterećenje popisa prijava | 20 istodobnih korisnika tijekom dvije minute; baza podataka sadrži 100 prijava. | Ako je odobreni cilj 95. percentil vremena odziva od 2 s i najviše 1 % neuspjelih zahtjeva, obje izmjerene vrijednosti zadovoljavaju cilj. | Nije pokrenuto. | Nije pokrenuto | Pripremiti prijave; pokrenuti JMeter ili prikladan alat za opterećenje; zabilježiti vremena odziva, stopu pogrešaka i konfiguraciju smještaja. |
| NF-P-02 | Performanse: veće opterećenje | Povećati broj korisnika s 20 na 40, zatim na 80 uz isti skup podataka. | Zabilježiti opterećenje pri kojem se prvi put prekorači dogovoreni cilj kašnjenja ili stope pogrešaka; bez cilja ne tvrditi da je ispitivanje prošlo. | Nije pokrenuto. | Nije pokrenuto | Povećavati opterećenje u koracima; sačuvati izvještaj alata i zabilježiti kada se pogreške prvi put pojavljuju. |
| NF-U-01 | Uporabljivost: podnošenje prijave poplave | Tri sudionika koji prvi put koriste sučelje; svi dobivaju isti zadatak prijave. | Svaki sudionik može pronaći obrazac, unijeti lokaciju i podnijeti prijavu bez pomoći; zabilježiti vrijeme i poteškoće. | Nije pokrenuto. | Nije pokrenuto | Zadati zadatak; promatrati pokušaje; zabilježiti dovršetak, vrijeme i točke nesnalaženja. |
| NF-U-02 | Pristupačnost: podnošenje samo tipkovnicom | Navigacija tipkovnicom; mogućnost ručnog unosa lokacije. | Korisnik može dosegnuti sva obavezna polja, odabrati lokaciju, poslati prijavu i pročitati potvrdu bez pokazivačkog uređaja. | Nije pokrenuto. | Nije pokrenuto | Navigirati samo tipkovnicom; zabilježiti redoslijed fokusa i rezultat. |
| NF-S-01 | Sigurnost: unos prijave obrađuje se kao podatak | Opis sadrži niz `' OR '1'='1` u kontroliranom ispitnom okruženju. | Nema neželjenog rezultata upita, neovlaštenog pristupa ni kvara poslužitelja; unos se obrađuje kao podatak. | Nije pokrenuto. | Nije pokrenuto | Poslati niz; provjeriti odgovor i pohranjeni rezultat; pregledati relevantne zapise ispitivanja. |
| NF-S-02 | Sigurnost: nevaljani identitet pri pregledu | Istekli ili nevaljani token prijave; pokušaj odobravanja prijave 104. | Zahtjev odbijen; prijava 104 ostaje nepromijenjena. | Nije pokrenuto. | Nije pokrenuto | Pozvati zaštićenu radnju s nevaljanim identitetom; provjeriti odgovor i stanje prijave. |

**Analiza primjera:** Primjer opterećenja zahtijeva zabilježene percentile i pogreške, a ne tvrdnju da je aplikacija „podržala 1.000 korisnika”. Opažanje triju sudionika dokaz je o tim pokušajima, a ne dokaz opće uporabljivosti. Sigurnosni retci ispituju definirano ponašanje; jedan ulazni niz ne dokazuje da je aplikacija sigurna. NF-S-02 relevantan je samo kada je zaštićeni pregled prijave dio odobrenog opsega. Sustavsko ispitivanje može istodobno pružiti dokaz za nefunkcijski zahtjev: ST-03 već provjerava ručni odabir lokacije pa ponavljanje istih koraka pod novim ID-om ne donosi vrijednost.

</details>

## 5.3 Provedena ispitivanja i rezultati

**Cilj:** Navesti reviziju aplikacije, okruženje i dokaze potrebne za tumačenje stvarnih rezultata u tablici ispitnih slučajeva. Dodajte kratak zapis izvođenja kada te podatke nije moguće jasno prenijeti poveznicom na kod ispitivanja ili CI izvođenje.

**Najnovije izvođenje ili dokaz:** [Poveznica na CI izvođenje, bilješku ručnog ispitivanja ili kratak sažetak izvođenja s datumom, revizijom i okruženjem.]

Stupci **Stvarni rezultat** i **Ishod** iznad mjerodavni su rezultati za pojedinačni slučaj. Nemojte kopirati sve rezultate u drugu obaveznu tablicu. Neuspješna i blokirana izvođenja zabilježite iskreno; pri ponovnom izvođenju zadržite relevantnu povijest umjesto prikazivanja starog uspješnog rezultata kao trenutačnog.

<details>
<summary><strong>Bilježenje neuspješnog izvođenja bez izmišljanja prolaza</strong></summary>

**Primjer — scenarij pregleda CrisisMapa:** Tijekom izvođenja ST-02 korisnik podnosi prijavu bez odabira lokacije. Aplikacija prikazuje općenitu pogrešku poslužitelja umjesto da navede da lokacija nedostaje.

| ID ispitivanja ili izvođenja | Datum i revizija aplikacije | Okruženje | Opaženi rezultat i ishod | Dokaz |
| --- | --- | --- | --- | --- |
| `tests/evidence/ST-02-error.png`; `tests/evidence/ST-02-db-check.txt`; zadatak #18 |

**Analiza primjera:** Revizija i okruženje čine izvođenje prepoznatljivim; snimka zaslona podupire opaženu poruku, dok zabilježeni broj prijava podupire zasebnu tvrdnju da ništa nije spremljeno. Zadatak prati nedostatak. Nakon ispravka ponovno izvedite ST-02 i ažurirajte njegov rezultat; prethodni neuspjeh zadržite u povijesti izvođenja ili zadatka.

</details>

## 5.4 Poznati nedostaci i ograničenja ispitivanja

**Cilj:** Omogućiti čitatelju da vidi nedostatke koji utječu na uporabu trenutačne aplikacije i važno ponašanje koje tim nije mogao provjeriti.

| Problem ili ograničenje | Korisniku vidljiv učinak ili neprovjereno ponašanje | Dokaz ili poveznica na zadatak |
| --- | --- | --- |
|  |  |  |

Detaljnu reprodukciju nedostatka i napredak čuvajte u alatu za praćenje zadataka, uz kratku poveznicu ovdje za nedostatke koji bitno utječu na aplikaciju ili demonstraciju. Ako je obavezna funkcionalnost nedovršena, jasno to navedite u završnim rezultatima; nemojte je nazivati poznatim nedostatkom niti uspješnim ispitivanjem. Iskreno zabilježite i nedostajuću mogućnost ispitivanja, primjerice vanjskog pružatelja koji tijekom izvođenja nije bio dostupan. Ovaj odjeljak ne zahtijeva drugi potpuni dnevnik problema.

<details>
<summary><strong>Razlikovanje neuspjele provjere od neprovjerene integracije</strong></summary>

**Primjer — CrisisMap:**

| Problem ili ograničenje | Korisniku vidljiv učinak ili neprovjereno ponašanje | Dokaz ili poveznica na zadatak |
| --- | --- | --- |
| Pogreška zbog nedostajuće lokacije previše je općenita | Građanin ne može prepoznati što mora ispraviti prije podnošenja prijave. | Zadatak #18; dokaz izvođenja ST-02. |
| Pružatelj obavijesti nije bio dostupan tijekom ispitivanja | Tim u tom izvođenju nije provjerio dostavu obavijesti. Podnošenje prijave i dalje može raditi. | Primjer zapisa blokiranog izvođenja `tests/evidence/notification-blocked.txt`. |

**Analiza primjera:** Prvi redak opisuje opaženi nedostatak; drugi ograničenje dostupnih dokaza. Nijedan se ne smije prikazati kao uspješno ispitivanje obavijesti. Redak uklonite ili ažurirajte kada se promijene zabilježeni dokazi tima.

</details>

**Završna provjera:** ID-ovi ispitivanja i očekivani ishodi odgovaraju primjenjivim zahtjevima i obrascima uporabe. Izvedeni rezultati upućuju na stvarnu reviziju aplikacije i pregledljivo izvođenje ili ponovljivo opažanje. Važni neuspjesi i otvoreni nedostaci ostaju vidljivi, dok završni opis isporučenih funkcionalnosti odražava ono što podržavaju ispitivanja i pokrenuta aplikacija.
