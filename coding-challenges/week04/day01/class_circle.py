class Circle:

    def __init__(self, radius):
        self.radius = radius
    
    def circumference(self):
        print(f" Circumference : { 2 * 3.14 * self.radius }")
    
    def area(self):
        print(f" Area : { 3.14 * self.radius ** 2 }")