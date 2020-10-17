# British Wildlife Memory Game

## Code Institute Milestone Project 2

This website is created for educational purposes only.

//![Happy Dogs Responsive](/assets/images/responsivedog.png)    
    
The brief for this second Milestone project was to make a responsive and dynamic website using HTML5, CSS3 and JavaScript. It is the second of four projects as part of the Full Stack Web Development Program at The Code Institute. 
The British Wildlife Memory Game (BWMG) was created first and foremost as a way to fulfil the requirements of this brief. As I already made a website for the first project, I wanted to make a game in order to use a lot of JavaScript. Thus, a pairs matching game seemed like a good option. I previously worked as an Ecologist in the UK, and ecology and conservation still hold a great interest to me. I therefore decided to put my own spin on the pairs matching game by making it an educational game where users can learn more about British wildlife.


[Click here to view the project live.](https://bonniemcb.github.io/MS2-British-Wildlife-Memory-Game/)

## UX (User Experience)

### Goals

#### Basic Goals
In terms of the BWMG, the goal was to:
 - Create a fully-functioning memory game.
 - Upon a match, a modal with a fact about the matched species would pop up.

#### Stretch Goals
With time and resources allowing, other goals were to:
- Allow the user to select between 'Learning mode' and 'Timed mode' 
    * Learning: the species fact modal would appear upon matching
    * Timed: no modals would pop up, but the time it takes the user to beat the game is recorded.
- In Timed mode, the user would be able to enter their name and have their high score logged.
- Choose a difficulty setting where the higher difficulty increases the number of tiles.
- Choose between three categories of wildlife pictures to match.

#### Future ideas for new features
- For the bird category in learning mode, have the modal play a soundfile of the noise the bird makes upon matching a pair.
- Have a collection of different facts in a json file and display a random one upon matching a pair instead of always the same one. This would increase replayability value.


### User Stories

1. As a user, I want to learn more about British wildlife in a fun way.
2. As a user, I want to play a fun and functional memory matching game.
3. As a user, who is competitive, I want to beat the game as fast as possible and see my name in the top rankings.
4. As a wildlife organisation community manager, I am always open to external content that I can repost on social media, as long as the information is correct and the tone is professional.

### Design

I wanted a clean looking website, with fairly simple images and colours for the back and front tiles. Definitely no animations on the tile backs as I have seen on other memory games, as I wanted the images on the front of the tiles to be the focus. 
Initially I had not envisaged a patterened background. Having a one-tone background however, made the pages look either too boring or too garish. I felt a fairly calm pattern and keeping complementary colours gave the pages a decent balance. 

I wanted the memory game to look well put together, but sourcing free to use wildlife photos from the internet would cause an issue in that I would not be able to control the consistency of the images, in terms of resolution, colours, angles, etc. I therefore decided that I should opt for illustrated images rather than photographs. Another benefit of illustrated images instead of photographs is that they are more useful for identification purposes, as the illustrator can highlight the important features of the species.

#### Colour Palette

Colours:
Since the theme of the game is wildlife, green hues are the obvious choice, and is users are likely to associate with wildlife and nature. 

- ![#051f20](https://placehold.it/15/051f20/000000?text=+) #051f20 'Swamp'
- ![#cfcfc4](https://placehold.it/15/cfcfc4/000000?text=+) #cfcfc4 'Pastel gray'
- ![##027412](https://placehold.it/15/027412/000000?text=+) #027412  


#### Typography

I did not want to make any bold statements with the typography, but did want something more unsual for the title, just to make the two pages look a bit more interesting and eye-catching. I therefore chose the Sansita Swashed font. For the rest of the website, I chose the complementary Open Sans font with Sans Serif as the fallback font in case Open Sans does not load correctly.

#### Imagery

I selected illustrated images, for reasons described above. The bird images were taken from the [RSPB website](www.rspb.org.uk).

#### Wireframes

////////I did not create the website fully in a design tool only to then create it again in HTML/CSS. Instead I used design tools to mock up rough versions of my site, including design and colour combinations. Since this was a solo project, and my first website created unaided, I was mindful of spending too much time creating perfectly responsive design mockups. As such, I was happy keeping some information in my head rather than drawing out the exact version of the final website. On collabarative projects, however, I would have a more finalised version of the website in a design tool. 

////////[Wireframes, in Figma](https://www.figma.com/file/hvVtprtZ2O76Y6mLTYofpp/MS1-Dog-Grooming-Website?node-id=0%3A1)

### Features

#### Existing Features

##### Consistent Features across all pages

- Fully centered and responsive.

##### Home

- A brief description of the purpose of the website.
- Two radio button groups where the user can choose the difficulty setting.and the category of wildlife pictures they want to play with. The category buttons apart from the default ‘birds’ have been disabled, as the images and code for the other categories have not yet been implemented. 
- A ‘PLAY’ button takes the user to the game on a separate page.
- The rules of the game are listed. It is assumed that the majority of users know how to play this classic childhood game, and this is therefore positioned at the bottom.
- An eye-catching yet neutral pattern covers the page.

##### Game

- The game-board is always square, and this is controlled by the maximum amount of tiles as set by the three difficulties, eg: //////////////////////////////////////////
- To the side of the game board there are buttons that take the user to the home page, and restart current game.


#### Features To Be Implemented

The following ideas were cut due to time constraints:
- Add the two other categories of wildlife pictures to match.
- 'Timed mode': no modals would pop up, but the time it takes the user to beat the game is recorded.
- In Timed mode, the user would be able to enter their name and have their high score logged.

Future ideas for new features:
- For the bird category in learning mode, have the modal play a soundfile of the noise the bird makes upon matching a pair.
- Have a collection of different facts in a json file and display a random one upon matching a pair instead of always the same one. This would increase replayability value.



## Technologies Used

#### Languages Used
- HTML5
- CSS3
- JavaScript

#### Frameworks, Libraries & Programs Used
    
1. [Gitpod](https://www.gitpod.io/)
    - Gitpod was the environment in which the site was created, using the terminal to commit to Git and Push to GitHub.
2. [jQuery:](https://jquery.com/)
    - jQuery is used extensively in order to make it easier to link to elements in the DOM.
3. [jQuery Modal](jquerymodal.com)
    - This library was used to create the modals for matching tiles and completing the game.
4. [Codepen](https://codepen.io) 
    - Codepen was used as a scratchpad and create smaller bits of work in isolation, such as the modals.
5. [Balsamiq](https://balsamiq.com/)
    -Balsamiq was used to create the wireframes and aid design and layout decisions.
6. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Montserrat' font into the style.css file which is used on all pages throughout the project.
7. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there was no invalid HTML or CSS.

-   [W3C Markup Validator](https://validator.w3.org/) Fully passed, no errors or warnings
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) My CSS has no errors or warnings.
-   [Beautify Tools JavaScript Validator](http://beautifytools.com/javascript-validator.php) My JS had no errors.

### Testing User Stories

#### 1. As a user, I want to learn more about British wildlife in a fun way. and 2. As a user, I want to play a fun and functional memory matching game.
- A fully-functioning memory game is provided where the flipping of the tiles is animated. Two difficulty modes are available, with 16 and 36 tiles, respectively.
- Upon matching a pair of tiles, the user is presented with a modal styled as a little card, which shows a larger picture of the species matched, along with the common name, latin name and a fact.
#### 3. As a user, who is competitive, I want to beat the game as fast as possible and see my name in the top rankings.
- Due to time constraints, this feature was not implemented.
#### 4. As a wildlife organisation community manager, I am always open to external content that I can repost on social media, as long as the information is correct and the tone is professional.
- The clean-looking website is responsive on all screens, with the result being an aesthetically-pleasing and functional site on all screen sizes.


/////////////////////////
### Further Testing

-   The website was tested on Google Chrome, Mozilla Firefox and Microsoft Edge browsers.
-   The website was viewed, using Chrome Developer Tools, on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   No known bugs.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://bonniemcb.github.io/MS2-British-Wildlife-Memory-Game)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://bonniemcb.github.io/MS2-British-Wildlife-Memory-Game)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash or Terminal
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.


Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- Certain blocks of code were taken from various sources on the internet. This includes:
	- ‘Shuffle an array’ JS code taken from:https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    -  CSS flip card with animation taken and modified from: https://3dtransforms.desandro.com/card-flip
- [CSS Tricks](https://css-tricks.com) proved to be an invaluable resource, especially their pages relevant to the grid layout and the width property.
- [Stack Overflow](stackoverflow.com) was a greatly used resource, in particular.


### Content

-   All code was written by the developer.
-   The bird facts were mostly copied without modification, due to time constraints. The majority of the facts have come from [Living with Birds](https://www.livingwithbirds.com/tweetapedia). Additional facts have come from [Twootz](https://twootz.com/), [Soft Schools](https://www.softschools.com/), [Animal Diversity](https://animaldiversity.org/), [Discover Wildlife](https://www.discoverwildlife.com/animal-facts/birds/), [RSPB](https://www.rspb.org.uk/) and [the Wildlife Trusts](https://www.wildlifetrusts.org/).


### Media

Images were used from the following image sharing sites: 

- All bird images were taken from the [Royal Society for the Protection of Birds](https://www.rspb.org.uk/)
- [Card back image](https://thenounproject.com/term/oak-leaf/1882831/) oak leaf by Vectors Market from the Noun Project
- [Repeating background image](https://pixabay.com/illustrations/seamless-pattern-leaves-leaf-floral-5095737/)


### Acknowledgements

-   My Mentor Can Sücüllü for insightful and thoughtful feedback.

-   My partner Ben for invaluable feedback and endless cups of tea.







