/* SilverCabs is a taxi booking service that allows users to book taxis from their mobile app.

As a NoSQL Database Administrator, you have to design Models and Queries for the below requirement for CRUD operations.

Requirements
Store information of users and drivers.
Users and Drivers can rate themselves on a scale of 1-5.
System should be able to handle multiple types of cabs in the model.
Users can request cabs based on different categories.
Users when requesting a cab should get list of drivers within the range of 5kms.
User information should have
a. Saved Addresses
b. Default Address
c. Mobile Phone number
d. Email
e. Firstname and Lastname
f. Rating
g. Rides Takens ( Add some dummy data )
h. Photograph
Driver information should have
a. Saved Addresses
b. Default Address
c. Mobile Phone number
d. Email
e. Firstname and Lastname
f. Rating
g. Photograph
h. Vehicle Number (can own multiple vehicles)
i. Trips
j. Current Geolocation
*/
use silvercabs;
show dbs 
db.createCollection('users');
show collections
db.users.insertMany([
    {
    'saved_address':[{'Building no': 'E2',
    'area': 'vartak Nagar',
    'city': 'Thane','state':'Maharashtra','pincode':'461004'
    }], 
    'default_address':[{'Building no':'A2',
     'area':'Manpada',
     'city':'Vashi','state':'Maharashtra','pincode':'461002'
    }],
    'mobile_no.':'9847564901',
    'Email':'abs@gmail.com',
    'first_name':'suresh',
    'last_name':'sharma',
    'Rating':'4',
    'rides_taken':[{"pickup_location":"45-B vasanth vihar",
    "drop_location":"world trade park",
    "rating":5,
    "vehicle_number":"Mh242995",
    "driver_name":"abc"}],
    "geolocation":[{'latitude': '28.6145391',
        'longitude': '79.2090212'}]
},
{
    'saved_address':[{'Building no': 'Ab1',
    'area': 'bidholi',
    'city': 'Vellure','state':'Tamilnadu','pincode':'345632'
    }], 
    'default_address':[{'Building no':'Ac2',
     'area':'bhiyor',
     'city':'vellure','state':'Tamilnadu','pincode':'345632'
    }],
    'mobile_no.':'6767676799',
    'Email':'abc@gmail.com',
    'first_name':'rajitha',
    'last_name':'chinnamma',
    'Rating':'3.5',
    'rides_taken':[{"pickup_location":"ad 5 corner place",
    "drop_location":"city mall",
    "rating":4.3,
    "vehicle_number":"Tn876543",
    "driver_name":"efg"}],
    "geolocation":[{'latitude': '16.6145391',
        'longitude': '65.2090212'}] 
},
{
    'saved_address':[{'Building no': 'A56',
    'area': 'rajawada',
    'city': 'Indore','state':'Madhyapradesh','pincode':'435678'
    }], 
    'default_address':[{'Building no':'B4',
     'area':'Padmavati colony',
     'city':'Bhopal','state':'Madhyapradesh','pincode':'435623'
    }],
    'mobile_no.':'8976543234',
    'Email':'xyz@gmail.com',
    'first_name':'sonam',
    'last_name':'jain',
    'Rating':'4.5',
    'rides_taken':[{"pickup_location":"a5 param colony",
    "drop_location":"Station",
    "rating":4.6,
    "vehicle_number":"Mp786589",
    "driver_name":"hij"}],
    "geolocation":[{'latitude': '20.6145391',
        'longitude': '45.2090212'}] 
}
])
