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

# Parallel routes

- we can define with @ symbol
- @left
- @right
- folder structure will be "colorbox\@left\@right
- layout.js inside colorbox folder , we can use this for condional layout rendering

```javascript
export default function ColorBoxLayout({ children, left, right }) {
  const isColor = true;
  return (
    <section>
      {children}
      {isColor ? left : right}
      {/* {left}
      {right} */}
    </section>
  );
}
```

# Layout.js

- we will use layout.js file to define layout like if we want a AdminHeader in all the admin routes then we have to define a layout.js page inside admin folder and we need to pass children and import AdminHeader component

  - folder will be " admin\dashboard\page.jsx"
  - folder will be " admin\profile\page.jsx"
  - folder will be " admin\layout.js"
  - folder will be " components\AdminHeader.jsx"

```javascript
import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
```

# Link tag for navigate to one page to another similar like a anchor tag

- <Link href="/admin/dashboard">Go to Dashboard</Link>
- inside components LearnLinks.jsx and we need to import it on home page.jsx

```javascript
import Link from "next/link";

const LearnLinks = () => {
  const id = 2;
  return (
    <div>
      <Link href="/admin/dashboard">Go to Dashboard</Link>
      // <Link href={`/users/profiles/${id}`}>Go to Dashboard</Link> // for dynamic
      routing
    </div>
  );
};

export default LearnLinks;
```

# useRouter (for navigation)

- This work only in client's pc for that we need to mention "use client" at the top of the page

- import { useRouter } from "next/navigation";

```javascript
import { useRouter } from "next/navigation";
const LearnUseRouter = () => {
  const router = useRouter();
  console.log("router:", router);
  return (
    <>
      <h1>Use Router </h1>
      <button type="button" onClick={() => router.push("/admin/dashboard")}>
        Go to Admin without refresh
      </button>
    </>
  );
};

export default LearnUseRouter;
```

- import this component on the main page

# Server and Client components

- By default they all are server components
- some features we can use only in client side like
- - useState
- - any event
- - useRouter

# When to use Server and Client Components?

- Server Components
- - Fetch data
- - Access backend resources (directly)
- - Keep sensitive information on the server (access tokens, API keys, etc)
- - Keep large dependencies on the server / Reduce client-side JavaScript

- Client Components
- - Add interactivity and event listeners (onClick(), onChange(), etc)
- - Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
- - Use browser-only APIs
- - Use custom hooks that depend on state, effects, or browser-only APIs
- - Use React Class components

# Global CSS

- Global Css we use directly just need to define in globals.css file inside app folder

# Module CSS

- For module css we have to create a css file with extension name "fileName.module.css" and then we have to import it in component and then we can use it as an object

- it will not effect the global css if have same name of class or id

```javascript
import styles from "../app/css/ModuleCssComp.module.css";
const ModuleCssComponent = () => {
  return (
    <div className={styles.fontSize_60}>
      it's Module CSS component for this we have to create a file with extension
      name "fileName.module.css" then import it in component and use as an
      object
    </div>
  );
};

export default ModuleCssComponent;
```

# Images in Next.js

- Images is optimized in Next js

```javascript
import Image from "next/image";
import tom from "../../public/images/tom.jpg";
const LearnImageTag = () => {
  return (
    <div>
      <Image src={tom} width={800} alt="Tom & Jerry" />
      {/* this Image is optimized from next js */}
    </div>
  );
};

export default LearnImageTag;
```

# Form in Next.js

- Form is similar to react , if we need to use hooks like useState or useEffect the we just need to use "use client" at the top of the component and form will be same as in react

# Data Fetching in server side

```javascript
async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
const LearnDataFetching = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p> {item.description} </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default LearnDataFetching;
```
