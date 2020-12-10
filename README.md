# REACH
REACH system for MATC UTC DOT HAZMAT project

GitHub Documentation


Go to your PyCharm Terminal. You can also use Git-Bash, PowerShell and Command Prompt and then go to your project path.

-->Command to initialize git
 
git init

-->If you want to check all the branches, type command
 
git branch -a
 
-->If you want to see what branch you are in, type command
 
git branch
 
Branch name with asterisk (*) symbol is your current branch. Always confirm, what branch you are in before making any changes.


-->If you want to switch from one branch to another, type command
 
git checkout branch-name you want to switch to


-->If you want to create a new branch, type command
 
git checkout -b branch-name
 
-->This will create a new branch, but you have to push the new branch in GitHub. For that type
 
git push origin branch-name
 
-->Now if you type git branch, you can see that now you have switched from master to your ‘branch-name’. 
   There will be asterisk (*) symbol before your branch-name. And you can also check in GitHub that your branch-name exist now.

-->To check the status of your commit, type command
 
git status

-->Steps you need to follow every time you want to push new changes in your branch
 
Before adding any new changes to your branch, you always need to make sure that your repository is up to date with master. 
So, for that type command:
 
git pull origin master
 
-->git pull command will automatically does a does a git fetch followed by a git merge to update the local repo with the remote repo
 
git add -A .
git commit -m “type your message”
git push origin localBranchName: remoteBranchName


-->Creating a Pull Request

To create a pull request, you must have changes committed to your new branch.
Then, go to the repository page on GitHub. And click on "New Pull Request" button. 

Always set the base branch to master and compare branch will be your branch name.

Finally, click on the green "Send pull request" button to finish creating the pull request.

Once you will send a Pull Request, then I will be able to see an Open Pull Request. Then I will do the merging.

