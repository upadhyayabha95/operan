# Number Operation Project

This project allows to compute the mean, gcd, or lcm of two numbers via a web interface.

## 📁 Project Structure

```
project-root/
├── docs/                    # Frontend files served via Express
│   ├── index.html           # Web UI with input form
│   ├── script.js            # Client-side JS for fetch() calls
│   └── style.css            # Simple CSS styling

├── render-backend/          # Backend files
│   ├── server.js            # Node.js Express backend server
│   ├── package.json
│   ├── package-lock.json
│   ├── mean                 # ✅ Compiled C program (binary)
│   ├── gcd                  # ✅ Compiled C program (binary)
│   └── lcm                  # ✅ Compiled C program (binary)

├── all-c-programs/          # Source code for C programs
│   ├── mean.c
│   ├── gcd.c
│   └── lcm.c

└── README.md                
```

## How to test it on local machine:-
### Prerequisite 
- Nodejs 
- VSCode 
- LiveServer 

### Setup Instructions

1. Compile the C programs:
   
cd all-c-programs

gcc mean.c -o ../render-backend/mean

gcc gcd.c -o ../render-backend/gcd

gcc lcm.c -o ../render-backend/lcm

3. Run the server:
   
go to the "render-backend" folder and run the following commands:-
  cd ../render-backend

   `npm init -y`
  
   `npm install express cors body-parser`

   `sudo apt update`
   
   `sudo apt install build-essential`
  
   `node server.js`


5. Access the website at:

Double click on index.html in docs folder to access.



