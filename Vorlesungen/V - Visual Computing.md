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
- Lichtquellen
- Virtuelle Kamera inkl. viewpoint fuer Perspektive
- Sichtbarer Bereich viewing frustum
- Position der Bildebene viewplane
Ziel: Pixel der Viewplane anhand der aufgenommen Szene einfaerben

Die Formed der Objekte in der Szene werden durch 3D Dreiecksgitte gebildet
Dreiecksgitter -> gerenderter Darstelung 2 Möglichkeiten:
1. Rastergrafik
2. Raytracing

### Rastergrafik

1. Eckpunkte des Dreiecks (vertices) auf Pixel der Bildebene (viewplane) abbilden
2. Anhand der Pixel der Eckpunkte des Dreiecks (vertices) die restlichen Dreieckspixel in der Bildebene (viewplane) bestimmen und einfaerben

![[Pasted image 20231026115137.png]]

### Raytracing

Man versucht eine Szene zu rendern durch Sehstrahlen einer virtuellen Kamera. 

![[Pasted image 20231026115342.png]]

## Bildverarbeitung (Analyse)
