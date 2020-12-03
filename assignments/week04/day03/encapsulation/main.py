from animal import Animal
from dog import Dog
if __name__ == "__main__":
    print("Enter your dog's name")
    dog = Dog(input())
    dog.walking()  # Walking inherited from Animal Class 
    # dog._sleeping()  will not be used as coder put _ before its name so outside class animal it should not be called
    dog.barking()
