class Time:

    def __init__(self, hours, minutes):
        self.hours = hours
        self.minutes = minutes

    def addTime(self, time_one, time_two):
        self.hours = time_one.hours + time_two.hours
        self.minutes = time_one.minutes + time_two.minutes

        condition = True
        while condition == True:
            if self.minutes - 60 >= 0:
                self.minutes = self.minutes - 60
                self.hours = self.hours + 1
            else:
                condition = False
      
        self.displayTime()
        print()
        print("The total time in only minutes is => ", end="")
        self.displayMinutes()

    def displayTime(self):
        print(f"{self.hours} hours and {self.minutes} minutes")

    def displayMinutes(self):
        only_minutes = self.hours * 60 + self.minutes
        print(f"{only_minutes} minutes")