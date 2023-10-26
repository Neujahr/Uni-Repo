








## Inhalte der Vorlesung

### ComputerGrafik(OpenGL) und C++

1. Graphische Programmierung (OpenGLv3.3+)
2. Koordinatensysteme
3. Visualisierungstechniken
4. Geometrische Transformationen

### Bildverarbeitung (OpenCV in Python)

1. Bildverarbeitung (Bild heller machen etc.)
2. Bildverarbeitung (Infos aus einem Bild extrahieren)
3. Kompressionsverfahren bspw. JPEG
4. Farbmodelle

![[Pasted image 20231026114249.png]]


## Einführung in die Computergrafik

Modellierung des Bildinhaltes
- 3D Geometrien
- Lichtqüllen
- Virtülle Kamera inkl. viewpoint für Perspektive
- Sichtbarer Bereich viewing frustum
- Position der Bildebene viewplane
Ziel: Pixel der Viewplane anhand der aufgenommen Szene einfärben

Die Formed der Objekte in der Szene werden durch 3D Dreiecksgitte gebildet
Dreiecksgitter -> gerenderter Darstelung 2 Möglichkeiten:
1. Rastergrafik
2. Raytracing

### Rastergrafik

1. Eckpunkte des Dreiecks (vertices) auf Pixel der Bildebene (viewplane) abbilden
2. Anhand der Pixel der Eckpunkte des Dreiecks (vertices) die restlichen Dreieckspixel in der Bildebene (viewplane) bestimmen und einfärben

![[Pasted image 20231026115137.png]]

### Raytracing

Man versucht eine Szene zu rendern durch Sehstrahlen einer virtüllen Kamera. 

![[Pasted image 20231026115342.png]]

## Bildverarbeitung (Analyse)

Bilder durch Faltungsmatrizen (Convolutions) zu analysieren
#todo 
- [ ] Faltungsmatrizen (Convolutions) verstehen

Mit Faltungsmatrizen <FONT COLOR="#ffa500"><b>kann man Bilder analysieren:</b></FONT>
![[Pasted image 20231026120742.png]]

Mit einem Netzwerk aus Faltungsmatrizen (Convolutional Neural Networks) kann man komplexe objekte im Bild oder video erkennen
Das funktioniert auch (teilweise) für 3D-Objekte.
Durch die Faltungsschichten werden die Eingabebilder schrittweise in eine abstrakte Beschreibung überführt. Aehnliche Bilder haben ähnliche Beschreibungen.


## Graphische Objekte

Erzeugung graphischer Objekte: Alle Objekte bestehen aus Punkten, die mit Kanten zu Dreiecken gebildet werden. 

**Kartesische Koordinatensysteme**: 
![[Pasted image 20231026121706.png]]

#### Primitive und Objekte
OpenGL verbindet die Punkte zu bestimmten Primitiven (made up of one or more vertices)

<FONT COLOR="#ffa500"><b>Wie kann man die Primitive im lokalen Koordinatensystem "manipulieren", um einen Pinguin zu konstruieren?</b></FONT>

Mann kann sie:
- verschieben (<FONT COLOR="#ff0000">translieren</FONT>)
- drehen (<FONT COLOR="#ff0000">rotieren</FONT>)
- vergrößern und verkleinern (<FONT COLOR="#ff0000">skalieren</FONT>)
Diese Manipulationen nennt man <FONT COLOR="#ff0000">Transformationen</FONT>

### Transformationen: der Szenengraph

Der Szenengraph besteht aus mindestens 3 Knotetypen:
1. Gruppen
2. Geometrien (inkl. Materialegenschaften)
3. Transformationen
Er dient zur Verwaltung einer komplexen Szene:
- Gruppierung von Geometrien zu Gruppen
- Gruppierung von Gruppen zu Gruppen
- Gruppierung von Gruppen zu einer Szene