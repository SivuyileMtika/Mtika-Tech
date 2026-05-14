@echo off
cd /d "c:\Users\Sivuyile Manqumakazi\Documents\project"
git init
git config user.name "Mtikatechnologies"
git config user.email "mtikatech@gmail.com"
git add .
git commit -m "Initial commit: Mtika Technologies portfolio website"
git branch -M main
git remote add origin https://github.com/SivuyileMtika/Mtika-Tech.git
git push -u origin main
