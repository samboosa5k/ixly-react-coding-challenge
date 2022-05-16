## IXLY React Developer Coding Challenge

> #### [Original Repo Link](https://github.com/ixly/react-coding-challenge#readme) `https://github.com/ixly/react-coding-challenge#readme`
>
---

### By: Jasper Verbon

### Github: {https://github.com/samboosa5k}

---

#### Basic Features

1. Used standard ```create-react-app --template typescript```
2. Responsive grid columns as per the assignment
3. Querying the Unsplash API /photos
   - ***( fastfood )***
4. A button to request more photos from the API
    - ***( limit set at 12 )***
5. Clicking a photo opens a centered Lightbox/Modal
   - ***Created with React.Portal***
   - Opens & Closes
   - Triggered through context

> #### Build Commands
>
> Literally the same as for create-react-app
>
> >- `npm run start`

`npm run build` will output this:
```shell
File sizes after gzip:

  64.59 kB  build\static\js\main.422e1940.js
  1.8 kB    build\static\js\787.b4f3be02.chunk.js
  249 B     build\static\css\main.b71e9eef.css
```
---

#### Extra Information

> 
> #### Session storage
> 
> >- Fetches get saved to session storage
> >- If you refresh the page, and you fetched 5 times, 
> >- ...the "Load More" button will trigger loading from the session storage
> 
> #### Project Structure
> - Flat folder structure
> 
> >- `@types` folder - only for globals
> >- `Component` folder 
> >  - ***index.ts***
> >  - ***Component.tsx***
> >  - ***Component.style.tsx***
> >  - ***types.ts*** - only when really necessary
> >  - `Component/SubComponent` 
> >    - Only the Grid component has 1 Nested folder
> >- `Context` folder
> >  - AppContext.tsx  - provides the main state
> >  - AppStateAction.ts - Types of actions you can dispatch
> >  - AppStateReducer.ts - Reducer for the state dispatch actions
> >  - ...
> >

