
if [ $# -lt 1 ]
then
	echo "deploy <git-repository> [cmd=npm deploy]"
	exit
fi


TMPDIR="github" 
# "https://github.com/ReneCode/epl-translate"
GITREPOURL=$1
# $2 is the deploy command. it is "npm deploy" if not set
DEPLOYCMD=${2:-"npm run deploy"}

# get the last part of the url => that is the folder
GITREPO=${GITREPOURL//*\//}
# remove ".git" at the end
GITREPO=${GITREPO//\.*/}


# create tmp-folder
if [ ! -d $TMPDIR ]
then
	echo "create $TMPDIR"
	mkdir $TMPDIR
fi
#cd $TMPDIR

# goto root folder
cd ~


# clone or pull the git-repo
if [ ! -d $GITREPO ]
then		
	echo "## git clone : $GITREPO"
	git clone $GITREPOURL
	cd $GITREPO
else
	echo "## git pull : $GITREPO"
	cd $GITREPO
	git pull $GITREPOURL
fi


# run deploy command
echo "## $DEPLOYCMD"
$DEPLOYCMD







