#!/bin/zsh

# build pyramid/tileset
vips dzsave "2020.pdf[dpi=600]" 2020 --layout google --centre --suffix ".jpg[Q=90]"
vips dzsave "2021.pdf[dpi=600]" 2021 --layout google --centre --suffix ".jpg[Q=90]"
vips dzsave "2022.pdf[dpi=600]" 2022 --layout google --centre --suffix ".jpg[Q=90]"

# Remove 6th zoom level as its huge and unnecessary
rm -rf 2020/6
rm -rf 2021/6
rm -rf 2022/6