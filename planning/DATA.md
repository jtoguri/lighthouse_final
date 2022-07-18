# Data

## Associated with each rental

* The host offering the rental
* The renter 
* Location info
* Date/time
* Rental type (vehicle, trailer, truck, carbed, etc.) / Job classification (i.e. towing, storage, etc.)
* vehicle

```js
  const rental = {
    id: , // rental id
    host_id: , // user who's vehicle is being rented
    renter_id: , // user who is renting the vehicle
    date_time: , // info related to start/end dates and times
    vehicle_id:
    //duration
    //location
  }
```

## User

```js
  const user = {
    id: , // user id
    class: , // either renter or host
    name: ,
    email: ,
    phone: ,
    passwd: ,
    address: 

    //driver's license
    //vehicles is many-to-many relationship would need table to join host and vehicle ids
  }
```

### Host

* name
* verified email
* verified phone
* hashed password/other form of auth
* vehicles
* driver's license and recent photo with clear image of face
* home address
* meet age requirements?
* have valid insurance?
* meet legal and insurance standards and requirements for your region?
* review language of lease or financing documents to confirm permission to list vehicle on car sharing platform

### Renter

## Vehicle
* VIN (or other forms of vehicle identification - potentially specific to trucks, trailers, or other forms of large/transport vehicles)
* description
* images (clear, well-lit, high resolution photos of your vehicle, set minimum amount) 
  * exterior photos from all sides
  * interior photos that show any unique features
  * facility or fleet photos if you’re wish to share that you’re a business operating on the platform
* license plate number
* vehicle make, model, and year

```js
  const vehicle = {
    id: ,
    vin: ,
    description: ,
    images: ,
    license_plate: ,
    make: ,
    model: ,
    year: 
  }
```
