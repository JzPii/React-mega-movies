#  *Google Simple News*

- Created by: `J`
- View online at: 

`Using React for a movies page`

## Instruction
![](images/instr.gif)



## Code Reviews

This code was reviewed by @username and @otherusername. 

* [Link to PR #X](#) - reviewed by @HasanArmstrong
* [Link to PR #Y](#) - reviewed by @...   


## Required User Stories:

- [x] The user can see the top 20 "Currently Playing" movies on a page.
- [x]  For each movie, the user can see the Movie Title, Year, Rating, and Poster.
- [x]  The user can see this information clearly on devices of various screen sizes.
- [x]  The user can see "more" movies by tapping a "See More" button at the bottom.

### Optional User Stories:

- [x]  The user can enter a term into a search box to filter the currently loaded movies by search term. E.g.; the user can type "mar" and the results are reduced to show "Captain Marvel".
- [ ]  The user can change the "source" from "Currently Playing" movies to "Top Rated" movies (or any other of the endpoints supplied by MovieDB).
- [ ]  Sort by Rating and Popularity (from Lowest to Highest and Vice Versa)
- [ ]  Have Year, Rating as a slider. Change the display dynamically when the slider is changed. You could use React Input Range package for this task.


### Rocket 1: Pagination.

- [ ]  Pagination: Replace the "See More" with a page control, with a previous and next Button at the end. Click it will move user to the next 20 (or previous 20) movies. Remember at first load, the Previous button should be disabled.
- [ ] In addition to Previous and Next, use Number Pagination. Click on Number 3 will get them to Page3 and display movies 61st - 79th.


### Rocket 2: Routing

- [ ] For each movie, include a link (movie/id) to display the full Movie Info on another page (URL). Use React Router for this. You'll also have to figure out how to retrieve the parameters from the URL.


## Time Spent and Lessons Learned

Time spent: **xx** hours spent in total.

```

```

## License

    Copyright [2019] [JzPii]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
