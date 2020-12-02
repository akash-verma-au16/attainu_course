from user.user import User 
from account.account import Account 

if __name__ == "__main__":
    
    print()
    account = Account(input("Enter Bank Name : "), input("Enter Branch Name : "))

    choice = True
    while True:
        
        print()
        user = User(input("Enter the name of the Account Holder : "))
        print()
        account.addAccount(user.registerUser())

        print()
        choice = input("Press 'Y' to add more Users : ")
        if choice == 'y' or choice == 'Y':
            continue
        else:
            break
        print()
    
    print()
    account.listAllAccounts()
    print()
    account.deleteAccount(input("Enter the name of the account holder whose account you want to delete : "))
    print()
    account.listAllAccounts()
