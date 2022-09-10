# 保存所有的修改
echo '执行命令：git add -A\n'
git add -A

# 把修改的文件提交
echo "执行命令：git commit -m 'update gitbook'\n"
git commit -m 'update gitbook' 

# 将本地仓库推送至远程仓库
echo '执行命令：git push origin main\n'
git push origin main

#------------------------------------------------------------
# 更新gitbook
gitbook build .

# 新建gh-pages分支
git checkout --orphan gh-pages

# 删除除了_book的文件
hopt -s extglob
rm -fr !(_book)

# 复制_book的内容
cp -r _book/* .

# git 提交
git add .
git commit -m "Publish book"

# 关联远程分支
git branch --set-upstream-to=origin/gh-pages gh-pages

#推送
git push -f gh-pages

#切回主分支，并删除gh-pages
git checkout main
git branch -D gh-pages

