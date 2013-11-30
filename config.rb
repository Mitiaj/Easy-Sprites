# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"

css_dir = "/Content/Styles"
sass_dir = "scss"
images_dir = "/Content/Styles/images"

sprite_load_path = "scss/images"
relative_assets = true
sprite_engine = :chunky_png
chunky_png_options = :best_compression

output_style = :expanded
line_comments = false

on_sprite_generated do |sprite_data|
  sprite_data.metadata['Caption'] = "Copyright &copy; 2013"
end