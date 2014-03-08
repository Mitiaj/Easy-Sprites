#!/usr/bin/env ruby
result = `sass ../scss/page.scss built.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output CSS" unless File.exists?('built.css')
puts "Regular compile worked successfully"