
## Local Clenaers Frontend

```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Project Structure
frontend/ ├── package.json ├── postcss.config.js ├── public/ │ ├── index.html │ ├── manifest.json │ └── robots.txt ├── README.md ├── src/ │ ├── .env │ ├── App.css │ ├── App.js │ ├── App.test.js │ ├── components/ │ │ ├── Admin/ │ │ ├── Auth/ │ │ ├── Booking/ │ │ ├── Dashboard/ │ │ ├── Landing/ │ │ ├── layout/ │ │ ├── subscription/ │ │ └── ui/ │ │ └── Working/ │ ├── helper/ │ │ ├── Animation.js │ │ ├── ApiCall.js │ │ ├── HandleData.js │ │ └── subscriptionHelper.js │ ├── index.css │ ├── index.js │ ├── pages/ │ │ ├── admin/ │ │ ├── AuthForm.js │ │ ├── booking/ │ │ ├── chats/ │ │ ├── Contact.jsx │ │ ├── Dashboard.jsx │ │ ├── Landing.jsx │ │ ├── PrivacyPolicy.jsx │ │ ├── ProfilePage.jsx │ │ ├── Support.jsx │ │ ├── TermsAndConditions.jsx │ │ ├── TodaysBookingsList.jsx │ │ ├── WorkingPage.jsx │ │ └── ... │ ├── redux/ │ ├── reportWebVitals.js │ ├── setupTests.js │ └── skeletons/ └── tailwind.config.js

------------------------------------------------------------------------------------------------------------------------------------------------------------


## Local Clenaers backend

## API Endpoints

### Users
- **POST** `/users/register`
  **Expected Input:**
    ```json
    {
      "email":"j1lzwjxh@randommail.com",
      "password":"upkaCw*)koG2",
      "firstname":"first_name",
      "lastname":"last_name"
    }
    ```
  **Expected Output:**
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhjZDE3ZjUyOTI1YWVhN2RhZjFlOGYiLCJleHAiOjE3MzczNjgzMTksImlhdCI6MTczNzI4MTkxOX0.Kcod7OURN-ShhSy6Ewi5IpnDY_u2QE-ekurbXDOVrA8",
        "user": {
        "fullname": 
        {
            "firstname": "first_name",
            "lastname": "last_name"
        },
        "email": "j1lzwjxh@randommail.com",
        "password": "$2b$10$ifbX15vS20YwwLVV4BZqkuO178Lmoy6D9vJc22Yn.Co.i3HfLs9om",
        "_id": "678cd17f52925aea7daf1e8f",
        "__v": 0
        }
    }
    ```

