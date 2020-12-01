class Student:
    
    def __init__(self, name, roll_number):
        self.name = name
        self.roll_number = roll_number
    
    def display(self):
        print(f"Name : {self.name}")
        print(f"Age : {self.age}")
        print(f"Roll Number : {self.roll_number}") 
        print(f"Marks : {self.marks}")
    
    def setAge(self, age):
        self.age = age
    
    def setMarks(self, marks):
        self.marks = marks