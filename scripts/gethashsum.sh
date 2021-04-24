#!/usr/bin/env bash

set -e

fname=$1
shasum="$(sha3sum -a 512 "$fname" | awk '{ print $1 }')"
length=${#shasum}
midpoint=$((length / 2))
first=${shasum:0:$midpoint}
second=${shasum:$midpoint:$midpoint}

echo "Put the output below as an input to the EventWriter contract:"
echo "[0x$first,0x$second]"
