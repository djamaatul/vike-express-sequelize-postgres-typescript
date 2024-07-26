Backend sederhana untuk memenuhi test Dans-multi-pro

requirement tech: 
-	nodejs v20
- postgresql

run command below before start:

```
> npx migrate
```
run command to starting server on development
```
> npx dev
```

build and start
```
> npx build
> npx start
```

FEATURE:

* LOGIN: 

	POST: http://localhost:5001/api/v1/login

* REGISTER

	POST: http://localhost:5001/api/v1/auth/register

* AUTH 

	GET: http://localhost:5001/api/v1/auth

* GET LIST JOBS

	GET: http://localhost:5001/api/v1/jobs?page=1&description=python&location=berlin&full_time=true&search=

* GET DETAIL JOBS

	GET: http://localhost:5001/api/v1/jobs/{ID}


Frontend 

Start
```
> npx dev
```