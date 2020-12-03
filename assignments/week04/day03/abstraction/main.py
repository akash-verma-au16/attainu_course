from payment import Payment
from cod import COD
from credit_card import CreditCard
if __name__ == "__main__":
    cod = COD(1000)
    cod.make_payment()  # amount is passed automatically we dont need to see to that again and again we can ignore that part
