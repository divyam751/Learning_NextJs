# Learning_NextJs

```javaScript
npx create-next-app@latest
```

- by default they all will be server side components
- console.log() also show in terminal not on browser's console
-

# Routes

- Folder wise and inside folder there will be one "page.jsx" which will be shown when url will be hit.
- Can use nested folder for nested routes for eg. localhost:3000/users/settings

# root group =>

- localhost:3000/course/java => will show java-> page.jsx
- localhost:3000/course => will show error 404

- we can use (course)\java in folder structure ==> now we can access => localhost:3000/java
- we can use (course)\python in folder structure ==> now we can access => localhost:3000/python

# Dynamic routes = >

- for Id or it will show same page with different end points just need to use [ ] in folder structure

- http://localhost:3000/users/profiles/1
- http://localhost:3000/users/profiles/2
- http://localhost:3000/users/profiles/xyz

- These all show same page

- folder structure = > users\profiles\[id]
- "id" will be the key

```javascript
const ProfilebyId = ({ params }) => {
  console.log(params);
  return (
    <div className="container">
      <h1>Profile based on ID {params.id} </h1>
    </div>
  );
};

export default ProfilebyId;
```

# Catch all routes

- with simple folder structure "blogs\post" it will give 404 http://localhost:3000/blogs/post/learn-java

- by using "blogs\[...post] " now it will catch all routes and if we console params it will give us an array of it's endpoints

```javascript
const post = ({ params }) => {
  console.log(params);
  return (
    <div className="container">
      <h1>Post without catch all routes</h1>
    </div>
  );
};

export default post;
```

- in console it will show `{ post: [ 'post', 'learn-java', 'python' ] }`

- we can make it optional like we dont need to write blogs/post/.../..
- we have to use "[[...post]]" double square brackets then we can directly hit end point for eg. http://localhost:3000/blogs/learn-java

- end point hit => http://localhost:3000/blogs/post/learing-next/pointers
- output we got in console { posts: [ 'post', 'learing-next', 'pointers' ] }

```javascript
const post = ({ params }) => {
  console.log(params);
  return (
    <div className="container">
      <h1>Post without catch all routes</h1>
    </div>
  );
};

export default post;
```

last updated up to 40 min
