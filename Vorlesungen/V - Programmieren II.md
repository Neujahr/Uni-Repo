---
tags: sem/ws2324
---
Topic: Einführung
Date: 
Course: Informatik
Class: [[Programmieren II]]

---



## Fragen
- Item

## Notizen
- Buchempfehlung: Der C++ Programmierer, Ulrich Breymann
- www.cppreference.com zum Nachschlagen

## Zusammenfassung
1. ==.h Dateien _niemals_ using namespace std verwenden== -> Blockiert mir die Namen. Beispiel: Man möchte selber sort(); definieren, aber sort(); existiert schon als Funktion in der Standard als std::sort();                                                                                                            Da man nicht weiß was alles in der std library included ist, nutzt man das nur bei .cpp Dateien. -> Nachteil: In jeder .h Datei muss vor dem std objects std:: geschrieben werden. (String, vector, cout etc)
2.  Polymorphie - Oberklasse wird abstrakt, dann muss einen Destruktor implementiert werden. Was für eine Eigenschaft soll er haben? -> Er soll _virtual_ sein, weil: Beispiel:                Vertraege - Gas, Wasser, Elektrizität, Abfallentsorgung. Alle Classen Erben von der Basisklasse Verträge, haben aber unterschiedliche Attributen innerhalb ihrer Objekte. Wenn man mit dem Basisklassenzeiger einen Destruktor aufruft (nicht virtuell) würde er. nur die Attribute löschen die gemeinsam im abstrakten Vertrag sind, aber nicht die zusätzlichen die im z.B. Gasvertrag sind. Virtuelle Destruktoren sorgen dafür dass der richtige Destruktor aufgerufen wird, selbst wenn er nur den default Destruktor aufruft.



---

# 2. Vorlesung

Topic: Einführung
Date: 
Course: Informatik
Class: [[Programmieren II]]

---

# Klassenbeziehungen und UML
- Hier werden die wichtigsten Beziehungen von Objekten untereinander definiert. Diese beziehungen sind programmiersprachenunabhängig und allgemeingültig. <font color=DC143C>Es ist extrem wichtig, sich Gedanken über diese Modellierung zu machen, bevor man anfängt zu Programmieren.</font> Um die Modellierung zu dokumentieren gibt es die _Unified Modeling Language (UML)_ mit der Software-Design mit unterschiedlichem Detailgrad beschrieben werden kann. 
- Die Vererbung und Ihre UML-Darstellung wurde bereits ausführlich beschrieben. Sie beschreibt eine "Ist ein" Beziehung zwischen Klassen. 
![[Pasted image 20230305140412.png | 500]]
- 
## Assoziation
- Beschreibt eine lose Beziehung zwischen zwei Klassen, die keine Vererbung ist. 
- Lassen sich weiter in unterteilen in verschiedene Kategorien.
### Einfache gerichtete Assoziation
- Eine Assoziation ist unidirektional wenn nur in eine Richtung navigiert werden kann. Beispiel: Auftrag enthält Produkt, aber die Information, in welchen Aufträgen Produkt vorkommt, ist nicht enthalten. 
- Der Pfeil gibt die Richtung der Beziehung an. Falls Klasse 2 Klasse 1 nicht kennt (von Klasse 2 nicht zu Klasse 1 navigiert werden kann) wird ein kleines Kreuz an den Pfeil gesetzt. ![[Pasted image 20230305140141.png]]

- In C++ wird eine einfache Assoyiation tzpischerweise durch eine private Yeigervariable auf die Zielklasse repräsentiert:
```cpp
class Klasse1 {
	...
	private: 
	Klasse2* pointerKlasse2;
}
```

### Assoziationen können auch zwischen Objekten der gleichen Klasse modelliert werden. 
**Beispiel:**
![[Pasted image 20230305142447.png]]


### Assoziation mit Multiplizität
![[Pasted image 20230305142654.png]]
 - Bedeutung: Jedes Objekt der Klasse 2 gehört zu genau einem Objekt der Klasse 1. Umgekehrt gehören zu einem Objekt der Klasse 1 beliebig viele Objekte der Klasse 2. Zur Verwaltung der Objekte der jeweils anderen Klassen eignet sich in Klasse1 ein vector und in Klasse2 wieder ein Zeiger.

 - Die Beziehung ist von Klasse 1 zu Klasse 2 navigierbar. 
```cpp
class Abonnent; //Vorwaertsdeklaration aufgrund der gegenseitigen Abhängigkeit

class Zeitung { 
public: 
void addAbonnent(Abonnent* abonnent) { 
abonnenten.push_back(abonnent); 
} 
private: 
vector abonnenten; 
}; 

class Abonnent { 
public: 
void abonnieren(const Zeitung& zeitung) { // const wichtig um Datenkapselung nicht zu zerstoeren
meineZeitung = &zeitung; 
} 
private: 
Zeitung* meineZeitung; 
};
```

Mit dieser Modellierung kann ein Abonnent nur <font color=DC143C>maximal eine Zeitung abonnieren</font>. Wie müsste die Modellierung aussehen, damit jeder Abonnent beliebig viele Zeitungen abonnieren kann? Wie sähe dann das UML Diagramm aus? -> Unter Abonnent einen Vector erzeugen von Typ Zeitungen*;

### Ergänzung zu Assoziationen

