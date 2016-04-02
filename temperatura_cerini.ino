#include <dht.h>

dht DHT;

#define DHT11_PIN 15

void setup(){
  Serial.begin(9600);
  Serial.println("Humidity,\tTemperature");
  
  pinMode(DHT11_PIN, OUTPUT);
}

void loop(){

  int chk = DHT.read11(DHT11_PIN);
  Serial.println((String)DHT.humidity+"%\t\t"+DHT.temperature+"C");  
  delay(2000);
}
