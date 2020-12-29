#!/bin/zsh

vips dzsave "2020.pdf[dpi=600]" 2020 --layout google --centre --suffix .png --background "255 0 0 0"
vips dzsave "2021.pdf[dpi=600]" 2021 --layout google --centre --suffix .png --background "255 0 0 0"