- **POST** `/users/login`  
  **Expected Input:**
  ```json
  {
    "email":"j1lzwjxh@randommail.com",
    "password":"upkaCw*)koG2"
  }
  ```
  **Expected Output:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhjZDE3ZjUyOTI1YWVhN2RhZjFlOGYiLCJleHAiOjE3MzczNjg0NDUsImlhdCI6MTczNzI4MjA0NX0.e-6sDxXs7Avvaqi1EPa2c598oryBFFJ_uxk41aMNuIA",
    "user": {
        "fullname": {
            "firstname": "first_name",
            "lastname": "last_name"
        },
        "_id": "678cd17f52925aea7daf1e8f",
        "email": "j1lzwjxh@randommail.com",
        "password": "$2b$10$ifbX15vS20YwwLVV4BZqkuO178Lmoy6D9vJc22Yn.Co.i3HfLs9om",
        "__v": 0
    }
  }
  ```

- **GET** `/users/profile`  
    ```  configurations 
    {
        headers: {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        },
    }
    ```
  **Expected Output:**
  ```json
  {
     "fullname": {
        "firstname": "first_name",
        "lastname": "last_name"
    },
    "_id": "678cd17f52925aea7daf1e8f",
    "email": "j1lzwjxh@randommail.com",
    "__v": 0
  }
  ```

- **GET** `/users/logout`  
  **Expected Configuration:**
   ```configurations
    {
        headers: {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        }
    }
    ```
  **Expected Output:**
  ```json
  {
    "message": "Logout out"
  }
  ```

### Employees
- **POST** `/employes/register`  
  **Expected Input:**
  ```json
  {
     "firstname": "Jane",
    "lastname": "Doe",
    "email": "janedoe@example.com",
    "password": "password123"
  }
  ```
  **Expected Output:**
  ```json
  {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhjZDU1MTUyOTI1YWVhN2RhZjFlOTkiLCJpYXQiOjE3MzcyODI4OTcsImV4cCI6MTczNzYzOTI5N30.9mg-9G0vQOF6Kje2ybGF7OGl3mlDF-9hhBQzuCo2Vt8",
    "employee": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "janedoe@example.com",
        "password": "$2b$10$1Qlc7ROUjAj/P.Y/dXE3TeFWtg82th9o.fA/Rc0LgFMdYTf0TnDrG",
        "status": "unregistered",
        "phoneNumber": "",
        "salary": 0,
        "lastpay": "",
        "role": "employee",
        "paymentReceiveCode": "ABCDEF",
        "_id": "678cd55152925aea7daf1e99",
        "__v": 0
    }
  }
  ```

- **POST** `/employes/login`  
  **Expected Input:**
  ```json
  {
     "email": "janedoe@example.com",
    "password": "password123"
  }
  ```
  **Expected Output:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhjZDU1MTUyOTI1YWVhN2RhZjFlOTkiLCJpYXQiOjE3MzcyODMxNjksImV4cCI6MTczNzYzOTU2OX0.34_r7aevRCCMlxCi59yIxXdglInAb4U907vdH8tCDKw",
    "employee": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
    "_id": "678cd55152925aea7daf1e99",
    "email": "janedoe@example.com",
    "password": "$2b$10$1Qlc7ROUjAj/P.Y/dXE3TeFWtg82th9o.fARc0LgFMdYTf0TnDrG",
    "status": "unregistered",
    "phoneNumber": "",
    "salary": 0,
    "lastpay": "",
    "role": "employee",
    "paymentReceiveCode": "ABCDEF",
    "__v": 0
        }
    }
  ```

- **POST** `/employes/register/profile`
  **Expected Input:**

    ```configurations 
    {
        headers: {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        },
    }
    ```

  ```json
  {
    "address": " 8345 Pine Ct, Fairview, MI 313475",
    "profileImage": "https://example.com/random-image.jpg",
    "experience": 5,
    "phoneNumber": "8454812358"
  }
  ```
  **Expected Output:**
  ```json
  {
      "employes": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "_id": "678cd90e927f78f8d18df07c",
        "email": "janedoe@example.com",
        "status": "active",
        "phoneNumber": "8454812358",
        "salary": 0,
        "lastpay": "",
        "role": "employee",
        "paymentReceiveCode": "ABCDEF",
        "__v": 0,
        "address": " 8345 Pine Ct, Fairview, MI 313475",
        "experience": 5,
        "profileImage": "https://example.com/random-image.jpg"
    }
  }
  ```

- **GET** `/employes/profile`  
    ```  configurations 
    {
        headers: {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        },
    }
    ```
  **Expected Output:**
  ```json
  {
     "employee": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "_id": "678cd90e927f78f8d18df07c",
        "email": "janedoe@example.com",
        "status": "active",
        "phoneNumber": "8454812358",
        "salary": 0,
        "lastpay": "",
        "role": "employee",
        "paymentReceiveCode": "ABCDEF",
        "__v": 0,
        "address": " 8345 Pine Ct, Fairview, MI 313475",
        "experience": 5,
        "profileImage": "https://example.com/random-image.jpg"
    }
  }
  ```

- **GET** `/employes/logout`  
  **Expected Configuration:**
   ```configurations
    {
        headers: {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        }
    }
    ```
  **Expected Output:**
  ```json
  {
    "message": "Logout out"
  }
  ```



