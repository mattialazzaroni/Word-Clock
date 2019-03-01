# Word Clock | Diario di lavoro - 20.02.2019
##### Gabriele Alessi, Mattia Lazzaroni, Paolo Weishaupt
### Canobbio, 20.02.2019

## Lavori svolti

Gabriele le prima ora ha fatto la presentazione del secondo progetto. Ora si sta documentando su come eseguire una richiesta HTTP/GET tramite Arduino.
Paolo e Mattia nel frattempo hanno installato l'ambiente di sviluppo Arduino on le librerie e i drivers necessari per il funzionamento del Fishino UNO Rev2. Gabriele si è messo al pari una volta finita la sua presentazione.
Abbiamo configurato il modulo WiFi del Fishino e lo abbiamo testato con lo Sketch FishinoScanNetworks.
Paolo ha configurato e testato lo Sketch FishinoWiFiWebServer.
Gabriele e Mattia si sta documentando su come controllare la striscia Led NeoPixel con Fishino.
Siamo riusciti a collegare la striscia Led all'Arduino e a farla accendere.

|Orario        |Lavoro svolto                 |
|--------------|------------------------------|
|13:15 - 14:45 | Installazione ambiente di sviluppo e configurazione modulo WiFi.|
|15:00 - 15:25 | Configurazione e test Sketch FishinoWifiWebServer |
|15:00 - 16:30 | Collegamento NeoPixel |

##  Problemi riscontrati e soluzioni adottate
- Abbiamo avuto un problema con il funzionamento dello Sketch FishinoScanNetworks. Una volta fatto partire non riusciva a sincronizzarsi con lo slave. Abbaimo risolto premendo il pulsante reset del Fishino e togliendo i cavi precedentemente utilizzati per il flash del Firmware.
- All'inizio la striscia Led NeoPixel non si accendeva completamente e abbiamo pensato che ci fosse un problema con le saldature, ma chiedendo a Mattia, che si stava informando sulla documentazione dei metodi, abbiamo visto che bisognava passargli la quantità di Led da far accendere quindi abbiamo modificato il parametro da 64(default) a 195, il numero effettivo di Led.
##  Punto della situazione rispetto alla pianificazione
In avanti rispetto alla pianificazione.
## Programma di massima per la prossima giornata di lavoro
Dobbiamo far comunicare il Fishino con un server NTP per riuscire a prendere l'orario ed eventualmente mostrarlo su un Display LCD o un sette segmenti. Eventualmente si potrebbe provare a usare lo standard DTC 77 nel caso in cui non si riesca a collegarsi al server NTP.<br>
Dobbiamo capire come sono posizionati i Led e fare un programma per personalizzarne l'accensione.
