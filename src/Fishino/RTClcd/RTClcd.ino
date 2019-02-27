#include <Wire.h> //libreria per interfacciare i2c e rtc
#include "RTClib.h" //libreria rtc
#include <LiquidCrystal_I2C.h>  //libreria display i2c 

//////////////////////addr, en,rw,rs,d4,d5,d6,d7,bl, blpol 
LiquidCrystal_I2C lcd(0x27, 16, 2); //impostazione indirizzo del display e pin del display LCD collegati all'i2c

RTC_DS1307 rtc; //nome rtc
//array nomi giorni
char daysOfTheWeek[7][12] = {"Dom.", "Lun.", "Mar.", "Mer.", "Gio.", "Ven.", "Sab."}; 

void setup () {
  Serial.begin(115200); //inizializzazione serial monitor
  lcd.begin(16,2); //inizializzazione lcd
  if (! rtc.begin()) { //verifico la presenza dell'RTC
    Serial.println("Impossibile trovare RTC");
    while (1);
  }

  if (! rtc.isrunning()) { //verifico funzionamento dell'RTC
    Serial.println("RTC non è in funzione!");
    //inserisce l'orario del computer durante la compilazione
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
    // Se vuoi un orario personalizzato, togli il commento alla riga successiva
    // l'orario: ANNO, MESE, GIORNI, ORA, MINUTI, SECONDI
    //rtc.adjust(DateTime(2014, 1, 21, 3, 0, 0));
  }

}

void loop () {
    DateTime now = rtc.now(); //creo istanza ora/data
    Serial.print(now.year(), DEC); //stampo anno in decimale
    Serial.print('/');
    Serial.print(now.month(), DEC); //stampo mese in decimale
    Serial.print('/');
    Serial.print(now.day(), DEC); //stampo giorno in decimale
    Serial.print(" (");
    Serial.print(daysOfTheWeek[now.dayOfTheWeek()]); //stampo nome giorno
    Serial.print(") ");
    Serial.print(now.hour(), DEC); //stampo ora in decimale
    Serial.print(':');
    Serial.print(now.minute(), DEC); //stampo minuto in decimale
    Serial.print(':');
    Serial.print(now.second(), DEC); //stampo secondi in decimale
    Serial.println();
    lcd.init();
    lcd.backlight();
    lcd.clear(); //pulisce lo schermo
    lcd.setCursor(0,0); //imposta il cursore nella prima riga e colonna,  
    lcd.print(now.day(), DEC);     //stampo giorno numero in decimale
    lcd.print('/');
    lcd.print(now.month(), DEC); //stampo mese in decimale
    lcd.print('/');
    lcd.print(now.year(), DEC); //stampo anno in decimale
    lcd.print(' ');
    lcd.print(daysOfTheWeek[now.dayOfTheWeek()]);
    lcd.setCursor(0,1); //imposta il cursore nella seconda riga e prima colonna.
    //stampo orario in decimale
    lcd.print(now.hour(), DEC);
    lcd.print(':');
    lcd.print(now.minute(), DEC);
    lcd.print(':');
    lcd.print(now.second(), DEC);
    delay(1000);
    /* //rimuovi questo commento se vuoi...
    Serial.print(" since midnight 1/1/1970 = "); //..sapere quanti secondi sono passati da questa data
    Serial.print(now.unixtime());
    Serial.print("s = ");
    Serial.print(now.unixtime() / 86400L); //.. sapere i giorni passati dal 1/1/1970
    Serial.println("d");
    
    // calculate a date which is 7 days and 30 seconds into the future
    DateTime future (now + TimeSpan(7,12,30,6)); //imposta quanto deve andare nel futuro
    //imposta una data/ora del futuro:
    Serial.print(" now + 7d + 30s: ");
    Serial.print(future.year(), DEC);
    Serial.print('/');
    Serial.print(future.month(), DEC);
    Serial.print('/');
    Serial.print(future.day(), DEC);
    Serial.print(' ');
    Serial.print(future.hour(), DEC);
    Serial.print(':');
    Serial.print(future.minute(), DEC);
    Serial.print(':');
    Serial.print(future.second(), DEC);
    Serial.println();
    
    Serial.println();
    delay(3000);
    */
}