- **GET** `/employes/get-employee-list`  
  **Expected Output:**
  ```json
  {
    "employes": [
        {
            "fullname": {
                "firstname": "emp_f_name",
                "lastname": "emp_l_name"
            },
            "_id": "677f958e9705dfe4e8c35b10",
            "email": "admin10@gmail.com",
            "role":"admin"
        },
        {
            "fullname": {
                "firstname": "Jane",
                "lastname": "Doe"
            },
            "_id": "678cd90e927f78f8d18df07c",
            "email": "janedoe@example.com",
             "role":"employee"
        }
        // ....
    ]
  }
  ```



- **POST** `employes/verify-booking-otp`  
    **Expected Input:**

    ```configuration
    headers: 
        {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        } 
    ```

    ```json
    
    {  
        "_id":"6776a63791c8b0e8b79000ce",
        "otp":"292864"
    }
    ```
    **Expected Output:**
    ```json
    {
       "verifyStatus": {
        "verify": false
        }
    }
    ```

- **POST** `employes/complete-Work`  
    **Expected Input:**
     ```configuration
    headers: 
        {
            "Content-type": "application/json",
            Authorization: "bearer ${token}"
        } 
    ```

    ```json
    {
        "_id":"6776a63791c8b0e8b79000ce",
        "otp":"292864"
    }
    ```
    **Expected Output:**
    ```json
    {
     "verifyStatus": {
        "verify": true
    }
    }
    ```

- **POST** `employes/confirm-payment`  
    **Expected Input:**
    
    ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```
    ```json 
    //data
    {
      "requestId":"6776a63791c8b0e8b79000ce",
      "selectedEmployee":"678cd90e927f78f8d18df07c"
    }
    ```
    **Expected Output:**
    ```json
    {
      "booking": {
        "BookingData": {
            "date": "06-01-2025",
            "time": "01:00 PM",
            "location": "vherhi pawar nagar old sangvi Maharastra Pune 411027",
            "lng": null
        },
        "payment": {
            "status": "completed"
        },
        "_id": "6776a63791c8b0e8b79000ce",
        "user": "6762e75da82820e49f1fc1c1",
        "service": "regular",
        "work_status": "ongoing",
        "phoneNumber": "9763172417",
        "__v": 0,
        "employee": "678cd90e927f78f8d18df07c"
        }
    }
    ```

- **GET** `employes/service/availability`  
    **Expected Input:**

    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } ,
        "params":{
            "pincode":"558415"
        }
    }
    ```
    **Expected Output:**
    ```json
    {
      "result": {
        "status": "Unavailable",
        "count": 0,
        "employees": [
            // ...
        ]
    }
    }
    ```

### Images
- **POST** `/image/upload`  
  **Expected Input:**
  ```json
  {
    "image": "base64-encoded-image-data"
  }
  ```
  **Expected Output:**
  ```json
  {
    "success": true,
    "message": "Image uploaded successfully",
    "url": "https://example.com/uploads/image123.jpg"
  }
  ```

