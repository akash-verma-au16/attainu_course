from usa import USA
from india import India
obj_ind = India() 
obj_usa = USA() 
for country in (obj_ind, obj_usa):  # code taking different forms .Output of India as well as USA
    country.capital() 
    country.language() 
    country.type() 