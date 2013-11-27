SCSS-Snippets
=============

SCSS snippets for SASS/Compass

###Spriting mixin options

 ```scss
 $icons-map: icons //default
 $size: true //default
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