### Bookings
- **POST** `/bookings/create`  
  **Expected Input:**
   ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```
  ```json
  {
    "service":"regular",
    "time":"09:00 AM",
    "date":"14-02-2025",
    "address":"jvw wejfewfuwf efjewfuewf fjweoif 6822685",
    "phoneNumber":"7848481948"
   // "ltd":"",
   // "lng":"",
  }
  ```
  **Expected Output:**
  ```json
  {
    "booking": {
        "user": {
            "fullname": {
                "firstname": "first_name",
                "lastname": "last_name"
            },
            "_id": "678cd17f52925aea7daf1e8f",
            "email": "j1lzwjxh@randommail.com",
            "__v": 0
        },
        "service": "regular",
        "BookingData": {
            "date": "15-02-2025",
            "time": "09:00 AM",
            "location": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
            "lng": null
        },
        "work_status": "pending",
        "phoneNumber": "7848481948",
        "payment": {
            "amount": 50,
            "status": "pending"
        },
        "otp": {
            "start_otp": "470852",
            "end_otp": "211096"
        },
        "_id": "678cee1df74865b3e39824f4",
        "__v": 0
    }
  }
  ```

- **GET** `/bookings/user-booking-list`  
  **Expected INPUT:**
   ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```
  **Expected Output:**
  ```json
  {
     "data": [
        {
            "BookingData": {
                "date": "15-02-2025",
                "time": "09:00 AM",
                "location": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
                "lng": null
            },
            "payment": {
                "amount": 50,
                "status": "pending"
            },
            "_id": "678cee1df74865b3e39824f4",
            "user": {
                "fullname": {
                    "firstname": "first_name",
                    "lastname": "last_name"
                },
                "_id": "678cd17f52925aea7daf1e8f",
                "email": "j1lzwjxh@randommail.com",
                "__v": 0
            },
            "service": "regular",
            "work_status": "pending",
            "phoneNumber": "7848481948",
            "__v": 0
        },
        // ...
    ]
  }
  ```

- **POST** `/bookings/accept`  
    **Expected Input:**
    ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```
  
    ```json
    {
      "requestId":"6776a63791c8b0e8b79000ce",
      "selectedEmployee":"678cd90e927f78f8d18df07c"
    }
    ```
    **Expected Output:**
    ```json
    {
      "booking": {
          "BookingData": {
              "date": "06-01-2025",
              "time": "01:00 PM",
              "location": "vherhi pawar nagar old sangvi Maharastra Pune 411027",
              "lng": null
          },
          "payment": {
              "amount": 50,
              "status": "pending"
          },
          "_id": "6776a63791c8b0e8b79000ce",
          "user": "6762e75da82820e49f1fc1c1",
          "service": "regular",
          "work_status": "ongoing",
          "phoneNumber": "9763172417",
          "__v": 0,
          "employee": "678cd90e927f78f8d18df07c"
      }
    }
    ```

- **GET** `/bookings/get-user-booking` 
    
    **Expected Input:**
    //for user
    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } ,
        "params":{
            "_id":"6776a63791c8b0e8b79000ce"
        }
    }
    ```
    **Expected Output:**
    ```json
    {
       "booking": {
        "BookingData": {
            "date": "15-02-2025",
            "time": "09:00 AM",
            "location": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
            "lng": null
        },
        "payment": {
            "amount": 50,
            "status": "pending"
        },
        "_id": "678cee1df74865b3e39824f4",
        "user": "678cd17f52925aea7daf1e8f",
        "service": "regular",
        "work_status": "pending",
        "phoneNumber": "7848481948",
        "__v": 0
    }
    
    }
    ```

