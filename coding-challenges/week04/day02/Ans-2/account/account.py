from bank.bank import Bank 

class Account(Bank):

    def __init__(self, bank_name, bank_branch):
       
        self.accounts_list = []
        super().__init__(bank_name, bank_branch)

    def addAccount(self, account_holder):
        
        self.accounts_list.append(account_holder)
        print()
        print(f"{account_holder['Name']} : Your account has been added to {self.bank_name} bank of {self.bank_branch} branch")
        print(account_holder)

    def deleteAccount(self, account_holder_name):

        for i in self.accounts_list:
            if i['Name'] == account_holder_name:
                self.accounts_list.remove(i)        
        print()        
        print(f"{account_holder_name} : Your account has been deleted")

    def listAllAccounts(self):

        print()
        print(f"The list of accounts in {self.bank_name} are : ")
        print()
        print(self.accounts_list)

    
        
    