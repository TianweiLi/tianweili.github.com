cd C:\Users\jili\Documents\GitHub\tianweili.github.com\
#更新Blog
echo 开始更新Blog
rake generate
echo "rake generate"
if [ $IsPreview -eq 0 ]
then
   rake deploy
   echo "rake deploy"
else
    echo "rake preview, open webbroswer at the url: localhost:4000"
    rake preview
fi
echo 更新完毕
pause