- **GET** `/bookings/list-pending` 
    
    **Expected Input:**
    //for Employee
    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // employee token
        } ,
    }
    ```
    **Expected Output:**
    ```json
    {
        "data": [
        {
            "BookingData": {
                "date": "15-02-2025",
                "time": "09:00 AM",
                "location": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
                "lng": null
            },
            "payment": {
                "amount": 50,
                "status": "pending"
            },
            "_id": "678cee1df74865b3e39824f4",
            "user": {
                "fullname": {
                    "firstname": "first_name",
                    "lastname": "last_name"
                },
                "_id": "678cd17f52925aea7daf1e8f",
                "email": "j1lzwjxh@randommail.com",
                "__v": 0
            },
            "service": "regular",
            "work_status": "pending",
            "phoneNumber": "7848481948",
            "__v": 0
        },
        //....
    ] 
    
    }
    ```

- **GET** `/bookings/list-bookings-Employee` 
    
    **Expected Input:**
    //for user
    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // emp token
        } ,
    }
    ```
    **Expected Output:**
    ```json
    {
      "bookings": [
        {
            "BookingData": {
                "date": "06-01-2025",
                "time": "01:00 PM",
                "location": "vherhi pawar nagar old sangvi Maharastra Pune 411027",
                "lng": null
            },
            "payment": {
                "status": "completed"
            },
            "_id": "6776a63791c8b0e8b79000ce",
            "user": {
                "fullname": {
                    "firstname": "Ashish",
                    "lastname": "Alhat"
                },
                "_id": "6762e75da82820e49f1fc1c1",
                "email": "ashishalhat8@gmail.com",
                "__v": 0
            },
            "service": "regular",
            "work_status": "ongoing",
            "phoneNumber": "9763172417",
            "__v": 0,
            "employee": {
                "fullname": {
                    "firstname": "Jane",
                    "lastname": "Doe"
                },
                "_id": "678cd90e927f78f8d18df07c",
                "email": "janedoe@example.com",
                "status": "active",
                "phoneNumber": "8454812358",
                "salary": 0,
                "lastpay": "",
                "role": "employee",
                "paymentReceiveCode": "ABCDEF",
                "__v": 0,
                "address": " 8345 Pine Ct, Fairview, MI 313475",
                "experience": 5,
                "profileImage": "https://example.com/random-image.jpg"
            }
        },
        // ....
    ]
    
    }
    ```

- **GET** `/bookings/get-booking-id` 
    
    **Expected Input:**
    //for user
    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } ,
        "params":{
            "_id":"6776a63791c8b0e8b79000ce"
        }
    }
    ```
    **Expected Output:**
    ```json
    {
      "booking": {
        "BookingData": {
            "date": "06-01-2025",
            "time": "01:00 PM",
            "location": "vherhi pawar nagar old sangvi Maharastra Pune 411027",
            "lng": null
        },
        "payment": {
            "status": "completed"
        },
        "_id": "6776a63791c8b0e8b79000ce",
        "user": {
            "fullname": {
                "firstname": "Ashish",
                "lastname": "Alhat"
            },
            "_id": "6762e75da82820e49f1fc1c1",
            "email": "ashishalhat8@gmail.com"
        },
        "service": "regular",
        "work_status": "ongoing",
        "phoneNumber": "9763172417",
        "__v": 0,
        "employee": {
            "fullname": {
                "firstname": "Jane",
                "lastname": "Doe"
            },
            "_id": "678cd90e927f78f8d18df07c",
            "email": "janedoe@example.com",
            "phoneNumber": "8454812358",
            "profileImage": "https://example.com/random-image.jpg"
        }
    }
    
    }
    ```

- **GET** `/bookings/todays-booking` 
    
    **Expected Input:**
    ```json
    {
       "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } ,
    }
    ```
    **Expected Output:**
    ```json
    {
       "data": []   
    }
    ```

### Plans
- **GET** `/plans`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```

  **Expected Output:**
  ```json
  {
    "plans": [
        {
            "_id": "677b9d8bf0140511522d3cf0",
            "id": "basic",
            "name": "Basic",
            "price": 999,
            "description": "....",
            "features": [
                "...",
                "...",
                "...",
                "...",
               
            ],
            "duration": "day",
            "createdOn": "1736154507288",
            "updateOn": "1736154507288",
            "__v": 0
        },
        // ....
    ]
  }
  ```

