from payment import Payment
class CreditCard(Payment):
    def __init__(self, amount):
        super ().__init__(amount)
        self.amount=amount

    def pay(self):
        print("Paying from Credit Card")

    