SCSS-Helpers v0.3.alpha.0.1
=====================
This version is not stable version, for production please use latest: [Stable Version][1].
[1]: https://github.com/paulgabronis/SCSS-Helpers/releases


Using:
SASS 3.3.0.rc.5
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
###Spriting helper global options

Default folder name is icons but you can change it.

```scss
$icons-map: 'icons'
```

Other options

```scss
$retina-sprite: true //bool
$comma-separated: false //bool
```

###Spriting helper usage
Here is a mixin options which you can use while generating sprite images.
Copy **_spriting.scss** to your project directory and **@import** it to your main **.scss** file.
Create two folders in your choosen scss images folder. For example I've created **icons** folder for standard images and **icons@x2** for x2 bigger images for retina screens.
**Make sure that retina images are divisible by 4 or at least 2**. If they are not, this can lead to background position shifting.

In your main **.scss** file create **@include** with options to generate sprite images.
Use $class option to add class name. When use pseudo elements for sprites, class name should be set accordingly.

```scss
@include($class: '&', $name:'image-name') //if adding inside class as a module with $pseudo:true
@include($class: '.class-name', $name:'image-name', $pseudo: false) //if adding as standalone class or selector within a module
```

###Global Settings
options and descriptions coming soon

####Available local options
You can enable hover state, just add image to icons folder and attach **-hover** to your image name.

```scss
$hover: false //bool
```

By default sprite images is enabled for pseudo elements

```scss
$pseudo: true //bool
```

By default I've enabled element size to true which set's width and height to actual source image size if you don't need it for any reason you can set it to false.

```scss
$size: true //bool
```

By default centering is set to false if you need to center your image to x, y or both axis use this options.

```scss
$center: false //bool
$center-y: false //bool
$center-x: false //bool
```