-**GET** `/plans/create`  
  **Expected Input:**

  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        } 
    }
    ```
  
    ```json
    {
      "name": "Pro" ,
    "price" : 1999 ,
    "description" : ".....",
    "features" : [
        "..."
        "..."
        "..."
        "..."
    ],
    "duration" : "month"
    }
    ```


  **Expected Output:**
  ```json
  {
    "success": true,
    "data": [
       "name": "Pro" ,
    "price" : 1999 ,
    "description" : "....",
    "features" : [
        "....",
        "....",
        "....",
        "....",
    ],
    "duration" : "month"
    ]
  }
  ```

### Subscriptions
- **POST** `/subscriptions/create`  
  **Expected Input:**
  ```json
  {
     "id":"677b9d8bf0140511522d3cf0",
    "service":"677b9d8bf0140511522d3cf0",
    "email":"j1lzwjxh@randommail.com",
    "start_date":"2025-01-18T09:31:52.396Z",
    "end_date":"2025-03-18T09:31:52.396Z",
    "duration":2,
    "countryCode":"91",
    "address":"jvw wejfewfuwf efjewfuewf fjweoif 6822685",
    "phoneNumber":"7848481948"
   // "ltd":"",
   // "lng":"",
  }
  ```
  **Expected Output:**
  ```json
  {
    "subscription": {
        "user": {
            "fullname": {
                "firstname": "first_name",
                "lastname": "last_name"
            },
            "_id": "678cd17f52925aea7daf1e8f",
            "email": "j1lzwjxh@randommail.com",
            "__v": 0
        },
        "employee": [],
        "contactInfo": {
            "email": "j1lzwjxh@randommail.com",
            "countryCode": "91",
            "phoneNumber": "7848481948"
        },
        "plan": {
            "service": "677b9d8bf0140511522d3cf0",
            "start_date": "2025-01-18T09:31:52.396Z",
            "end_date": "2025-03-18T09:31:52.396Z",
            "duration": "2",
            "address": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
            "lng": null
        },
        "payment": {
            "amount": 2034,
            "method": "cash",
            "status": "pending"
        },
        "progress": "active",
        "_id": "678d1a18c29f0e97d22fc94b",
        "__v": 0
    }
  }
  ```

- **GET** `/subscriptions/list`  
  **Expected Input:**
  ```json
  {
    // user config
  }
  ```
  **Expected Output:**
  ```json
  {
     "sub": [
        {
            "contactInfo": {
                "email": "j1lzwjxh@randommail.com",
                "countryCode": "91",
                "phoneNumber": "7848481948"
            },
            "plan": {
                "service": {
                    "_id": "677b9d8bf0140511522d3cf0",
                    "id": "basic",
                    "name": "Basic",
                    "price": 999,
                    "description": "Ideal for small households or spaces with minimal cleaning needs.",
                    "features": [
                        "1 Service Staff",
                        "6 Days of Regular Cleaning per Month",
                        "Coverage for Small Areas",
                        "Basic Customer Support"
                    ],
                    "duration": "day",
                    "createdOn": "1736154507288",
                    "updateOn": "1736154507288",
                    "__v": 0
                },
                "start_date": "2025-01-18T09:31:52.396Z",
                "end_date": "2025-03-18T09:31:52.396Z",
                "duration": "2",
                "address": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
                "lng": null
            },
            "payment": {
                "amount": 2034,
                "method": "cash",
                "status": "pending"
            },
            "_id": "678d1a18c29f0e97d22fc94b",
            "user": "678cd17f52925aea7daf1e8f",
            "employee": [],
            "progress": "active",
            "__v": 0
        },
        // ....
    ]
  }
  ```

- **GET** `/subscriptions/details`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        },
        "params":{
            "_id":"678d1a18c29f0e97d22fc94b"
        } 
    }
    ```

  **Expected Output:**
  ```json
  {
    "details": {
        "contactInfo": {
            "email": "j1lzwjxh@randommail.com",
            "countryCode": "91",
            "phoneNumber": "7848481948"
        },
        "plan": {
            "service": {
                "_id": "677b9d8bf0140511522d3cf0",
                "id": "basic",
                "name": "Basic",
                "price": 999,
                "description": "Ideal for small households or spaces with minimal cleaning needs.",
                "features": [
                    "...",
                    "...",
                    "...",
                    "...",                  
                ],
                "duration": "day",
                "createdOn": "1736154507288",
                "updateOn": "1736154507288",
                "__v": 0
            },
            "start_date": "2025-01-18T09:31:52.396Z",
            "end_date": "2025-03-18T09:31:52.396Z",
            "duration": "2",
            "address": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
            "lng": null
        },
        "payment": {
            "amount": 2034,
            "method": "cash",
            "status": "pending"
        },
        "_id": "678d1a18c29f0e97d22fc94b",
        "user": "678cd17f52925aea7daf1e8f",
        "employee": [],
        "progress": "active",
        "__v": 0
    }
  }
  ```