- Häufig wird im ersten Designentwurf die Frage der Navigierbarkeit offen gelassen (Keine Pfeilspitze oder Kreuze auf Assoziationensenden). Um die Diagramme lesbarer zu machen, wird häufig eine Assoziationsbeschreibung hinzugefügt, aus der die Richtung der Assoziation klar wird. <font color=FF8C00>**Beispiel:**</font>
![[Pasted image 20230305173050.png]]


## Aggregation
- Eine <font color=DC143C>Aggregation</font> ist eine <font color=DC143C>Teil-Ganzes-Beziehung</font>. Die umsetzung in C++ ist die gleiche wie bei der Assoziation. <font color=FF8C00>**Beispiel und Umsetzung in UML:**</font>
![[Pasted image 20230305173400.png]]

Bei einer Aggregation kann der Teil auch fortbestehen, wenn das Ganze nicht mehr existiert -> in C++ repräsentiert wird der Zeiger der auf das Ganze gerichtet ist auf Null gesetzt.
Mitarbeiter können existieren obwohl Abteilung ausgelöst wird. 

## Komposition
- Die Komposition ist eine engere Beziehung als die Aggregation und ein Spezialfall der Aggregation.
- Eine Komposition aus Objekt 1 und Objekt 2 bedeutet, dass
	- Objekt1 das Objekt2 enthält
	- Wenn Objekt1 gelöscht wird, hört auch Objekt2 auf zu existieren. <font color=FF8C00>**Beispiel und Umsetzung in UML:**</font>
![[Pasted image 20230305173946.png]]
-> Wenn das ganze Unternehmen nicht mehr existiert, gibt es auch keine Abteilung/en mehr.

- Bei der Repräsentation in C++ empfiehlt es sich, keine Zeiger zu verwenden sondern <font color=DC143C>normale Variablen</font>. Damit ist gewährleistet dass die Teile bei der Löschung des Ganzen ebenfalls gelöscht werden. <font color=FF8C00>**Schematisches Beispiel**:</font>

```cpp
class Abteilung; //Forward declaration 
class Unternehmen { 
public: 
Unternehmen(vector<string> abteilungsdaten) { 
//erzeuge Abteilungen 
} 
//... 
private: 
Abteilung abteilung1, abteilung2, abteilung3; 
};

```

## Wiederholung Klassendiagramme:
![[Pasted image 20230305174515.png]]



# Dateiverarbeitung

- Wiederholung PG1: Für das Lesen und Schreiben von Dateien aus Programmen heraus gibt es mehrere offensichtliche Motivationen:
	- Dateien sollen auch nach Beendigung des Programms zur Verfügung stehen..
	- Die Datenmengen sind zu groß um per Benutzereingabe verarbeitet zu werden. 
	- Für den Fall eines unerwarteten Programmabsturzes sollen Sicherheitskopien der Zwischenergebnisse eines Programmes gemacht werden. 
	- Datentransfer zwischen Programmen, die nicht online verbunden sind z.B. aus Sicherheitsgründen.  

## Dateien öffnen
- Alles von PGI was zu Streams beigebracht wurde lässt sich auch auf Dateien anwenden. Um mit Dateien zu arbeiten, müssen wir sie vorher öffnen und am Ende schließen. Dazu dienen die Funktionen <font color=DC143C>open()</font> und <font color=DC143C>close()</font> der Stream-Objekte <font color=DC143C>ifstream</font> und <font color=DC143C>ofstream.</font> Beide Funktionen kommunizieren mit dem Betriebssystem. Die Funktion open() setzt eine <font color=DC143C>Sperre</font> auf der Datei <font color=DC143C>für andere Programme</font>, die Funktion close() schreibt einen eventuell vorhandenen <font color=DC143C>Pufferinhalt</font> in die Datei und <font color=DC143C>gibt</font> die Sperre wieder frei. 
<font color=FF8C00>Beispiel</font>:
![[Pasted image 20230305175759.png]]
- Shadowbild an: es wird erwartet dass die Datei in dem Build Ordner steht.
- Shadowbild aus: es wird erwartet dass die Datei da ist wo die main ist. 
- Wenn man sich das ganze ersparen möchte: vollen Pfad eingeben (aufpassen Betriebssystem abhängig).
### Parameter der Funktion open()

![[Pasted image 20230305190123.png]]



# Wiederholung

- [x] Mehrfachvererbung ergänzen
- [x] Private und protected Vererbung ergänzen
- [x] Übung Slide 59 fertig machen. 
# Fragen für Vorlesung
- Item






## Termine 
| Di | 17.10.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
|----|----------|-----------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Mi | 18.10.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 24.10.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 25.10.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 31.10.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 01.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 07.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 08.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 08.11.23 | P: Programmieren 2 #1 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 14.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 15.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 21.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 22.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 22.11.23 | P: Programmieren 2 #2 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 28.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 29.11.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 05.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 06.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 06.12.23 | P: Programmieren 2 #3 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 12.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 13.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 19.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 20.12.23 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 20.12.23 | P: Programmieren 2 #4 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 16.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 17.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 23.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 24.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 24.01.24 | P: Programmieren 2 #5 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 30.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 31.01.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 06.02.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 07.02.24 | V: Programmieren 2    | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 07.02.24 | P: Programmieren 2 #6 | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Di | 13.02.24 | ? V: Programmieren 2  | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
| Mi | 14.02.24 | ? V: Programmieren 2  | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> | <input type="checkbox" unchecked id="497021"> |
