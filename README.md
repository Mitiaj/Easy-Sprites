SCSS-Helpers v0.1
=====================

SCSS helpers for SASS/Compass

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

###Spriting helper usage
Here is a mixin options which you can use while generating sprite images.
Copy **_spriting.scss** to your project directory and **@import** it to your main **.scss** file.
Create two folders in your choosen scss images folder. For example I've created **icons** folder for standard images and **icons@x2** for x2 bigger retina images.
**Make sure the retina images are divisible by 4 or at least 2**. If they are not, this can lead to background position shifting.

In your main **.scss** file create a class with options to generate sprite images. you don't need to create a separate class, just add @include to your file and use $class option.
 ```scss
 @include sprites($class: '.classname', $name: image-name)
 ```

####Available options
Default folder name is icons but you can change it or add more folders in **_spriting.scss** file
 ```scss
 $icons-map: icons
 ```
By default I've enabled element size to true which set's width and height to actual source image size if you don't need it for any reason you can set it to false.
 ```scss
 $size: true //bool
 ```
If you don't need to generate sprites for retina screens don't create **icons@x2** folder and set it to false.

 ```scss
 $retina: true //bool
 ```
By default centering is set to false if you need to center your image to x or y axis use this options.
 ```scss
 $center: false //bool
 $center-y: false //bool
 $center-x: false //bool
 ```
