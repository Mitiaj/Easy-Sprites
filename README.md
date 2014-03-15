Easy Sprites v0.4.2
=====================
For production please use latest [stable Version][1].
[1]: https://github.com/paulgabronis/Easy-Sprites/releases

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

####Dependencies
_please note this helper will not work with lower versions of sass and compass framework_

|Name    |Version         |
|:-------|---------------:|
|SASS    |`3.3.0`         |
|COMPASS |`1.0.0.alpha19` |

###Spriting helper usage
Copy **_spriting.scss** to your project directory and **@import** it to your main **.scss** file.
Create two folders in scss images folder. For example I've created **icons** folder for standard images and **icons@x2** for x2 bigger images for retina screens.
**Make sure that retina images are divisible by 4 or at least 2**. If they are not, this can lead to background position shifting and wrong background positioning for retina screens.

In your main **.scss** file add **@include** directive with choosen options to generate sprite images.
$class and $name options is nessesary. When use pseudo classes for sprites, class name should be **'&'**.

###Global options
Default folder name is icons but you can change it (if using retina images don't forget to create **icons@x2** folder).
Also those options should be placed above **@import "spriting"** just like that:

```scss
$icons-map: 'icons' //optional! if you keep folder name "icons"
$retina-sprite: false //by default retina spriting if set to false
$comma-separated: true //by default is set to true if you don't want comma-separated classes set it to false
@import "spriting";
```

###Local options which can be used while generating sprite images.
```scss
@include sprites($class: '&', $name:'icon-name') //if adding inside class as a module with $pseudo:true
@include sprites($class: '.class-name', $name:'icon-name', $pseudo: false) //if adding as standalone class or selector within a module
@include sprites-states($name:'active-icon') //add this mixin into sprite class if you need any additional states for your icons i.e. active, opened etc...
```
_if additional states needs to be added, your code should look like this:_
```scss
.my-class{
  &.active{
    @include sprites-states($name:'active-icon')
  }
}
//it also contains local variable:
$pseudo: true //set to false if your parent class is not a pseudo class.
```

###List of local options
You can enable hover state, just add image to icons folder and attach **-hover** to your image name.

```scss
$hover: false //bool
```

By default sprite images is enabled to use with pseudo classes/elements

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

By default comma separated option is set to global state,if global is true it means local is true.
If you need to add sprite into **@media** rule set to false localy when construct your sprites.

```scss
$comma-separated: $comma-separated //bool
```

###Compass config.rb
While using this helper to generate sprite images, configuration options should be applied to your **config.rb** file (adjust path's to match your project).

```ruby
dir = File.dirname(__FILE__)
css_dir = "/Content/Styles"
sass_dir = "scss"
images_dir = "/Content/Styles/images"
sprite_load_path = "scss/images"
relative_assets = true
sprite_engine = :chunky_png
chunky_png_options = :best_compression
```