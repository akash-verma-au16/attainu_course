import random

class User():
    
    def __init__(self, account_holder_name):

        self.account_holder = {
            'Name' : account_holder_name,
            'Account Number' : 0,
        }
    
    def registerUser(self):

        self.account_holder['Account Number'] = random.randint(100000, 999999)

        print()
        print(f"{self.account_holder['Name']} has been registered.")
        return self.account_holder