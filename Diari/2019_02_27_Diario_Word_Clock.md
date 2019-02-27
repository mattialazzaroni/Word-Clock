# Word Clock | Diario di lavoro - 27.02.2019
##### Gabriele Alessi, Mattia Lazzaroni, Paolo Weishaupt
### Canobbio, 27.02.2019

## Lavori svolti
Mattia oggi ha aggiornato il file Appunti.md e il capitolo 7.2 della documentazione.
Gabriele ha lavorato sulla striscia di Led per cercare malfunzionamenti e provare a controllare i singoli Led.
Paolo ha provato a collegarsi ad un server NTP per ricevere l'orario e lo ha fatto stampare sul monitor seriale.

|Orario        |Lavoro svolto                 |
|--------------|------------------------------|
|13:15 - 16:30 | Progettazione |

##  Problemi riscontrati e soluzioni adottate
Abbiamo scoperto che per definire il colore non va bene usare il tipo di variabile int, ma bisogna usare uint32_t perchè sennò i colori verde e rosso non funzionano.

void loop() {
  // Some example procedures showing how to display to the pixels:
  colorWipe(strip.Color(255, 0, 0), 5); // Red
  colorWipe(strip.Color(0, 255, 0), 5); // Green
  colorWipe(strip.Color(0, 0, 255), 5); // Blue
}

void colorWipe(uint32_t c, int wait) {
  for(int i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}
##  Punto della situazione rispetto alla pianificazione
In linea con la pianificazione.
## Programma di massima per la prossima giornata di lavoro
Provare a usare Fishino con NeoPixel.
