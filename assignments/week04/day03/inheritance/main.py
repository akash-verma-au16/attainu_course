from animal import Animal
from dog import Dog
if __name__ == "__main__":
    print("Enter your dog's name")
    dog = Dog(input())
    dog.walking()  # Walking inherited from Animal Class
    dog.sleeping()  # Sleeping inherited from Animal Class
    dog.barking()
