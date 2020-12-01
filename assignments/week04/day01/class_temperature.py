class Temperature:

    def __init__(self,user_input):
        self.user_input = user_input
    
    def convertFahrenheit(self):
        print(f"Temperatur in Fahrenheit = (Temperature in Celsius * 1.8) + 32 = { self.user_input * 1.8 + 32 } F")
    
    def convertCelsius(self):
        print(f"Temperatur in Celsius = (Temperature in Fahrenheit - 32) / 1.8 = { (self.user_input - 32) / 1.8 } C")