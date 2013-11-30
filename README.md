SCSS-Snippets alpha_1
=====================

SCSS snippets for SASS/Compass

###Spriting mixin

While using this snippet to generate sprite images some options should be aplied to your **config.rb** file (change path to match your project).

 ```ruby
 css_dir = "/Content/Styles"
 sass_dir = "scss"
 images_dir = "/Content/Styles/images"
 sprite_load_path = "scss/images"
 relative_assets = true
 sprite_engine = :chunky_png
 chunky_png_options = :best_compression
 ```

Here is a mixin options which you can use while generating sprite images. ($center)

 ```scss
 $icons-map: icons //default directory
 $size: true //default icon size will be applied for element
 $retina: true //by default retina support is set to true
 $center: false //by default set to false
 $center-y: false //by default set to false
 $center-x: false //by default set to false
 ```

###Buttons mixin options

Here is a button mixin which allow you in easy way to create any type of buttons for your projects.

 ```scss
 $name //must be applied
 $border: true //optional true/false
 $border-color: blue //optional you can choose whatever color you like
 $color: white //optional button text color
 $bg-color: white //optional add any color
 $gradient: false //optional true/false
 $top-color: white //optional this option available only if gradient set to true
 $bottom-color: white //optional this option available only if gradient set to true
 @content //directive means that you can add custom properties to our mixin see example below:
 ```

To create button just add this include into your scss file and add any of listed options. Always add class or element name as a string **'.class-name'**.

 ```scss
 @include button('.class-name'){
    border-radius: 4px;
 }
 ```

 ```scss
 @include button('btn-testing', $border: false, $bg-color: #ff0099);
 ```

To use these snippets COMPASS/SASS should be installed on your local computer.