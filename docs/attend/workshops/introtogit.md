# Introduction to Git

Here we will explain how to get started with Git so that you can work collaboratively on code at the hackathon.

## What do I need?

There are two main things you need:

1 - [Git](https://git-scm.com/downloads)

2 - [GitHub Account](https://github.com/) (This can be substituted for others such as [GitLab](https://about.gitlab.com/) or [BitBucket](https://bitbucket.org/product))

If you're on windows you can either use the Github GUI application or Git command line version. As the command line version is global across Windows, Linux and Mac we will describe that here.

_Note for Mac Users: Git comes pre-installed, however it maybe installed with a previous version, instead of the current version_

Lots of Integrated development environments (IDE's) like [Atom](https://atom.io/) and [VS Code](https://code.visualstudio.com/) have their own inbuilt GUI systems for Git integration. These are again out of scope here for now.

## Creating a  *Repository*

### Repository Name
After logging into GitHub you can create a new repository by clicking the + symbol at the top right.
You should be presented with a form like screen asking for a repository name, if you already have your hack idea name you can enter it here or if not you could use the hackathon name (aka "HackSheffield 5"). These names don't need to be globally unique but must be different to any repository you've made before.

### Description
Enter in a short description of your hack here if you have one, this will be shown at the header of your repository and can be changed at any time so don't worry about not putting one in yet.

### Public/Private
You now have infinite Public and Private repositories, a public repository can be seen by anyone whilst a private repository is just for you. Public repositories still require collaborators or pull requests to be changed by other people.

### Initialise
We will be creating the repository from scratch so no need for any of these settings to be changed. A file named "README.md" will be displayed at the front page of your repository and therefore can be used as a manual or title page. A .gitignore file can be used to select certain files in your repository to never commit such as files with passwords in. Licenses can be used to explain to a user what the can and can't do with your code.

### Click Create
Now click create and you have made a repository!

## Linking your project to GitHub
With a repository now on github we can link this to a local folder. 


### Create a local project folder
First make a folder either using folder explorer or finder etc... or using the terminal/cmd/console you can use the command `cd` to change directory (aka `cd Desktop`) and then using `mkdir` (aka `mkdir HS5`) to create the folder. You'll need to then `cd` into that folder again (aka `cd HS5`).

### Initialise local folder
We now need to tell git that this is where our repository lives. We intitalise this by using the command `git init` after `cd`ing to our folder.

### First commit
#### Add
To begin we will make a README.md file in our new git repository, you can do this using notepad or in console using vim/emacs/nano,  the fastest method is to echo directly into the file using `echo "# testRepository" >> README.md`. We can then tell git we want to add these changes using `git add README.md` or if you'd like to add all files in the folder `git add .`. 
#### Commit
These additions then need to be boxed into a commit using `git commit -m "First commit"`, here the -m stands for message and "First commit"is what these changes will be labeled as in GitHub.
#### Remote
Currently our folder doesn't know which repository to send this to and so we have to link the folder to our repository, int GitHub you should find the repository remote at the top labelled "Quick setup". Take the link shown there (Best to start with HTTPS) and type `git remote add origin` followed by the link (aka `git remote add origin https://github.com/Hammie217/firstRepository.git`). You should only ever need to run this command at setup of a repository.
#### Push
Now git know what we want to commit and where to all we have to do is push or commits to GitHub, we do this using `git push origin master`. Telling git we want to push our origin to the master branch.

### Voila
You should now be able to see your code in GitHub after you refresh the page!

## Add collaborators 
Collaborators can be added in: Settings -> Collaborators.

Where you should be able to search for their GitHub accounts.

## Later commits
To add more things to the repository there are three things you need to follow:
```
git add .
git commit -m "Message"
git push origin master
```

## Medium Git
### Merge conflicts
Merge conflicts happen when two people try to change the same file lines resulting in conflicting code. To fix these one contributor needs to act to mediate these conflicts to choose which code should stay and what is un-needed.

Many IDEs (definitely [Atom](https://atom.io/) and [VS Code](https://code.visualstudio.com/)) have inbuilt systems to help deal with merge conflicts.

#### Status
The best thing to do first is to find out where the issues are, the best method of doing this is `git status`. Most of the time you will see `Both modified` next to a file name, sometimes a file may have been deleted in another branch.

#### Resolving
The easiest method is to use an IDE, start by finding the offending file(s), in [Atom](https://atom.io/) and [VS Code](https://code.visualstudio.com/) the sections of code will be highlighted with buttons to select local or remote or both changes to be kept. Use your best intuition to change the code to what is best. 

##### Uh Oh
In the case you've messed up the merge conflicts and things don't work you can abort the merge at any point to return to the pre-merged state  using `git merge --abort`

#### Pushing
After the code is working as desired a normal commit cycle of add, commit and push will send the merged file to GitHub.

### Branching
#### Creating a branch
`git checkout -b "BranchName"`
### Push
`git push origin BranchName`

#### Merge
```
git checkout master
git merge BranchName
```

### Pull requests
#### Fork
Fork the repository you want to Pull Request using GitHub *Fork* button at the top right of the repository.
Clone the repository to your PC using `git clone RepositoryLink` where the Repository link is the link found in your forked repository clone button.
#### Branch
Create a branch using `git checkout -b "BranchName"`
#### Push changes
```
git add .
git commit -m "Message"
git push origin BranchName
```
#### Pull Request
On the repository you would like to accept your PR you should see a green banner with a button exclaiming change. Follow the pull request section until you enter your code for a review. 

Your code may be accepted or asked for changes depending on if your code meets the requirements. Simply make the changes and commit again, you may however be required to request a review from your previous reviewer.

## Advanced Git

Make a Pull Request and contribute!
