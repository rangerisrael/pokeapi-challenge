## Setup for Pokemon Pagination Challenge

<img style='border-radius:50%' src='./src/assets/poke.png' width='150' height='150'>


## Demo
https://pokemon-challenge-gamma.vercel.app/




## Installation

yarn install (generate node modules) 


## Run dev server

yarn dev



## Run Unit test 

yarn test 


## Run build 

yarn build 






### File structures for component and features

    ├───────────────
    ├── build/dist                   generated by yarn build this is the production file    
    ├── src
    │    ├── assets                 image file              
    │    ├── component     
    │    │     ├── common          commom file that able to use in diffirent component (Header,Button,Modal,Card,constant variable,Image)
    │    │     │     ├── types      list of all type and interface related to the api response                
    │    │     │     ├── utils    hooks and global state for handling api handler 
    │    │     ├── features      (display all pokemon list,paginate pokemon list,display specific item to show specific skill attributes and value)                            
    └─────────App.tsx                  details for all component created 




### Execute tests

 testing are usually placed into the `test` or, less commonly, into the `spec` or `tests` folder.

  .
    ├────────────────────────────
    ├   └──unit-testing                    # Test files (`.test`)
    │   └── test-component         pokemon list item for getting value to test if its response working correctly      
    │   ├── pagination             test related to pagination (previous,show,next)
    │   ├── display all species    test for getting length for pokemon list items
    │   └── dialog                 test for dialog once each card click and make sure the popup dialog show
    │   └── header                 test for getting exact heading,logo and subtitle
    │   └── stats                  test for getting api response for stats attributes and value
    │   └── card                   test to make sure card species component working correctly and return match data
    │   └── api                    test to make sure if its api response return or not
    └────────────────────────────


