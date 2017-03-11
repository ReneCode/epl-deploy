
if [ $# -lt 1 ]
then
	echo "run_deploy <git-repository> [cmd=npm deploy]"
	exit
fi

echo "## run_deploy: $*"


# that script is searched in the git-repository
SPECIAL_DEPLOYCMD="deploy.sh"
# that script will be run, if no deploy.sh script if found in the git-repository
DEFAULT_DEPLOYCMD=`pwd`
DEFAULT_DEPLOYCMD+="/default_deploy.sh"

# "https://github.com/ReneCode/epl-translate"
GITREPOURL=$1
# $2 is the deploy command. it is "npm deploy" if not set
#DEPLOYCMD=${2:-"npm run deploy"}
DEPLOYCMD=$2

# get the last part of the url => that is the folder
GITREPO=${GITREPOURL//*\//}
# remove ".git" at the end
GITREPO=${GITREPO//\.*/}



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


# if no deploy command it set than
# take "deploy.sh" in the git-repo (if it is there)
# or take the default_deploy.sh
if [ -z $DEPLOYCMD  ]
then
	if [ -f $SPECIAL_DEPLOYCMD ]
	then
		# the repository has its own deploy.sh
		echo "+++ found"
		DEPLOYCMD=$SPECIAL_DEPLOYCMD
	else
		# use the standard default_deploy.sh
		DEPLOYCMD=$DEFAULT_DEPLOYCMD
	fi
fi

# run deploy command
echo "## $DEPLOYCMD"
$DEPLOYCMD

echo "## ----------------------------"








