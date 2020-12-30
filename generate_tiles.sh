#!/bin/zsh

vips dzsave "2020.pdf[dpi=600]" 2020 --layout google --centre --suffix ".jpg[Q=90]"
vips dzsave "2021.pdf[dpi=600]" 2021 --layout google --centre --suffix ".jpg[Q=90]"