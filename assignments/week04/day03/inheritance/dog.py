from animal import Animal
class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
        self.name = name
        
    def barking(self):
        print(f"{self.name} is barking")

