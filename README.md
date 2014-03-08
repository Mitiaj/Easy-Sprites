SCSS-Helpers v0.3.beta.2
=====================
This version is not stable version, for production please use latest: [Stable Version][1].
[1]: https://github.com/paulgabronis/SCSS-Helpers/releases

[![Build Status](https://travis-ci.org/paulgabronis/SCSS-Helpers.png?branch=master)](https://travis-ci.org/paulgabronis/SCSS-Helpers)

Using:
SASS 3.3.0
COMPASS 1.0.0.alpha18

###Config.rb
While using this helper to generate sprite images configuration options should be aplied to your **config.rb** file (change path's to match your project).

```ruby
css_dir = "/Content/Styles"
sass_dir = "scss"
images_dir = "/Content/Styles/images"
sprite_load_path = "scss/images"
relative_assets = true
sprite_engine = :chunky_png
chunky_png_options = :best_compression
```
###Global options

Default folder name is icons but you can change it (if using retina images don't forget to create **icons@x2** folder).

```scss
$icons-map: 'icons'
$retina-sprite: null //bool
$comma-separated: true //bool
```

###Spriting helper usage
Copy **_spriting.scss** to your project directory and **@import** it to your main **.scss** file.
Create two folders in your choosen scss images folder. For example I've created **icons** folder for standard images and **icons@x2** for x2 bigger images for retina screens.
**Make sure that retina images are divisible by 4 or at least 2**. If they are not, this can lead to background position shifting.

In your main **.scss** file add **@include** directive with choosen options to generate sprite images.
$class and $name options is nessesary. When use pseudo classes for sprites, class name should be **'&'**.

###Local options which can be used while generating sprite images.
```scss
@include sprites($class: '&', $name:'icon-name') //if adding inside class as a module with $pseudo:true
@include sprites($class: '.class-name', $name:'icon-name', $pseudo: false) //if adding as standalone class or selector within a module
@include sprites-states($name:'active-icon') //add this mixin into sprite class if you need any additional states for your icons i.e. active, opened etc...
```
if additional states needs to be added your code should look like this:
```scss
@include sprites($class: '.my-class', $name:'icon-name'){
  &.active{
    @include sprites-states($name:'active-icon')
  }
}
```

You can enable hover state, just add image to icons folder and attach **-hover** to your image name.

```scss
$hover: false //bool
```

By default sprite images is enabled for pseudo elements

```scss
$pseudo: true //bool
```

By default element size is set to true it applies width and height from actual source image, if you don't need them for any reason you can set it to false.

```scss
$size: true //bool
```

By default centering is set to false if you need to center your image to x, y or both axis use one of these options.

```scss
$center: false //bool
$center-y: false //bool
$center-x: false //bool
```
