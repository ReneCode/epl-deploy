#!/bin/bash

if [ $# -lt 2 ]
then
	echo "deploy <git-repository> <cmd>"
	exit
fi

echo deploy $1 $2
 
