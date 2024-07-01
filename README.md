<h3 align="center">A Blood Bank Management Application</h3>


## <a name="introduction">🤖 Introduction</a>

A Blood Bank Management System built using the MERN stack is a comprehensive solution that facilitates the management of donor information, blood inventory, blood requests, and transfusion history. It aims to ensure that blood banks can efficiently manage their operations, reduce wastage, and ensure timely availability of blood for patients in need.
## <a name="tech-stack">⚙️ Tech Stack</a>

- Mongodb
- ExpressJS
- ReactJS
- NodeJS
- Axios


## <a name="features">🔋 Features</a>
- Separate dashboards for donors, organizations, hospitals.
- Organizations can create new blood records and they can see all their past records.
- Organizations can have access to see the list of donors and hospitals who donated/consumed blood from organization.
- Donors can see all their donations records and list of hospitals and organizations where they have donated blood.
- Hospitals can see how much quantity of blood they have consumed from different organizations with all the details.
- Email notification system for emergency blood needs.
- Payment gateway which allows users to donate money to ogranizations.



## <a name="screenshots">🔋 Screenshots</a>
### Login Page

![](screenshots/Screenshot%202024-06-30%20202208.png)

### Dashboard
![](screenshots/Screenshot%202024-06-30%20212716.png)

### Camp Page
![](screenshots/Screenshot%202024-06-30%20212607.png)

### Blood Analytics Page
![](screenshots/Screenshot%202024-06-30%20212633.png)

### Fund Raise Page
![](screenshots/Screenshot%202024-06-30%20212230.png)


## <a name="installation">🔋 Installation</a>
```bash
git clone https://github.com/Yuvraj-varshney/BloodStreamX
npm install
```

### Setup Environment Variables
Create a .env file in the root directory and add the following variables:

```bash
PORT #port number for server

MONGO_URL # Mongodb URL
JWT_SECRET # Token Secret Key
API_KEY # API Key For SendGrid
CLIENT_ID # Your Paypal ID
CLIENT_SECRET # Your Client Secret KEY 


```


### Setup Client
```bash
cd client
npm install
npm start
```
### Setup Server
```bash
cd ..
npm install
npm run server
```