### Payment
- **POST** `/payment/send-notification-cash`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // users token
        },
    }

    // data
    {
        "email":"janedoe@example.com",
        "subId":"678a0d59a20951dfc127c396"
    }
    ```

  **Expected Output:**
  ```json
  {
    "success": true
  }
  ```

- **POST** `/payment/subscription/receive-cash-payment`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}"
        },
        "params":{
            "_id":"678d1a18c29f0e97d22fc94b"
        } 
    }

    // data
    { 
        "otp":"508781",
        "subId":"678d1a18c29f0e97d22fc94b",
        "amount":"15181"
    }
    ```

  **Expected Output:**
  ```json
  {
     "subscription": {
        "contactInfo": {
            "email": "j1lzwjxh@randommail.com",
            "countryCode": "91",
            "phoneNumber": "7848481948"
        },
        "plan": {
            "service": "677b9d8bf0140511522d3cf0",
            "start_date": "2025-01-18T09:31:52.396Z",
            "end_date": "2025-03-18T09:31:52.396Z",
            "duration": "2",
            "address": "jvw wejfewfuwf efjewfuewf fjweoif 6822685",
            "lng": null
        },
        "payment": {
            "amount": 15181,
            "method": "cash",
            "status": "completed",
            "transactionId": "TXN-m64qd8pf-O9JUWQEJ"
        },
        "_id": "678d1a18c29f0e97d22fc94b",
        "user": "678cd17f52925aea7daf1e8f",
        "employee": [],
        "progress": "active",
        "__v": 0
    }
  }
  ```

### Admin

- **POST** `/admin/register`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
          //  "Authorization": "bearer ${token}"
        },
       
    }

    // data
    { 
        "email":"admin@randommail.com",
        "password":"admin@123",
        "firstname":"first_admin",
        "lastname":"last_admin",
        "otp":"GDEYKJSU"
    }
    ```

  **Expected Output:**
  ```json
  {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhkZmRlNWYyZDIwY2JlOTk2NTM2ZmQiLCJpYXQiOjE3MzczNTg4MjEsImV4cCI6MTczNzcxNTIyMX0.esv142OFPRIq-yAiJ4DGlJUuZe2hAxQyEim4ap5dGSA",
    "employee": {
        "fullname": {
            "firstname": "first_admin",
            "lastname": "last_admin"
        },
        "email": "admin@randommail.com",
        "password": "$2b$10$uofe3e9P8m8ILoAgKkRH/.wPPBNkMWAe3Mz0B9K8rCvRy0J3n3VBa",
        "status": "active",
        "phoneNumber": "",
        "salary": 0,
        "lastpay": "",
        "role": "admin",
        "paymentReceiveCode": "ABCDEF",
        "_id": "678dfde5f2d20cbe996536fd",
        "__v": 0
    }
  }
  ```


- **POST** `/admin/login`  
  **Expected Input:** 
    ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
          //  "Authorization": "bearer ${token}"
        },
       
    }

    // data
    { 
        "email":"admin@randommail.com",
        "password":"admin@123",
    }
    ```
   **Expected Output:**
    ```json
    {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhkZmRlNWYyZDIwY2JlOTk2NTM2ZmQiLCJpYXQiOjE3MzczNTkxMDYsImV4cCI6MTczNzcxNTUwNn0.9b1neTFPFeUIRQ6h1Pf0h08MLrf16hge3clVR4-4uaY",
    "employee": {
        "fullname": {
            "firstname": "first_admin",
            "lastname": "last_admin"
        },
        "_id": "678dfde5f2d20cbe996536fd",
        "email": "admin@randommail.com",
        "password": "$2b$10$uofe3e9P8m8ILoAgKkRH/.wPPBNkMWAe3Mz0B9K8rCvRy0J3n3VBa",
        "status": "active",
        "phoneNumber": "",
        "salary": 0,
        "lastpay": "",
        "role": "admin",
        "paymentReceiveCode": "ABCDEF",
        "__v": 0
        }
    }
    ```

- **GET** `/admin/profile`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // admin
        },
       
    }
  ```

  **Expected Output:**
  ```json
  {
     "admin": {
        "fullname": {
            "firstname": "first_admin",
            "lastname": "last_admin"
        },
        "_id": "678dfde5f2d20cbe996536fd",
        "email": "admin@randommail.com",
        "status": "active",
        "phoneNumber": "",
        "salary": 0,
        "lastpay": "",
        "role": "admin",
        "paymentReceiveCode": "ABCDEF",
        "__v": 0
    }
  }
  ```

- **GET** `/admin/employees`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // admin
        },
       
    }
    ```

  **Expected Output:**
  ```json
  {
     "employee": [
        {
            "fullname": {
                "firstname": "Jane",
                "lastname": "Doe"
            },
            "_id": "678cd90e927f78f8d18df07c",
            "email": "janedoe@example.com",
            "salary": 0,
            "role": "employee"
        },
        {
            "fullname": {
                "firstname": "first_admin",
                "lastname": "last_admin"
            },
            "_id": "678dfde5f2d20cbe996536fd",
            "email": "admin@randommail.com",
            "salary": 0,
            "role": "admin"
        },
        // ... {  ....  }
    ]
  }
  ```
  
- **GET** `/admin/employee`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
          //  "Authorization": "bearer ${token}"
        },
        "params":{
            "_id":"678cd90e927f78f8d18df07c"
        }
       
    }

    ```

  **Expected Output:**
  ```json
  {
      "employee": [
        {
            "fullname": {
                "firstname": "Jane",
                "lastname": "Doe"
            },
            "_id": "678cd90e927f78f8d18df07c",
            "email": "janedoe@example.com",
            "salary": 0,
            "role": "employee"
        }
    ]
  }
  ```

- **GET** `/admin/users`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
            "Authorization": "bearer ${token}" // admin token
        },
    }

    ```

  **Expected Output:**
  ```json
  {
      "users": [
       
        {
            "fullname": {
                "firstname": "first_name",
                "lastname": "last_name"
            },
            "_id": "678cd17f52925aea7daf1e8f",
            "email": "j1lzwjxh@randommail.com"
        },
        // ... {  }
    ]
  }
  ```

- **GET** `/admin/user`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
          //  "Authorization": "bearer ${token}"
        },
        "params":{
            "_id":"678cd17f52925aea7daf1e8f"
        }
       
    }
    ```

  **Expected Output:**
  ```json
  {
     "user": [
        {
            "fullname": {
                "firstname": "first_name",
                "lastname": "last_name"
            },
            "_id": "678cd17f52925aea7daf1e8f",
            "email": "j1lzwjxh@randommail.com",
            "__v": 0
        }
    ]
  }
  ```

- **GET** `/admin/send-notification`  
  **Expected Input:**

  
  ```json
    // configuration
    { 
        "headers": 
        {
            "Content-type": "application/json",
          //  "Authorization": "bearer ${token}"
        },
       
    }

    // data
    { 
       
    }
    ```

  **Expected Output:**
  ```json
  {
     
  }
  ```

## Error Handling
All endpoints return appropriate HTTP status codes and error messages in case of failures.

## Caching
The plans data is cached in Redis with an expiration time of 3600 seconds. If the data is available in the cache, it is served from there; otherwise, it is fetched from the database and then cached.

## Logging
All errors and important events are logged to the console.

## License
This project is licensed under the MIT License.
```

This format ensures that every endpoint has a clear and consistent description of the expected input and output in JSON. Let me know if you'd like more endpoints detailed!